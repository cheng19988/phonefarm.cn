"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const STATUSES = [
  "Pending",
  "Waiting for Payment",
  "Paid",
  "Confirmed",
  "Shipped",
  "Cancelled",
  "Expired",
] as const;

export function AdminOrderRow({
  id,
  orderNumber,
  status,
  email,
  totalUsd,
}: {
  id: string;
  orderNumber: string;
  status: string;
  email: string;
  totalUsd: number;
}) {
  const router = useRouter();
  const [value, setValue] = useState(status);
  const [saving, setSaving] = useState(false);

  async function save(next: string) {
    setValue(next);
    setSaving(true);
    try {
      await fetch("/api/admin/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: id, status: next }),
      });
      router.refresh();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="card p-4 text-sm">
      <div className="flex flex-wrap justify-between gap-2">
        <a href={`/orders/${id}`} className="text-cyan-400 hover:text-cyan-300 font-medium">
          {orderNumber}
        </a>
        <span className="text-white">${totalUsd}</span>
      </div>
      <p className="text-slate-400 mt-1 truncate">{email}</p>
      <select
        value={value}
        disabled={saving}
        onChange={(e) => save(e.target.value)}
        className="form-input-sm mt-3 w-full max-w-xs"
      >
        {STATUSES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
}
