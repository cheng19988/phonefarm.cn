"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { ContactBar, ContactCTA } from "@/components/shared";
import { PageBanner } from "@/components/site-sections";
import { CONTACT, RFQ_COPY } from "@/lib/config";
import { bannerProps } from "@/lib/banners";

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
  const [startedAt] = useState(() => Date.now());

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
      <input type="hidden" name="_form_started" value={startedAt} />
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="contact-hp">Company website</label>
        <input id="contact-hp" name="_company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="form-label">Name *</label>
          <input id="contact-name" name="name" required className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="form-label">Email *</label>
          <input id="contact-email" name="email" type="email" required className={inputClass} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="contact-whatsapp" className="form-label">WhatsApp / Telegram</label>
          <input id="contact-whatsapp" name="whatsapp" className={inputClass} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="contact-company" className="form-label">Company</label>
          <input id="contact-company" name="company" className={inputClass} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="contact-country" className="form-label">Country</label>
          <input id="contact-country" name="country" className={inputClass} autoComplete="country-name" />
        </div>
        <div>
          <label htmlFor="contact-quantity" className="form-label">Device quantity</label>
          <input id="contact-quantity" name="deviceQuantity" placeholder="e.g. 20 nodes, 2 boxes" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-purchase-type" className="form-label">Purchase type</label>
          <select id="contact-purchase-type" name="purchaseType" className={inputClass}>
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
          <label htmlFor="contact-platform" className="form-label">Device platform</label>
          <select id="contact-platform" name="devicePlatform" className={inputClass}>
            <option value="">Select</option>
            <option value="android">Android</option>
            <option value="iphone">iPhone</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact-connection" className="form-label">Connection mode</label>
          <select id="contact-connection" name="connectionMode" className={inputClass}>
            <option value="">Select</option>
            <option value="usb">USB</option>
            <option value="otg-lan">OTG/LAN</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact-rom" className="form-label">Custom ROM needed</label>
          <select id="contact-rom" name="customRomNeeded" className={inputClass}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact-shipping" className="form-label">Shipping country</label>
          <input id="contact-shipping" name="shippingCountry" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-budget" className="form-label">Budget (optional)</label>
          <input id="contact-budget" name="budget" placeholder="USD range" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-product" className="form-label">Product / SKU interest</label>
          <input id="contact-product" name="productInterest" defaultValue={defaultProduct} placeholder="Model or package name" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="form-label">Message *</label>
        <textarea id="contact-message" name="message" rows={5} required placeholder="Timeline, customization, router needs..." className={inputClass} />
      </div>
      <label className="flex items-start gap-3 text-sm text-slate-400 cursor-pointer">
        <input type="checkbox" required className="mt-1 rounded border-slate-600" />
        <span>
          I agree that my details will be used to respond to this RFQ. See our{" "}
          <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">Privacy Policy</Link>.
        </span>
      </label>
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
          <p><a href={CONTACT.emailHref} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{CONTACT.email}</a></p>
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
        {...bannerProps("contact")}
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
