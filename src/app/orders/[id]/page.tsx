"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PAYMENT, CONTACT } from "@/lib/config";

type PaymentInfo = {
  id: string;
  expectedAmount: number;
  paymentAddress: string;
  paymentNetwork: string;
  paymentCurrency: string;
  paymentStatus: string;
  verificationStatus: string;
  expiresAt: string;
  txHash: string | null;
};

type OrderData = {
  id: string;
  orderNumber: string;
  status: string;
  totalUsd: number;
  items: { product: { name: string; slug: string }; quantity: number; unitPrice: number }[];
  payment: PaymentInfo | null;
};

export default function OrderPage() {
  const params = useParams<{ id: string }>();
  const orderId = params.id;
  const [order, setOrder] = useState<OrderData | null>(null);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    fetch(`/api/orders/${orderId}`)
      .then((r) => r.json())
      .then(setOrder)
      .catch(console.error);
  }, [orderId]);

  useEffect(() => {
    if (!order?.payment) return;
    const interval = setInterval(async () => {
      const res = await fetch(`/api/payment/verify?paymentId=${order.payment!.id}`);
      const data = await res.json();
      if (data.status === "paid") {
        fetch(`/api/orders/${orderId}`).then((r) => r.json()).then(setOrder);
      }
      const expires = new Date(order.payment!.expiresAt).getTime() - Date.now();
      if (expires <= 0) {
        setTimeLeft("Expired");
      } else {
        const mins = Math.floor(expires / 60000);
        const secs = Math.floor((expires % 60000) / 1000);
        setTimeLeft(`${mins}:${secs.toString().padStart(2, "0")}`);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [order, orderId]);

  if (!order) {
    return <div className="section container-wide text-slate-400">Loading order...</div>;
  }

  const payment = order.payment;

  return (
    <div className="section pb-32 md:pb-16">
      <div className="container-wide max-w-2xl">
        <h1 className="section-title">Order {order.orderNumber}</h1>
        <p className="text-slate-400 mb-6">
          Status: <span className="text-white font-medium">{order.status}</span>
        </p>

        <div className="card p-6 mb-6">
          <h2 className="font-bold text-white mb-4">Line items</h2>
          {order.items.map((item, i) => (
            <div key={i} className="flex justify-between text-sm py-2 border-b border-slate-800">
              <Link href={`/products/${item.product.slug}`} className="text-cyan-400 hover:text-cyan-300">
                {item.product.name}
              </Link>
              <span className="text-white">${item.unitPrice} x {item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-white mt-4">
            <span>Total</span>
            <span>${order.totalUsd.toLocaleString()}</span>
          </div>
        </div>

        {payment && order.status === "Waiting for Payment" && (
          <div className="card p-6 mb-6 border-emerald-800/50">
            <h2 className="font-bold text-white mb-4">USDT payment (Tron TRC20)</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Amount</span><span className="text-white font-mono">{payment.expectedAmount} USDT</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Network</span><span className="text-white">{payment.paymentNetwork}</span></div>
              <div>
                <span className="text-slate-400 block mb-1">Receiving address</span>
                <code className="block bg-slate-800 p-3 rounded text-emerald-400 text-xs break-all">{payment.paymentAddress}</code>
              </div>
              <div className="flex justify-between"><span className="text-slate-400">Contract</span><span className="text-white font-mono text-xs">{PAYMENT.contract}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Minimum</span><span className="text-white">{PAYMENT.minAmount} USDT</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Time remaining</span><span className="text-yellow-400">{timeLeft}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Verification</span><span className="text-slate-300">{payment.verificationStatus}</span></div>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Send the exact USDT amount via Tron TRC20. On-chain verification runs when TRON_API_KEY is configured; otherwise contact{" "}
              <a href={CONTACT.emailHref} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{CONTACT.email}</a> with your transaction hash.
            </p>
          </div>
        )}

        {order.status === "Paid" && (
          <div className="card p-6 mb-6 border-green-800/50 text-green-400">
            Payment received. Our team will confirm your order shortly.
          </div>
        )}

        <Link href="/account/orders" className="btn-secondary">← Back to my orders</Link>
      </div>
    </div>
  );
}
