"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { ContactBar, ContactCTA } from "@/components/shared";
import { CONTACT, RFQ_COPY } from "@/lib/config";

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
    <form onSubmit={handleSubmit} className="card-flat space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1">Name *</label>
          <input name="name" required className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">Email *</label>
          <input name="email" type="email" required className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">WhatsApp / Telegram</label>
          <input name="whatsapp" className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">Company</label>
          <input name="company" className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">Country</label>
          <input name="country" className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">Phone (optional)</label>
          <input name="phone" className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">Product type</label>
          <select name="purchaseType" defaultValue={searchParams.get("type") || ""} className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm">
            <option value="">Select</option>
            <option value="motherboard-box">Android motherboard box</option>
            <option value="phone-farm-box">32PCS phone farm box</option>
            <option value="phone-array">12PCS phone array</option>
            <option value="iphone">iPhone farm box</option>
            <option value="network">Router / switch</option>
            <option value="oem">OEM / custom cabinet</option>
            <option value="service">Factory service</option>
            <option value="parts">Replacement parts</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">Target quantity</label>
          <input name="deviceQuantity" placeholder="e.g. 20 nodes / 3 boxes" className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">Android or iPhone</label>
          <select name="devicePlatform" className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm">
            <option value="">Select</option>
            <option value="android">Android</option>
            <option value="iphone">iPhone</option>
            <option value="mixed">Mixed / not sure</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">Connection mode</label>
          <select name="connectionMode" className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm">
            <option value="">Select</option>
            <option value="usb">USB</option>
            <option value="otg-lan">OTG/LAN</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">Custom ROM needed</label>
          <select name="customRomNeeded" className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">Shipping country</label>
          <input name="shippingCountry" className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs text-slate-500 mb-1">Product / service detail</label>
          <input name="productInterest" defaultValue={defaultProduct} placeholder="Model, SKU or service name" className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm" />
        </div>
      </div>
      <div>
        <label className="block text-xs text-slate-500 mb-1">Message *</label>
        <textarea name="message" rows={5} required placeholder="Timeline, customization, router needs, photos of current setup..." className="w-full bg-[#141c28] border border-[var(--border)] rounded-md px-3 py-2 text-white text-sm" />
      </div>
      <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
        {status === "loading" ? "Sending..." : "Send RFQ"}
      </button>
      {status === "success" && (
        <p className="text-green-400 text-sm">
          Thank you. Your RFQ has been received. Our team will review your configuration and reply with product options, setup notes and quotation.
        </p>
      )}
      {status === "error" && <p className="text-red-400 text-sm">Send failed - email {CONTACT.email} or WhatsApp directly.</p>}
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-2xl">
        <h1 className="section-title">Contact / RFQ</h1>
        <p className="section-subtitle">
          Please send your target quantity, preferred device type, connection mode and destination country. We will reply with configuration suggestions and quotation.
        </p>

        <div className="card-flat mb-8">
          <h2 className="font-medium text-white text-sm mb-3">Sales channels</h2>
          <ContactBar />
          <p className="text-xs text-slate-500 mt-4">{RFQ_COPY.paymentNote}</p>
        </div>

        <Suspense fallback={<div className="card-flat text-slate-400 text-sm">Loading form...</div>}>
          <ContactForm />
        </Suspense>

        <div className="mt-10">
          <ContactCTA title="Prefer WhatsApp or email?" />
        </div>
      </div>
    </div>
  );
}
