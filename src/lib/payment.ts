import { PAYMENT } from "./config";
import { PAYMENT_AMOUNT_TOLERANCE, usdToUsdt } from "./payment-amounts";
import { prisma } from "./prisma";

export { formatUsdtAmount, paymentStatusLabel, usdToUsdt, PAYMENT_AMOUNT_TOLERANCE } from "./payment-amounts";

export type PaymentStatus =
  | "pending"
  | "paid"
  | "underpaid"
  | "overpaid"
  | "expired"
  | "manual_review";

export type TronTransaction = {
  txHash: string;
  amount: number;
  to: string;
  confirmed: boolean;
};

const USDT_DECIMALS = 1_000_000;

export function isAutoVerificationEnabled() {
  return Boolean(process.env.TRON_API_KEY?.trim());
}

function normalizeTronAddress(addr: string) {
  return addr.trim();
}

export function createPaymentExpiry() {
  return new Date(Date.now() + PAYMENT.expiryMinutes * 60 * 1000);
}

export function initialVerificationStatus() {
  return isAutoVerificationEnabled() ? "unverified" : "manual_review";
}

function classifyReceivedAmount(expected: number, received: number): PaymentStatus {
  const delta = received - expected;
  if (Math.abs(delta) <= PAYMENT_AMOUNT_TOLERANCE) return "paid";
  if (received < expected - PAYMENT_AMOUNT_TOLERANCE) return "underpaid";
  return "overpaid";
}

/** Query TronGrid for the most recent inbound USDT (TRC20) transfer to our address. */
export async function findTronTransfer(
  address: string,
  since: Date,
  excludeTxHashes: string[] = []
): Promise<TronTransaction | null> {
  const apiKey = process.env.TRON_API_KEY?.trim();
  if (!apiKey) return null;

  const receiving = normalizeTronAddress(address);
  const minTimestamp = since.getTime() - 60_000;
  const excluded = new Set(excludeTxHashes.filter(Boolean));

  try {
    const params = new URLSearchParams({
      limit: "50",
      contract_address: PAYMENT.contract,
      only_to: "true",
      min_timestamp: String(minTimestamp),
    });
    const url = `https://api.trongrid.io/v1/accounts/${receiving}/transactions/trc20?${params}`;
    const res = await fetch(url, {
      headers: { "TRON-PRO-API-KEY": apiKey },
      cache: "no-store",
    });
    if (!res.ok) {
      console.warn("[payment] TronGrid HTTP", res.status);
      return null;
    }

    const json = (await res.json()) as {
      data?: Array<{
        transaction_id?: string;
        to?: string;
        value?: string;
        block_timestamp?: number;
      }>;
    };

    for (const tx of json.data ?? []) {
      const txHash = tx.transaction_id || "";
      if (!txHash || excluded.has(txHash)) continue;
      const to = tx.to ? normalizeTronAddress(tx.to) : "";
      if (to !== receiving) continue;
      const amount = Number(BigInt(tx.value || "0")) / USDT_DECIMALS;
      if (amount <= 0) continue;
      return {
        txHash,
        amount,
        to: receiving,
        confirmed: true,
      };
    }
  } catch (error) {
    console.warn("[payment] TronGrid error:", error instanceof Error ? error.message : "unknown");
  }

  return null;
}

async function usedTxHashes(excludePaymentId: string) {
  const rows = await prisma.payment.findMany({
    where: {
      txHash: { not: null },
      NOT: { id: excludePaymentId },
    },
    select: { txHash: true },
  });
  return rows.map((r) => r.txHash!).filter(Boolean);
}

function verificationStatusForPaymentStatus(status: PaymentStatus) {
  switch (status) {
    case "paid":
      return "auto_verified";
    case "underpaid":
      return "underpaid";
    case "overpaid":
      return "overpaid";
    case "expired":
      return "expired";
    case "manual_review":
      return "manual_review";
    default:
      return "unverified";
  }
}

function orderStatusForPaymentStatus(status: PaymentStatus) {
  switch (status) {
    case "paid":
      return "Paid";
    case "expired":
      return "Expired";
    case "underpaid":
    case "overpaid":
    case "manual_review":
      return "Waiting for Payment";
    default:
      return "Waiting for Payment";
  }
}

export async function checkAndUpdatePayment(paymentId: string) {
  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: { order: true },
  });
  if (!payment) return null;

  const terminal: PaymentStatus[] = ["paid", "expired", "underpaid", "overpaid"];
  if (terminal.includes(payment.paymentStatus as PaymentStatus)) {
    return {
      status: payment.paymentStatus as PaymentStatus,
      payment,
      mode: isAutoVerificationEnabled() ? "auto" : "manual",
    };
  }

  const expired = new Date() > payment.expiresAt;
  if (expired && payment.paymentStatus === "pending") {
    await prisma.payment.update({
      where: { id: paymentId },
      data: { paymentStatus: "expired", verificationStatus: "expired" },
    });
    await prisma.order.update({
      where: { id: payment.orderId },
      data: { status: "Expired" },
    });
    return { status: "expired" as const, payment, mode: isAutoVerificationEnabled() ? "auto" : "manual" as const };
  }

  if (!isAutoVerificationEnabled()) {
    return {
      status: (payment.paymentStatus as PaymentStatus) || "pending",
      payment,
      mode: "manual" as const,
    };
  }

  const exclude = await usedTxHashes(paymentId);
  const tx = await findTronTransfer(payment.paymentAddress, payment.createdAt, exclude);

  if (!tx) {
    return { status: "pending" as const, payment, mode: "auto" as const };
  }

  const nextStatus = classifyReceivedAmount(payment.expectedAmount, tx.amount);
  const verificationStatus = verificationStatusForPaymentStatus(nextStatus);
  const now = new Date();

  await prisma.payment.update({
    where: { id: paymentId },
    data: {
      paymentStatus: nextStatus,
      verificationStatus,
      receivedAmount: tx.amount,
      txHash: tx.txHash,
      ...(nextStatus === "paid" ? { paidAt: now } : {}),
    },
  });
  await prisma.order.update({
    where: { id: payment.orderId },
    data: { status: orderStatusForPaymentStatus(nextStatus) },
  });

  return { status: nextStatus, payment, mode: "auto" as const };
}

/** Admin manual confirmation after reviewing chain transfer. */
export async function confirmPaymentManually(
  paymentId: string,
  data: { txHash?: string; receivedAmount?: number }
) {
  const payment = await prisma.payment.findUnique({ where: { id: paymentId } });
  if (!payment) return null;

  const received = data.receivedAmount ?? payment.receivedAmount ?? payment.expectedAmount;
  const now = new Date();

  await prisma.payment.update({
    where: { id: paymentId },
    data: {
      paymentStatus: "paid",
      verificationStatus: "manual_confirmed",
      receivedAmount: received,
      txHash: data.txHash ?? payment.txHash,
      paidAt: now,
    },
  });
  await prisma.order.update({
    where: { id: payment.orderId },
    data: { status: "Paid" },
  });

  return prisma.payment.findUnique({ where: { id: paymentId } });
}
