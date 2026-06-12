"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CONTACT } from "@/lib/config";

export function ContactFormSkeleton() {
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

export function ContactForm() {
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
    <form onSubmit={handleSubmit} className="card-flat space-y-8">
      <input type="hidden" name="_form_started" value={startedAt} />
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="contact-hp">Company website</label>
        <input id="contact-hp" name="_company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset className="space-y-4 border-0 p-0">
        <legend className="text-white font-semibold text-base mb-1">Your details</legend>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="form-label">Full name *</label>
            <input id="contact-name" name="name" required className={inputClass} autoComplete="name" placeholder="John Smith" />
          </div>
          <div>
            <label htmlFor="contact-email" className="form-label">Work email *</label>
            <input id="contact-email" name="email" type="email" required className={inputClass} autoComplete="email" placeholder="you@company.com" />
          </div>
          <div>
            <label htmlFor="contact-whatsapp" className="form-label">WhatsApp / Telegram</label>
            <input id="contact-whatsapp" name="whatsapp" className={inputClass} autoComplete="tel" placeholder="+1 234 567 8900" />
          </div>
          <div>
            <label htmlFor="contact-company" className="form-label">Company</label>
            <input id="contact-company" name="company" className={inputClass} autoComplete="organization" placeholder="Company Ltd." />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="contact-country" className="form-label">Country / region</label>
            <input id="contact-country" name="country" className={inputClass} autoComplete="country-name" placeholder="United States" />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4 border-0 p-0">
        <legend className="text-white font-semibold text-base mb-1">Project requirements</legend>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-purchase-type" className="form-label">Product type</label>
            <select id="contact-purchase-type" name="purchaseType" className={inputClass} defaultValue={defaultProduct || ""}>
              <option value="">Select product</option>
              <option value="motherboard-box">Android motherboard box (20 nodes)</option>
              <option value="phone-farm-box">32PCS phone farm box</option>
              <option value="phone-array-12pcs">12PCS phone array</option>
              <option value="iphone-phone-farm">iPhone farm box</option>
              <option value="network-equipment">Network router / switch</option>
              <option value="oem">OEM / custom cabinet</option>
              <option value="service">Remote setup only</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-quantity" className="form-label">Quantity</label>
            <input id="contact-quantity" name="deviceQuantity" placeholder="e.g. 2 boxes / 60 nodes" className={inputClass} />
          </div>
          <div>
            <label htmlFor="contact-platform" className="form-label">Platform</label>
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
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-rom" className="form-label">Custom ROM</label>
            <select id="contact-rom" name="customRomNeeded" className={inputClass}>
              <option value="">Select</option>
              <option value="yes">Yes — auto-boot / ADB</option>
              <option value="no">No — standard</option>
              <option value="not-sure">Discuss on call</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-shipping" className="form-label">Ship to</label>
            <input id="contact-shipping" name="shippingCountry" className={inputClass} placeholder="Destination country" />
          </div>
          <div>
            <label htmlFor="contact-budget" className="form-label">Budget range (optional)</label>
            <input id="contact-budget" name="budget" placeholder="USD, e.g. 5k–15k" className={inputClass} />
          </div>
          <div>
            <label htmlFor="contact-product" className="form-label">SKU / reference</label>
            <input id="contact-product" name="productInterest" defaultValue={defaultProduct} placeholder="Product slug or package name" className={inputClass} />
          </div>
        </div>
      </fieldset>

      <div>
        <label htmlFor="contact-message" className="form-label">Project notes *</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="Timeline, software stack (group-control / click farm), router environment, sample vs bulk order..."
          className={inputClass}
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-slate-400 cursor-pointer">
        <input type="checkbox" required className="mt-1 rounded border-slate-600" />
        <span>
          I agree that my details will be used to respond to this RFQ. See our{" "}
          <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">Privacy Policy</Link>.
        </span>
      </label>
      <button type="submit" disabled={status === "loading"} className="btn-primary w-full min-h-[48px]">
        {status === "loading" ? "Submitting RFQ..." : "Submit RFQ — get factory quote"}
      </button>
      {status === "success" && (
        <p className="text-emerald-400 text-sm bg-emerald-950/40 border border-emerald-800/50 rounded-lg p-4">
          RFQ received. Our sales team will reply with configuration options and quotation within 24 hours (Mon–Fri, GMT+8). Check spam folder or message us on WhatsApp if urgent.
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
