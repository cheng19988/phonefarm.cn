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
      <a href={`mailto:${CONTACT.email}`} className="text-slate-300 hover:text-white transition-colors">
        {CONTACT.email}
      </a>
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-green-400 transition-colors">
        WhatsApp {CONTACT.whatsapp}
      </a>
      <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors hidden md:inline">
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
    <section className="card-flat">
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-slate-400 text-sm mb-4 max-w-2xl">
        Send device count, target model, connection mode (USB / OTG-LAN) and shipping country.
        {SITE.nameEn} will reply with hardware configuration and factory quote within 24 hours.
      </p>
      <ContactBar />
      <div className="mt-5 flex flex-wrap gap-3">
        <a href="/contact" className="btn-primary">Send RFQ</a>
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          WhatsApp Inquiry
        </a>
      </div>
      <p className="text-xs text-slate-500 mt-4">{RFQ_COPY.paymentNote}</p>
    </section>
  );
}

export function MobileContactBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#141c28] border-t border-[var(--border)]">
      <div className="grid grid-cols-4 divide-x divide-[var(--border)]">
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center py-2.5 text-[10px] text-slate-300">
          WhatsApp
        </a>
        <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center py-2.5 text-[10px] text-slate-300">
          Telegram
        </a>
        <a href={`mailto:${CONTACT.email}`} className="flex flex-col items-center py-2.5 text-[10px] text-slate-300">
          Email
        </a>
        <a href={`tel:${CONTACT.phone}`} className="flex flex-col items-center py-2.5 text-[10px] text-slate-300">
          Call
        </a>
      </div>
    </div>
  );
}
