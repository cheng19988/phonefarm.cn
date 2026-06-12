"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PAYMENT, CONTACT } from "@/lib/config";
import { formatUsdtAmount } from "@/lib/payment-amounts";

type PaymentInfo = {
  id: string;
  expectedAmount: number;
  receivedAmount: number | null;
  paymentAddress: string;
  paymentNetwork: string;
  paymentCurrency: string;
  paymentStatus: string;
  verificationStatus: string;
  expiresAt: string;
  txHash: string | null;
  paidAt: string | null;
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
  const [loadState, setLoadState] = useState<"loading" | "ready" | "error" | "unauthorized">("loading");
  const [timeLeft, setTimeLeft] = useState("");
  const [verifyMode, setVerifyMode] = useState<"auto" | "manual">("manual");
  const [autoEnabled, setAutoEnabled] = useState(false);

  async function refreshOrder() {
    const r = await fetch(`/api/orders/${orderId}`);
    const data = await r.json();
    if (r.ok && data.orderNumber) setOrder(data);
  }

  useEffect(() => {
    fetch(`/api/orders/${orderId}`)
      .then(async (r) => {
        const data = await r.json();
        if (r.status === 401) {
          setLoadState("unauthorized");
          return;
        }
        if (!r.ok || data.error || !data.orderNumber) {
          setLoadState("error");
          return;
        }
        setOrder(data);
        setLoadState("ready");
      })
      .catch(() => setLoadState("error"));
  }, [orderId]);

  useEffect(() => {
    if (!order?.payment) return;
    const paymentId = order.payment.id;

    function tickTimer(expiresAt: string) {
      const expires = new Date(expiresAt).getTime() - Date.now();
      if (expires <= 0) setTimeLeft("Expired");
      else {
        const mins = Math.floor(expires / 60000);
        const secs = Math.floor((expires % 60000) / 1000);
        setTimeLeft(`${mins}:${secs.toString().padStart(2, "0")}`);
      }
    }

    tickTimer(order.payment.expiresAt);

    const interval = setInterval(async () => {
      const res = await fetch(`/api/payment/verify?paymentId=${paymentId}`);
      const data = await res.json();
      if (data.mode) setVerifyMode(data.mode);
      if (typeof data.autoVerificationEnabled === "boolean") setAutoEnabled(data.autoVerificationEnabled);

      const nextStatus = data.payment?.paymentStatus ?? data.status;
      if (nextStatus && nextStatus !== "pending") {
        await refreshOrder();
      } else {
        tickTimer(order.payment!.expiresAt);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [order?.payment?.id, order?.payment?.expiresAt, orderId]);

  if (loadState === "loading") {
    return <div className="section container-wide text-slate-400">Loading order…</div>;
  }

  if (loadState === "unauthorized") {
    return (
      <div className="section pb-32 md:pb-16">
        <div className="container-wide max-w-lg text-center space-y-4">
          <h1 className="text-2xl font-bold text-white">Sign in to view order</h1>
          <p className="text-slate-400 text-sm">Checkout requires an account. Log in with the email you used when placing this order.</p>
          <Link href={`/login?redirect=${encodeURIComponent(`/orders/${orderId}`)}`} className="btn-primary">Log in</Link>
        </div>
      </div>
    );
  }

  if (loadState === "error" || !order) {
    return (
      <div className="section pb-32 md:pb-16">
        <div className="container-wide max-w-lg text-center space-y-4">
          <h1 className="text-2xl font-bold text-white">Order not found</h1>
          <p className="text-slate-400 text-sm">
            This link may be invalid or expired. For bulk hardware, submit an RFQ and our sales team will send a quote.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/contact" className="btn-primary">Submit RFQ</Link>
            <Link href="/products" className="btn-outline">Browse products</Link>
          </div>
        </div>
      </div>
    );
  }

  const payment = order.payment;
  const usdtDue = payment ? formatUsdtAmount(payment.expectedAmount) : formatUsdtAmount(order.totalUsd);
  const paymentExpired = timeLeft === "Expired" || payment?.paymentStatus === "expired";
  const isManualMode = verifyMode === "manual" || payment?.verificationStatus === "manual_review";
  const showPaymentPanel =
    payment &&
    ["Waiting for Payment", "Expired"].includes(order.status) &&
    !["paid"].includes(payment.paymentStatus);

  return (
    <div className="section pb-32 md:pb-16">
      <div className="container-wide max-w-2xl">
        <h1 className="section-title">Order {order.orderNumber}</h1>
        <p className="text-slate-400 mb-2">
          Order status: <span className="text-white font-medium">{order.status}</span>
        </p>
        {payment && (
          <p className="text-slate-400 mb-6">
            Payment status: <span className="text-white font-medium">{payment.paymentStatus.replace("_", " ")}</span>
          </p>
        )}

        <div className="card p-6 mb-6">
          <h2 className="font-bold text-white mb-4">Line items</h2>
          {order.items.map((item, i) => (
            <div key={i} className="flex justify-between text-sm py-2 border-b border-slate-800">
              <Link href={`/products/${item.product.slug}`} className="text-cyan-400 hover:text-cyan-300">
                {item.product.name}
              </Link>
              <span className="text-white">${item.unitPrice.toLocaleString()} x {item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-white mt-4">
            <span>Total (USD list)</span>
            <span>${order.totalUsd.toLocaleString()}</span>
          </div>
          {payment && (
            <div className="flex justify-between text-emerald-400 font-bold mt-2 pt-2 border-t border-slate-800">
              <span>USDT due (1:1 list price)</span>
              <span className="font-mono">{usdtDue} USDT</span>
            </div>
          )}
        </div>

        {payment && order.status === "Paid" && (
          <div className="card p-6 mb-6 border-green-800/50 text-green-400 space-y-2">
            <p className="font-medium">Payment received.</p>
            {payment.txHash && (
              <p className="text-xs text-green-200/80 break-all">Tx: {payment.txHash}</p>
            )}
            {payment.receivedAmount != null && (
              <p className="text-sm">Received: {formatUsdtAmount(payment.receivedAmount)} USDT</p>
            )}
            <p className="text-sm text-green-200/90">Our team will confirm production scheduling shortly.</p>
          </div>
        )}

        {payment && payment.paymentStatus === "underpaid" && (
          <div className="card p-6 mb-6 border-amber-800/50 text-amber-100 text-sm space-y-2">
            <p className="font-medium">Underpaid — manual review</p>
            <p>Expected {usdtDue} USDT; received {payment.receivedAmount != null ? formatUsdtAmount(payment.receivedAmount) : "?"} USDT.</p>
            {payment.txHash && <p className="text-xs break-all">Tx: {payment.txHash}</p>}
            <p>Contact{" "}
              <a href={CONTACT.emailHref} className="text-cyan-400 underline" target="_blank" rel="noopener noreferrer">{CONTACT.email}</a>
              {" "}with order {order.orderNumber} to send the remainder or arrange manual confirmation.
            </p>
          </div>
        )}

        {payment && payment.paymentStatus === "overpaid" && (
          <div className="card p-6 mb-6 border-amber-800/50 text-amber-100 text-sm space-y-2">
            <p className="font-medium">Overpaid — manual review</p>
            <p>Expected {usdtDue} USDT; received {payment.receivedAmount != null ? formatUsdtAmount(payment.receivedAmount) : "?"} USDT.</p>
            {payment.txHash && <p className="text-xs break-all">Tx: {payment.txHash}</p>}
            <p>Sales will confirm your order manually. Reference order {order.orderNumber} if you contact us.</p>
          </div>
        )}

        {showPaymentPanel && !paymentExpired && (
          <div className="card p-6 mb-6 border-emerald-800/50">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h2 className="font-bold text-white">USDT payment (Tron TRC20)</h2>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${isManualMode ? "bg-amber-900/50 text-amber-200" : "bg-emerald-900/50 text-emerald-200"}`}>
                {isManualMode ? "Manual confirmation" : "Automatic on-chain verification"}
              </span>
            </div>

            {isManualMode && (
              <p className="text-sm text-amber-100/90 bg-amber-950/40 border border-amber-800/40 rounded p-3 mb-4">
                <strong>Manual confirmation:</strong> after sending USDT, email{" "}
                <a href={CONTACT.emailHref} className="text-cyan-400 underline" target="_blank" rel="noopener noreferrer">{CONTACT.email}</a>
                {" "}with your <strong>order number ({order.orderNumber})</strong>, transaction hash, and sent amount. Sales confirms within business hours.
                {!autoEnabled && " On-chain auto-check is not enabled on this server."}
              </p>
            )}

            <ol className="text-xs text-slate-400 list-decimal list-inside space-y-1 mb-4">
              <li>Copy the receiving address below (must match exactly).</li>
              <li>Send exactly <strong className="text-white">{usdtDue} USDT</strong> on {payment.paymentNetwork} within {PAYMENT.expiryMinutes} minutes.</li>
              <li>Include order <strong className="text-white">{order.orderNumber}</strong> when contacting support.</li>
              {!isManualMode && <li>Keep this page open — payment is checked every 5 seconds.</li>}
            </ol>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Order number</span><span className="text-white font-mono">{order.orderNumber}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">USD list total</span><span className="text-white">${order.totalUsd.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">USDT amount due</span><span className="text-white font-mono">{usdtDue} USDT</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Network</span><span className="text-white">{payment.paymentNetwork}</span></div>
              <div>
                <span className="text-slate-400 block mb-1">Receiving address (TRC20)</span>
                <code className="block bg-slate-800 p-3 rounded text-emerald-400 text-xs break-all">{payment.paymentAddress}</code>
              </div>
              <div className="flex justify-between"><span className="text-slate-400">USDT contract</span><span className="text-white font-mono text-xs">{PAYMENT.contract}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Minimum transfer</span><span className="text-white">{PAYMENT.minAmount} USDT</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Time remaining</span><span className="text-yellow-400">{timeLeft}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Verification</span><span className="text-slate-300">{payment.verificationStatus.replace("_", " ")}</span></div>
            </div>
          </div>
        )}

        {payment && paymentExpired && order.status !== "Paid" && (
          <div className="card p-6 mb-6 border-amber-800/50 text-amber-200/90 text-sm">
            Payment window expired (status: {payment.paymentStatus}).{" "}
            <Link href={`/products/${order.items[0]?.product.slug ?? "motherboard-box"}`} className="text-cyan-400 underline">
              Start checkout again
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-cyan-400 underline">contact sales</Link> with order {order.orderNumber} for invoice payment.
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <Link href="/account/orders" className="btn-secondary">← My orders</Link>
          <Link href="/contact" className="btn-outline">Bulk RFQ instead</Link>
        </div>
      </div>
    </div>
  );
}
