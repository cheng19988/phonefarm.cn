import { FAQAccordion } from "@/components/commerce";
import { ContactCTA, JsonLd } from "@/components/shared";
import { FAQ_ITEMS } from "@/data/faq";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "常见问题 FAQ - 手机农场硬件与采购",
  description:
    "广州手机农场常见问题：什么是手机农场、真机与云手机区别、安卓/iPhone 支持、定制、样品、MOQ、付款、交付及联系方式。",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <div className="section">
        <div className="container-wide max-w-3xl">
          <h1 className="section-title">常见问题 FAQ</h1>
          <p className="section-subtitle">
            关于广州手机农场硬件、订购、发货、付款及技术支持的中文解答。
          </p>
          <FAQAccordion items={FAQ_ITEMS} />
          <div className="mt-16">
            <ContactCTA title="还有疑问？联系广州手机农场" />
          </div>
        </div>
      </div>
    </>
  );
}
