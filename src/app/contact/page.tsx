"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { ContactBar } from "@/components/shared";
import { CONTACT, SITE } from "@/lib/config";

function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });
    setStatus(res.ok ? "success" : "error");
  }

  const defaultProduct = searchParams.get("product") || searchParams.get("service") || "";

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">姓名 *</label>
          <input name="name" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">公司名称</label>
          <input name="company" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">国家/地区</label>
          <input name="country" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">WhatsApp / Telegram</label>
          <input name="whatsapp" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">电话</label>
          <input name="phone" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">邮箱 *</label>
          <input name="email" type="email" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">采购类型</label>
          <select name="purchaseType" defaultValue={searchParams.get("type") || ""} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white">
            <option value="">请选择</option>
            <option value="sample">样品评估</option>
            <option value="bulk">批量采购</option>
            <option value="oem">OEM 定制</option>
            <option value="agent">代理商合作</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">预计设备数量</label>
          <input name="deviceQuantity" placeholder="例如：10 台 / 100 节点" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-slate-400 mb-1">感兴趣产品</label>
          <input name="productInterest" defaultValue={defaultProduct} placeholder="主板盒 / 32PCS 整机盒 / 定制方案" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">预算范围（USD）</label>
          <input name="budget" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-1">项目需求说明</label>
        <textarea name="message" rows={4} placeholder="请说明应用场景、目标平台、交付时间等" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
      </div>
      <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
        {status === "loading" ? "提交中..." : "提交询价"}
      </button>
      {status === "success" && <p className="text-green-400 text-sm">感谢提交，我们将在 24 小时内回复。</p>}
      {status === "error" && <p className="text-red-400 text-sm">提交失败，请直接通过 WhatsApp 或电话联系我们。</p>}
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-4xl">
        <h1 className="section-title">联系我们</h1>
        <p className="section-subtitle">批量采购、代理商合作、OEM 定制与样品评估 — 请填写表单或直接联系销售团队。</p>

        <div className="card p-6 mb-8">
          <h2 className="font-bold text-white mb-4">销售联系方式</h2>
          <ContactBar />
          <ul className="mt-4 space-y-2 text-slate-300 text-sm">
            <li>电话：{CONTACT.phone}</li>
            <li>WhatsApp：{CONTACT.whatsapp}</li>
            <li>Telegram：{CONTACT.telegram}</li>
            <li>邮箱：{CONTACT.email}</li>
            <li>地址：{SITE.address}</li>
          </ul>
        </div>

        <Suspense fallback={<div className="card p-6 text-slate-400">加载表单...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
