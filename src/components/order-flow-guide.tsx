import Link from "next/link";
import { CONTACT } from "@/lib/config";

export function OrderFlowGuide({ compact = false }: { compact?: boolean }) {
  const steps = [
    {
      n: "1",
      title: "RFQ (most SKUs)",
      body: "Send quantity, connection mode and shipping country via form, WhatsApp or email. We reply with BOM, lead time and proforma invoice within 24h on business days.",
    },
    {
      n: "2",
      title: "Sample / list-price SKUs",
      body: "Three catalog SKUs support online checkout: motherboard box ($899), 32PCS box ($1499), 12PCS array ($799). Login required — creates a USDT (TRC20) payment window for 30 minutes.",
    },
    {
      n: "3",
      title: "Bulk & OEM",
      body: "Bank transfer or USDT after written quote confirmation. No automatic checkout for custom ROM, iPhone farms or 500+ node projects.",
    },
    {
      n: "4",
      title: "After payment",
      body: "Factory confirms configuration, schedules production and shares packing photos. Remote AnyDesk setup included with hardware orders.",
    },
  ];

  return (
    <section className={compact ? "space-y-4" : "card-flat space-y-5"}>
      <div>
        <h2 className={`font-bold text-white ${compact ? "text-lg" : "text-xl"}`}>How ordering works</h2>
        {!compact && (
          <p className="text-slate-400 text-sm mt-1">
            RFQ-first B2B sales — online USDT checkout is optional for three standard SKUs only.
          </p>
        )}
      </div>
      <ol className="space-y-4">
        {steps.map((s) => (
          <li key={s.n} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-cyan-400 text-sm font-bold border border-slate-700">
              {s.n}
            </span>
            <div>
              <h3 className="font-semibold text-white text-sm">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mt-0.5">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-2 pt-1">
        <Link href="/contact" className="btn-primary text-sm py-2 px-4">Send RFQ</Link>
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm py-2 px-4">
          WhatsApp
        </a>
        <Link href="/pricing" className="btn-outline text-sm py-2 px-4">MOQ & pricing</Link>
      </div>
    </section>
  );
}
