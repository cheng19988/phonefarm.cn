import { CONTACT, SITE } from "@/lib/config";

export function SalesContactCard() {
  return (
    <aside className="card-flat border-slate-700/80 bg-slate-900/40">
      <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-3">Sales desk</p>
      <p className="text-white font-semibold text-lg mb-1">{SITE.nameEn}</p>
      <p className="text-slate-400 text-sm mb-4">Guangzhou factory · Export B2B · English support</p>
      <dl className="space-y-3 text-sm mb-6">
        <div>
          <dt className="text-slate-500">Response time</dt>
          <dd className="text-slate-200">Within 24 hours on business days (GMT+8)</dd>
        </div>
        <div>
          <dt className="text-slate-500">Email RFQ</dt>
          <dd>
            <a href={CONTACT.emailHref} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 break-all">
              {CONTACT.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">WhatsApp</dt>
          <dd>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
              {CONTACT.whatsapp}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Telegram</dt>
          <dd>
            <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-sky-200">
              {CONTACT.telegram}
            </a>
          </dd>
        </div>
      </dl>
      <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-800 pt-4">
        Include: quantity, Android/iPhone, USB or OTG/LAN, shipping country and timeline. Sample orders welcome (1 box / 12PCS array).
      </p>
    </aside>
  );
}
