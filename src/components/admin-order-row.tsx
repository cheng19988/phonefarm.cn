"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { paymentStatusLabel } from "@/lib/payment-amounts";

const ORDER_STATUSES = [
  "Pending",
  "Waiting for Payment",
  "Paid",
  "Confirmed",
  "Shipped",
  "Cancelled",
  "Expired",
] as const;

const PAYMENT_STATUSES = [
  "pending",
  "paid",
  "underpaid",
  "overpaid",
  "expired",
  "manual_review",
] as const;

type PaymentSummary = {
  id: string;
  paymentStatus: string;
  verificationStatus: string;
  expectedAmount: number;
  receivedAmount: number | null;
  txHash: string | null;
  expiresAt: string;
  paymentAddress: string;
};

export function AdminOrderRow({
  id,
  orderNumber,
  status,
  email,
  totalUsd,
  payment,
}: {
  id: string;
  orderNumber: string;
  status: string;
  email: string;
  totalUsd: number;
  payment: PaymentSummary | null;
}) {
  const router = useRouter();
  const [orderStatus, setOrderStatus] = useState(status);
  const [paymentStatus, setPaymentStatus] = useState(payment?.paymentStatus ?? "");
  const [saving, setSaving] = useState(false);

  async function patch(body: Record<string, unknown>) {
    setSaving(true);
    try {
      await fetch("/api/admin/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: id, ...body }),
      });
      router.refresh();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="card p-4 text-sm space-y-3">
      <div className="flex flex-wrap justify-between gap-2">
        <a href={`/orders/${id}`} className="text-cyan-400 hover:text-cyan-300 font-medium">
          {orderNumber}
        </a>
        <span className="text-white">${totalUsd}</span>
      </div>
      <p className="text-slate-400 truncate">{email}</p>

      {payment ? (
        <div className="text-xs space-y-1 bg-slate-900/60 rounded p-3 border border-slate-800">
          <div className="flex justify-between gap-2">
            <span className="text-slate-500">Payment</span>
            <span className="text-white font-medium">{paymentStatusLabel(payment.paymentStatus)}</span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-slate-500">Expected USDT</span>
            <span className="text-white font-mono">{payment.expectedAmount}</span>
          </div>
          {payment.receivedAmount != null && (
            <div className="flex justify-between gap-2">
              <span className="text-slate-500">Received USDT</span>
              <span className="text-white font-mono">{payment.receivedAmount}</span>
            </div>
          )}
          {payment.txHash && (
            <p className="text-slate-400 break-all pt-1">Tx: {payment.txHash}</p>
          )}
          <p className="text-slate-500">Verify: {payment.verificationStatus.replace("_", " ")}</p>
          <p className="text-slate-500">Expires: {new Date(payment.expiresAt).toLocaleString()}</p>
          <select
            value={paymentStatus}
            disabled={saving}
            onChange={(e) => {
              const next = e.target.value;
              setPaymentStatus(next);
              void patch({ paymentStatus: next });
            }}
            className="form-input-sm mt-2 w-full"
          >
            {PAYMENT_STATUSES.map((s) => (
              <option key={s} value={s}>{paymentStatusLabel(s)}</option>
            ))}
          </select>
          {payment.paymentStatus !== "paid" && (
            <button
              type="button"
              disabled={saving}
              onClick={() => void patch({ confirmPayment: true, txHash: payment.txHash ?? undefined, receivedAmount: payment.receivedAmount ?? payment.expectedAmount })}
              className="btn-secondary w-full mt-2 min-h-[36px] text-xs"
            >
              Confirm payment manually
            </button>
          )}
        </div>
      ) : (
        <p className="text-xs text-slate-500">No USDT payment record (RFQ order)</p>
      )}

      <select
        value={orderStatus}
        disabled={saving}
        onChange={(e) => {
          const next = e.target.value;
          setOrderStatus(next);
          void patch({ status: next });
        }}
        className="form-input-sm w-full max-w-xs"
      >
        {ORDER_STATUSES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
}
