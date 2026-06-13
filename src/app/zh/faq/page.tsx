import Link from "next/link";
import { FAQAccordion } from "@/components/commerce";
import { ContactCTA, JsonLd } from "@/components/shared";
import { PageBanner, SectionHeader } from "@/components/site-sections";
import { ZH_FAQ_ITEMS } from "@/data/zh-content";
import { bannerProps } from "@/lib/banners";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { SEO_KEYWORDS_ZH } from "@/lib/config";

export const metadata = buildMetadata({
  title: "手机农场常见问题 FAQ — 广州手机农场",
  description:
    "手机农场硬件采购FAQ: 什么是手机农场、真机vs云手机、安卓/iPhone支持、MOQ、付款方式、交付周期、USB/OTG配置、质保售后。广州手机农场厂家解答。",
  path: "/zh/faq",
  absoluteTitle: true,
  locale: "zh-CN",
  keywords: [...SEO_KEYWORDS_ZH],
});

export default function ZhFaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(ZH_FAQ_ITEMS)} />
      <PageBanner
        title="手机农场常见问题"
        subtitle="采购、技术配置、付款交付与售后 — 广州手机农场厂家解答。"
        {...bannerProps("faq")}
      />
      <section className="section">
        <div className="container-wide max-w-3xl">
          <SectionHeader title="全部中文 FAQ" subtitle={`共 ${ZH_FAQ_ITEMS.length} 条`} center />
          <FAQAccordion items={ZH_FAQ_ITEMS} />
          <div className="text-center mt-8 space-x-4">
            <Link href="/zh" className="btn-outline">返回中文首页</Link>
            <Link href="/contact" className="btn-primary">联系询价</Link>
          </div>
        </div>
      </section>
      <section className="section-compact">
        <div className="container-wide max-w-3xl">
          <ContactCTA title="还有问题? 欢迎 WhatsApp 或邮件咨询" />
        </div>
      </section>
    </>
  );
}
