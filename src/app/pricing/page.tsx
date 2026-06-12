import Link from "next/link";
import { OrderFlowGuide } from "@/components/order-flow-guide";
import { ContactCTA } from "@/components/shared";
import { PageBanner, SectionHeader } from "@/components/site-sections";
import { PRICING_TIERS } from "@/data/packages";
import { buildMetadata } from "@/lib/seo";
import { RFQ_COPY, CONTACT } from "@/lib/config";
import { bannerProps } from "@/lib/banners";

export const metadata = buildMetadata({
  title: "Pricing & MOQ — Configuration-Based Quotes",
  description:
    "Phone farm hardware pricing depends on configuration, quantity, and ROM scope. Standard SKU, bulk, and OEM tiers — request a Guangzhou factory quote.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageBanner
        title="Pricing & MOQ"
        subtitle="All hardware is quoted per configuration — node count, connection mode, ROM scope, and export terms. No hidden checkout; confirmed orders can use USDT where applicable."
        {...bannerProps("pricing")}
      />

      <section className="section border-b border-[var(--border)]">
        <div className="container-wide">
          <SectionHeader
            title="Quote tiers"
            subtitle={RFQ_COPY.pricingNote}
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {PRICING_TIERS.map((tier, i) => (
              <div
                key={tier.name}
                className={`card-flat flex flex-col h-full ${i === 1 ? "ring-1 ring-cyan-500/40 bg-[var(--surface)]" : ""}`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-slate-400 text-sm md:text-base mb-6 flex-1 leading-relaxed">{tier.description}</p>
                <dl className="space-y-3 text-sm mb-8 border-t border-[var(--border)] pt-6">
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">MOQ</dt>
                    <dd className="text-slate-200 font-medium text-right">{tier.moq}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Lead time</dt>
                    <dd className="text-slate-200 font-medium text-right">{tier.leadTime}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Pricing</dt>
                    <dd className="text-cyan-400 font-semibold text-right">{tier.pricing}</dd>
                  </div>
                </dl>
                <Link href="/contact" className="btn-primary w-full text-center">{tier.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-compact bg-[var(--surface)]/30 border-b border-[var(--border)]">
        <div className="container-wide max-w-3xl">
          <OrderFlowGuide />
        </div>
      </section>

      <section className="section-compact bg-[var(--surface)]/30">
        <div className="container-wide max-w-3xl">
          <SectionHeader title="What affects your quote" subtitle="Send these details for a faster, accurate factory reply." />
          <ul className="param-list text-base">
            <li>Target quantity (nodes / boxes / mixed SKUs)</li>
            <li>Product type — motherboard box, 32PCS, 12PCS array, OEM cabinet</li>
            <li>Connection mode — USB, OTG/LAN, or hybrid</li>
            <li>Android vs iPhone model preference</li>
            <li>ROM customization scope (auto-boot, ADB persistence)</li>
            <li>Shipping country and preferred freight method</li>
          </ul>
          <p className="text-sm text-slate-500 mt-8">{RFQ_COPY.paymentNote}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/contact" className="btn-primary">Get Quote</Link>
            <Link href="/packages" className="btn-outline">View Packages</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className="container-wide">
          <ContactCTA title="Ready for a configuration quote?" />
        </div>
      </section>
    </>
  );
}
