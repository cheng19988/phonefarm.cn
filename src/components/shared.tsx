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
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 ${compact ? "text-xs" : "text-sm"}`}>
      <span className="text-slate-500 hidden sm:inline">RFQ:</span>
      <a href={`mailto:${CONTACT.email}`} className="text-slate-300 hover:text-cyan-300 transition-colors">
        {CONTACT.email}
      </a>
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-emerald-400 transition-colors">
        WhatsApp {CONTACT.whatsapp}
      </a>
      <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors hidden md:inline">
        Telegram {CONTACT.telegram}
      </a>
      <a href={`tel:${CONTACT.phone}`} className="text-slate-300 hover:text-white transition-colors hidden lg:inline">
        {CONTACT.phone}
      </a>
    </div>
  );
}

export function ContactCTA({ title = "Need a phone farm configuration?" }: { title?: string }) {
  return (
    <section className="card-flat bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border-cyan-500/20">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
      <p className="text-slate-400 text-base mb-6 max-w-2xl leading-relaxed">
        Send device count, target model, connection mode (USB / OTG-LAN) and shipping country. {SITE.nameEn} replies with hardware configuration and factory quote within 24 hours.
      </p>
      <ContactBar />
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/contact" className="btn-primary">Send RFQ</Link>
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          WhatsApp Inquiry
        </a>
        <Link href="/pricing" className="btn-outline">Pricing & MOQ</Link>
      </div>
      <p className="text-xs text-slate-500 mt-5">{RFQ_COPY.paymentNote}</p>
    </section>
  );
}

export function MobileContactBar() {
  return (
    <div className="sticky-bar fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="grid grid-cols-4 divide-x divide-[var(--border)]">
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center py-3 min-h-[48px] text-[11px] text-slate-300 font-medium">
          WhatsApp
        </a>
        <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center py-3 min-h-[48px] text-[11px] text-slate-300 font-medium">
          Telegram
        </a>
        <a href={`mailto:${CONTACT.email}`} className="flex flex-col items-center justify-center py-3 min-h-[48px] text-[11px] text-slate-300 font-medium">
          Email
        </a>
        <Link href="/contact" className="flex flex-col items-center justify-center py-3 min-h-[48px] text-[11px] text-cyan-400 font-semibold">
          RFQ
        </Link>
      </div>
    </div>
  );
}
