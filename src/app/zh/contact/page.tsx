import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { OrderFlowGuide } from "@/components/order-flow-guide";
import { SalesContactCard } from "@/components/sales-contact-card";
import { JsonLd } from "@/components/shared";
import { PageBanner } from "@/components/site-sections";
import { ZH_CONTACT } from "@/data/zh-content";
import { bannerProps } from "@/lib/banners";
import { buildMetadata, contactPageJsonLd } from "@/lib/seo";
import { SEO_KEYWORDS_ZH } from "@/lib/config";

export const metadata = buildMetadata({
  title: "联系广州手机农场 — 手机农场硬件批量询价 RFQ",
  description:
    "联系广州手机农场获取手机农场硬件报价：安卓主板盒、32PCS整机盒、12PCS阵列、路由器。WhatsApp、Telegram、邮件RFQ，24小时内回复配置与工厂报价。",
  path: "/zh/contact",
  absoluteTitle: true,
  locale: "zh-CN",
  keywords: [...SEO_KEYWORDS_ZH, "phone farm RFQ", "contact phone farm factory"],
});

type Props = {
  searchParams: Promise<{ product?: string; service?: string }>;
};

export default async function ZhContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const defaultProduct = params.product || params.service || "";

  return (
    <>
      <JsonLd data={contactPageJsonLd()} />
      <PageBanner title={ZH_CONTACT.title} subtitle={ZH_CONTACT.subtitle} {...bannerProps("contact")} />
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <p className="text-slate-400 text-sm">
                请填写数量、设备类型、USB或OTG-LAN模式与目的国。表单为英文标签，销售团队可中英文回复。
              </p>
              <ContactForm defaultProduct={defaultProduct} />
            </div>
            <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <SalesContactCard />
              <OrderFlowGuide compact />
              <p className="text-xs text-slate-500">
                English contact page: <Link href="/contact" className="text-cyan-400">/contact</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
