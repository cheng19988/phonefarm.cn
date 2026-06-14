import Link from "next/link";
import { BuyerEssentials } from "@/components/buyer-essentials";
import { OrderFlowGuide } from "@/components/order-flow-guide";
import { ContactCTA } from "@/components/shared";
import { PageBanner, SectionHeader, SubsectionHeader } from "@/components/site-sections";
import { PRICING_TIERS } from "@/data/packages";
import { ZH_PRICING } from "@/data/zh-content";
import { bannerProps } from "@/lib/banners";
import { buildMetadata } from "@/lib/seo";
import { RFQ_COPY, CONTACT, SEO_KEYWORDS_ZH } from "@/lib/config";

export const metadata = buildMetadata({
  title: "手机农场报价与MOQ — 广州手机农场批量询价",
  description:
    "手机农场硬件报价、MOQ、交期、质保与采购清单。主板盒、32PCS整机盒、12PCS阵列尺寸重量功耗说明。广州手机农场工厂RFQ，标准SKU支持USDT。",
  path: "/zh/pricing",
  absoluteTitle: true,
  locale: "zh-CN",
  keywords: [...SEO_KEYWORDS_ZH, "phone farm MOQ", "buy phone farm box wholesale"],
});

export default function ZhPricingPage() {
  return (
    <>
      <PageBanner title={ZH_PRICING.title} subtitle={ZH_PRICING.subtitle} {...bannerProps("pricing")} />

      <section className="section border-b border-[var(--border)]">
        <div className="container-wide">
          <SectionHeader title="报价档位" subtitle={RFQ_COPY.pricingNoteZh} center />
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
                    <dt className="text-slate-500">交期</dt>
                    <dd className="text-slate-200 font-medium text-right">{tier.leadTime}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">价格</dt>
                    <dd className="text-cyan-400 font-semibold text-right">{tier.pricing}</dd>
                  </div>
                </dl>
                <Link href="/zh/contact" className="btn-primary w-full text-center">{tier.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-b border-[var(--border)]">
        <div className="container-wide max-w-4xl">
          <SubsectionHeader
            title="物理规格与采购清单"
            subtitle="纸箱尺寸、重量、功耗、PC带机量、包装、质保与远程安装 — 标准SKU。"
          />
          <BuyerEssentials variant="full" />
        </div>
      </section>

      <section className="section-compact bg-[var(--surface)]/30 border-b border-[var(--border)]">
        <div className="container-wide max-w-3xl">
          <OrderFlowGuide />
        </div>
      </section>

      <section className="section-compact">
        <div className="container-wide max-w-3xl">
          <p className="text-sm text-slate-500 mb-6">{RFQ_COPY.paymentNoteZh}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/zh/contact" className="btn-primary">批量询价</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp</a>
            <Link href="/pricing" className="btn-outline">English pricing</Link>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className="container-wide">
          <ContactCTA title="需要手机农场配置报价?" />
        </div>
      </section>
    </>
  );
}
