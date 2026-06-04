import { CONTACT, SITE } from "@/lib/config";

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
    <div className={`flex flex-wrap items-center gap-3 ${compact ? "text-xs" : "text-sm"}`}>
      <a href={`tel:${CONTACT.phone}`} className="hover:text-emerald-400 transition-colors">
        电话 {CONTACT.phone}
      </a>
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
        WhatsApp
      </a>
      <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
        Telegram
      </a>
      <a href={`mailto:${CONTACT.email}`} className="hover:text-emerald-400 transition-colors">
        {CONTACT.email}
      </a>
    </div>
  );
}

export function ContactCTA({ title = "联系广州手机农场销售团队" }: { title?: string }) {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-800/50 p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
      <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
        {SITE.location}工厂直销，批量采购、代理商合作、ROM 定制咨询 — 24 小时内回复报价与方案。
      </p>
      <ContactBar />
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
          WhatsApp 咨询
        </a>
        <a href="/contact" className="btn-secondary">
          提交询价表单
        </a>
      </div>
    </section>
  );
}

export function MobileContactBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-slate-950/95 border-t border-slate-800 backdrop-blur-sm">
      <div className="grid grid-cols-4 divide-x divide-slate-800">
        <a href={`tel:${CONTACT.phone}`} className="flex flex-col items-center py-3 text-xs text-slate-300 hover:text-white">
          <span className="text-base mb-0.5">📞</span> 电话
        </a>
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center py-3 text-xs text-slate-300 hover:text-green-400">
          <span className="text-base mb-0.5">💬</span> WhatsApp
        </a>
        <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center py-3 text-xs text-slate-300 hover:text-blue-400">
          <span className="text-base mb-0.5">✈️</span> Telegram
        </a>
        <a href={`mailto:${CONTACT.email}`} className="flex flex-col items-center py-3 text-xs text-slate-300 hover:text-emerald-400">
          <span className="text-base mb-0.5">✉️</span> 邮箱
        </a>
      </div>
    </div>
  );
}

export function StockBadge({ stock }: { stock: number }) {
  if (stock <= 0) return <span className="badge-red">缺货</span>;
  if (stock <= 5) return <span className="badge-yellow">库存紧张 ({stock})</span>;
  return <span className="badge-green">有货 ({stock})</span>;
}
