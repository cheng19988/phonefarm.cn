import { PAYMENT } from "./config";
import { prisma } from "./prisma";

export type TronTransaction = {
  txHash: string;
  amount: number;
  to: string;
  confirmed: boolean;
};

const USDT_DECIMALS = 1_000_000;

function normalizeTronAddress(addr: string) {
  return addr.trim();
}

/** Query TronGrid for inbound USDT (TRC20) transfers to our receiving address. */
export async function verifyTronPayment(
  address: string,
  expectedAmount: number,
  since: Date
): Promise<TronTransaction | null> {
  const apiKey = process.env.TRON_API_KEY?.trim();
  if (!apiKey) return null;

  const receiving = normalizeTronAddress(address);
  const minTimestamp = since.getTime() - 60_000;

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
      const to = tx.to ? normalizeTronAddress(tx.to) : "";
      if (to !== receiving) continue;
      const amount = Number(BigInt(tx.value || "0")) / USDT_DECIMALS;
      if (amount + 0.01 >= expectedAmount) {
        return {
          txHash: tx.transaction_id || "",
          amount,
          to: receiving,
          confirmed: true,
        };
      }
    }
  } catch (error) {
    console.warn("[payment] TronGrid error:", error instanceof Error ? error.message : "unknown");
  }

  return null;
}

export async function checkAndUpdatePayment(paymentId: string) {
  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: { order: true },
  });
  if (!payment) return null;

  if (new Date() > payment.expiresAt && payment.paymentStatus === "pending") {
    await prisma.payment.update({
      where: { id: paymentId },
      data: { paymentStatus: "expired", verificationStatus: "expired" },
    });
    await prisma.order.update({
      where: { id: payment.orderId },
      data: { status: "Expired" },
    });
    return { status: "expired" as const };
  }

  if (payment.paymentStatus === "paid") {
    return { status: "paid" as const, payment };
  }

  const tx = await verifyTronPayment(
    payment.paymentAddress,
    payment.expectedAmount,
    payment.createdAt
  );

  if (tx && tx.amount >= payment.expectedAmount - 0.01) {
    const now = new Date();
    await prisma.payment.update({
      where: { id: paymentId },
      data: {
        paymentStatus: "paid",
        verificationStatus: "verified",
        receivedAmount: tx.amount,
        txHash: tx.txHash,
        paidAt: now,
      },
    });
    await prisma.order.update({
      where: { id: payment.orderId },
      data: { status: "Paid" },
    });
    return { status: "paid" as const, payment };
  }

  return { status: "pending" as const, payment };
}

export function createPaymentExpiry() {
  return new Date(Date.now() + PAYMENT.expiryMinutes * 60 * 1000);
}

export function usdToUsdt(usd: number) {
  return Math.max(PAYMENT.minAmount, Math.round(usd * 100) / 100);
}
