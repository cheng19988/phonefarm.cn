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

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">姓名 Name *</label>
          <input name="name" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">国家 Country</label>
          <input name="country" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">WhatsApp / Telegram</label>
          <input name="whatsapp" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">电话 Phone</label>
          <input name="phone" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">邮箱 Email *</label>
          <input name="email" type="email" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">设备数量 Device Quantity</label>
          <input name="deviceQuantity" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">感兴趣产品 Product Interest</label>
          <input name="productInterest" defaultValue={searchParams.get("product") || searchParams.get("service") || ""} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">预算 Budget</label>
          <input name="budget" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-1">留言 Message</label>
        <textarea name="message" rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
      </div>
      <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
        {status === "loading" ? "提交中..." : "提交询价"}
      </button>
      {status === "success" && <p className="text-green-400 text-sm">感谢提交！我们将在 24 小时内回复。</p>}
      {status === "error" && <p className="text-red-400 text-sm">提交失败，请直接通过 WhatsApp 联系我们。</p>}
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-4xl">
        <h1 className="section-title">联系我们</h1>
        <p className="section-subtitle">广州手机农场工厂直销 — 批量采购、代理商合作、ROM 定制，24 小时内回复报价。</p>

        <div className="card p-6 mb-8">
          <h2 className="font-bold text-white mb-4">直接联系 Direct Contact</h2>
          <ContactBar />
          <ul className="mt-4 space-y-2 text-slate-300 text-sm">
            <li>电话：{CONTACT.phone}</li>
            <li>WhatsApp：{CONTACT.whatsapp}</li>
            <li>Telegram：{CONTACT.telegram}</li>
            <li>邮箱：{CONTACT.email}</li>
            <li>地址：{SITE.location}</li>
          </ul>
        </div>

        <Suspense fallback={<div className="card p-6 text-slate-400">加载表单...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
