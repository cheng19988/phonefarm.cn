"use client";

import { useState } from "react";

export function AdminProductRow({
  id,
  name,
  priceUsd,
  stock,
}: {
  id: string;
  name: string;
  priceUsd: number;
  stock: number;
}) {
  const [price, setPrice] = useState(String(priceUsd));
  const [qty, setQty] = useState(String(stock));
  const [saved, setSaved] = useState(false);

  async function save() {
    await fetch("/api/admin/products", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: id, priceUsd: price, stock: qty }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <tr className="border-b border-slate-800">
      <td className="py-3 text-white">{name}</td>
      <td className="py-3">
        <input value={price} onChange={(e) => setPrice(e.target.value)} className="form-input-sm w-20" />
      </td>
      <td className="py-3">
        <input value={qty} onChange={(e) => setQty(e.target.value)} className="form-input-sm w-16" />
      </td>
      <td className="py-3">
        <button type="button" onClick={save} className="text-cyan-400 text-xs hover:text-cyan-300">
          {saved ? "Saved" : "Save"}
        </button>
      </td>
    </tr>
  );
}
