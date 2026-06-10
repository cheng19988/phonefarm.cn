"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { ContactBar, ContactCTA } from "@/components/shared";
import { PageBanner } from "@/components/site-sections";
import { CONTACT, RFQ_COPY } from "@/lib/config";
import { IMAGES } from "@/lib/images";

function FormSkeleton() {
  return (
    <div className="card-flat space-y-4 animate-pulse">
      <div className="grid sm:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-12 bg-[var(--surface)] rounded-lg" />
        ))}
      </div>
      <div className="h-32 bg-[var(--surface)] rounded-lg" />
      <div className="h-12 bg-[var(--surface)] rounded-lg" />
    </div>
  );
}

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
  const inputClass = "form-input";

  return (
    <form onSubmit={handleSubmit} className="card-flat space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Name *</label>
          <input name="name" required className={inputClass} />
        </div>
        <div>
          <label className="form-label">Email *</label>
          <input name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label className="form-label">WhatsApp / Telegram</label>
          <input name="whatsapp" className={inputClass} />
        </div>
        <div>
          <label className="form-label">Company</label>
          <input name="company" className={inputClass} />
        </div>
        <div>
          <label className="form-label">Country</label>
          <input name="country" className={inputClass} />
        </div>
        <div>
          <label className="form-label">Device quantity</label>
          <input name="deviceQuantity" placeholder="e.g. 20 nodes, 2 boxes" className={inputClass} />
        </div>
        <div>
          <label className="form-label">Purchase type</label>
          <select name="purchaseType" className={inputClass}>
            <option value="">Select</option>
            <option value="motherboard-box">Android motherboard box</option>
            <option value="phone-farm-box">32PCS phone farm box</option>
            <option value="phone-array">12PCS phone array</option>
            <option value="iphone">iPhone farm box</option>
            <option value="oem">OEM / custom cabinet</option>
            <option value="service">Factory service</option>
          </select>
        </div>
        <div>
          <label className="form-label">Device platform</label>
          <select name="devicePlatform" className={inputClass}>
            <option value="">Select</option>
            <option value="android">Android</option>
            <option value="iphone">iPhone</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>
        <div>
          <label className="form-label">Connection mode</label>
          <select name="connectionMode" className={inputClass}>
            <option value="">Select</option>
            <option value="usb">USB</option>
            <option value="otg-lan">OTG/LAN</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label className="form-label">Custom ROM needed</label>
          <select name="customRomNeeded" className={inputClass}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label className="form-label">Shipping country</label>
          <input name="shippingCountry" className={inputClass} />
        </div>
        <div>
          <label className="form-label">Budget (optional)</label>
          <input name="budget" placeholder="USD range" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label className="form-label">Product / SKU interest</label>
          <input name="productInterest" defaultValue={defaultProduct} placeholder="Model or package name" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="form-label">Message *</label>
        <textarea name="message" rows={5} required placeholder="Timeline, customization, router needs..." className={inputClass} />
      </div>
      <button type="submit" disabled={status === "loading"} className="btn-primary w-full min-h-[48px]">
        {status === "loading" ? "Sending..." : "Send RFQ"}
      </button>
      {status === "success" && (
        <p className="text-emerald-400 text-sm bg-emerald-950/40 border border-emerald-800/50 rounded-lg p-4">
          Thank you. Your RFQ has been received. We will reply with configuration options and quotation within 24 hours on business days.
        </p>
      )}
      {status === "error" && (
        <div className="text-red-400 text-sm bg-red-950/40 border border-red-800/50 rounded-lg p-4 space-y-1">
          <p>Send failed. Please contact us directly:</p>
          <p><a href={`mailto:${CONTACT.email}`} className="text-cyan-400 underline">{CONTACT.email}</a></p>
          <p><a href={CONTACT.whatsappUrl} className="underline">WhatsApp</a> · <a href={CONTACT.telegramUrl} className="underline">Telegram</a></p>
        </div>
      )}
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact / RFQ"
        subtitle="Send target quantity, device type, connection mode and shipping country — we reply with factory configuration and quote."
        image={IMAGES.motherboardBox.hero}
      />
      <section className="section">
        <div className="container-wide max-w-3xl">
          <div className="card-flat mb-8">
            <h2 className="font-bold text-white mb-3">Sales channels</h2>
            <ContactBar />
            <p className="text-sm text-slate-500 mt-4">{RFQ_COPY.paymentNote}</p>
          </div>
          <Suspense fallback={<FormSkeleton />}>
            <ContactForm />
          </Suspense>
          <div className="mt-12">
            <ContactCTA title="Prefer WhatsApp or email?" />
          </div>
        </div>
      </section>
    </>
  );
}
