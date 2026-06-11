import Link from "next/link";
import { CONTACT, RFQ_COPY, SITE } from "@/lib/config";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ContactBar({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-x-4 gap-y-2 ${compact ? "text-xs" : "text-sm"}`}>
      <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-100 hover:text-sky-300 transition-colors font-medium">
        Telegram {CONTACT.telegram}
      </a>
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-100 hover:text-emerald-300 transition-colors font-medium">
        WhatsApp {CONTACT.whatsapp}
      </a>
      <a href={CONTACT.emailHref} target="_blank" rel="noopener noreferrer" className="text-slate-100 hover:text-cyan-200 transition-colors font-medium">
        {CONTACT.email}
      </a>
    </div>
  );
}

export function ContactCTA({ title = "Need a phone farm configuration?" }: { title?: string }) {
  return (
    <section className="card-flat bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border-cyan-500/20">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">{title}</h2>
      <p className="text-slate-200 text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
        Send device count, target model, connection mode (USB / OTG-LAN) and shipping country. {SITE.nameEn} replies with hardware configuration and factory quote within 24 hours.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/contact" className="btn-primary">Send RFQ</Link>
        <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          Telegram
        </a>
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          WhatsApp
        </a>
        <Link href="/pricing" className="btn-outline">Pricing & MOQ</Link>
      </div>
      <p className="text-xs text-slate-500 mt-5">{RFQ_COPY.paymentNote}</p>
    </section>
  );
}
