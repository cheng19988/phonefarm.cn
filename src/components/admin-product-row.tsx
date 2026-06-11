"use client";

import { useState } from "react";

export function AdminProductRow({
  id,
  name,
  priceUsd,
  stock,
  published,
}: {
  id: string;
  name: string;
  priceUsd: number;
  stock: number;
  published: boolean;
}) {
  const [price, setPrice] = useState(String(priceUsd));
  const [qty, setQty] = useState(String(stock));
  const [live, setLive] = useState(published);
  const [saved, setSaved] = useState(false);

  async function save() {
    await fetch("/api/admin/products", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: id, priceUsd: price, stock: qty, published: live }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <tr className="border-b border-slate-800">
      <td className="py-3 text-white">{name}</td>
      <td className="py-3">
        <input value={price} onChange={(e) => setPrice(e.target.value)} className="form-input-sm w-20" aria-label={`Price for ${name}`} />
      </td>
      <td className="py-3">
        <input value={qty} onChange={(e) => setQty(e.target.value)} className="form-input-sm w-16" aria-label={`Stock for ${name}`} />
      </td>
      <td className="py-3">
        <label className="inline-flex items-center gap-2 text-slate-300 text-xs cursor-pointer">
          <input type="checkbox" checked={live} onChange={(e) => setLive(e.target.checked)} className="rounded border-slate-600" />
          Published
        </label>
      </td>
      <td className="py-3">
        <button type="button" onClick={save} className="text-cyan-400 text-xs hover:text-cyan-300">
          {saved ? "Saved" : "Save"}
        </button>
      </td>
    </tr>
  );
}
