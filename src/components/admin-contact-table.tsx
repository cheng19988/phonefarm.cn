"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export type AdminContactRow = {
  id: string;
  name: string;
  email: string;
  country: string | null;
  productInterest: string | null;
  deviceQuantity: string | null;
  connectionMode: string | null;
  status: string;
  createdAt: string;
  message: string | null;
};

const STATUSES = ["New", "Contacted", "Quoted", "Closed", "Spam"] as const;

export function AdminContactTable({ contacts }: { contacts: AdminContactRow[] }) {
  const router = useRouter();
  const [savingId, setSavingId] = useState<string | null>(null);

  async function updateStatus(id: string, status: string) {
    setSavingId(id);
    try {
      await fetch("/api/admin/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      router.refresh();
    } finally {
      setSavingId(null);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">RFQ Inquiries</h2>
        <a href="/api/admin/contacts/export" className="btn-secondary text-xs py-1.5">
          Export CSV
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-left">
              <th className="py-2 pr-3">Date</th>
              <th className="py-2 pr-3">Name</th>
              <th className="py-2 pr-3">Email</th>
              <th className="py-2 pr-3">Country</th>
              <th className="py-2 pr-3">Product</th>
              <th className="py-2 pr-3">Qty</th>
              <th className="py-2 pr-3">Mode</th>
              <th className="py-2 pr-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id} className="border-b border-slate-800/60 align-top">
                <td className="py-2 pr-3 text-slate-500 whitespace-nowrap">
                  {new Date(c.createdAt).toLocaleDateString()}
                </td>
                <td className="py-2 pr-3 text-white">{c.name}</td>
                <td className="py-2 pr-3 text-slate-300">{c.email}</td>
                <td className="py-2 pr-3 text-slate-400">{c.country || "-"}</td>
                <td className="py-2 pr-3 text-slate-400 max-w-[120px] truncate">{c.productInterest || "-"}</td>
                <td className="py-2 pr-3 text-slate-400">{c.deviceQuantity || "-"}</td>
                <td className="py-2 pr-3 text-slate-400">{c.connectionMode || "-"}</td>
                <td className="py-2 pr-3">
                  <select
                    value={c.status}
                    disabled={savingId === c.id}
                    onChange={(e) => updateStatus(c.id, e.target.value)}
                    className="form-input-sm"
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {contacts.length === 0 && <p className="text-slate-500 text-sm mt-4">No inquiries yet.</p>}
    </div>
  );
}
