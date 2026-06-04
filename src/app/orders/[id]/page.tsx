"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
        setTimeLeft("已过期");
      } else {
        const mins = Math.floor(expires / 60000);
        const secs = Math.floor((expires % 60000) / 1000);
        setTimeLeft(`${mins}:${secs.toString().padStart(2, "0")}`);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [order, orderId]);

  if (!order) return <div className="section container-wide text-slate-400">加载订单中...</div>;

  const payment = order.payment;

  return (
    <div className="section">
      <div className="container-wide max-w-2xl">
        <h1 className="section-title">订单 {order.orderNumber}</h1>
        <p className="text-slate-400 mb-6">状态：<span className="text-white font-medium">{order.status}</span></p>

        <div className="card p-6 mb-6">
          <h2 className="font-bold text-white mb-4">订单明细</h2>
          {order.items.map((item, i) => (
            <div key={i} className="flex justify-between text-sm py-2 border-b border-slate-800">
              <Link href={`/products/${item.product.slug}`} className="text-emerald-400">{item.product.name}</Link>
              <span className="text-white">${item.unitPrice} × {item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-white mt-4">
            <span>合计</span>
            <span>${order.totalUsd.toLocaleString()}</span>
          </div>
        </div>

        {payment && order.status === "Waiting for Payment" && (
          <div className="card p-6 mb-6 border-emerald-800/50">
            <h2 className="font-bold text-white mb-4">USDT 支付（Tron TRC20）</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">金额</span><span className="text-white font-mono">{payment.expectedAmount} USDT</span></div>
              <div className="flex justify-between"><span className="text-slate-400">网络</span><span className="text-white">{payment.paymentNetwork}</span></div>
              <div>
                <span className="text-slate-400 block mb-1">收款地址</span>
                <code className="block bg-slate-800 p-3 rounded text-emerald-400 text-xs break-all">{payment.paymentAddress}</code>
              </div>
              <div className="flex justify-between"><span className="text-slate-400">合约地址</span><span className="text-white font-mono text-xs">{PAYMENT.contract}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">最低支付</span><span className="text-white">{PAYMENT.minAmount} USDT</span></div>
              <div className="flex justify-between"><span className="text-slate-400">剩余时间</span><span className="text-yellow-400">{timeLeft}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">验证状态</span><span className="text-slate-300">{payment.verificationStatus}</span></div>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              请通过 Tron TRC20 网络发送准确 USDT 金额。配置 Tron API 后将自动验证到账。如需帮助请联系 {CONTACT.email}。
            </p>
          </div>
        )}

        {order.status === "Paid" && (
          <div className="card p-6 mb-6 border-green-800/50 text-green-400">
            支付已收到，我们的团队将尽快确认您的订单。
          </div>
        )}

        <Link href="/account/orders" className="btn-secondary">← 返回我的订单</Link>
      </div>
    </div>
  );
}
