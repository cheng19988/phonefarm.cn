import { FAQSection } from "@/components/commerce";
import { ContactCTA, JsonLd } from "@/components/shared";
import { BuyerEssentials } from "@/components/buyer-essentials";
import { PageBanner, SectionHeader, SubsectionHeader } from "@/components/site-sections";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "@/data/faq";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { bannerProps } from "@/lib/banners";

export const metadata = buildMetadata({
  title: "FAQ — Guangzhou Factory Hardware Buyers",
  description:
    "Procurement FAQ for Guangzhou Phone Farm: dimensions, MOQ, lead time, packaging, warranty, remote install, Android/iPhone models, USB/OTG setup and export shipping.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <PageBanner
        title="FAQ"
        subtitle="Procurement, installation and after-sales — 50+ answers for phone farm hardware buyers."
        {...bannerProps("faq")}
      />
      <section className="section border-b border-[var(--border)]">
        <div className="container-wide max-w-4xl">
          <SubsectionHeader
            title="Before you buy"
            subtitle="Key procurement facts — dimensions, models, lead time, packaging, warranty, photos, remote install and USDT checkout on standard SKUs."
          />
          <BuyerEssentials variant="full" />
        </div>
      </section>

      <section className="section">
        <div className="container-wide max-w-3xl">
          <SectionHeader title="Common questions" subtitle="Grouped by product, technical setup, orders and payment." />
          {FAQ_CATEGORIES.map((cat) => (
            <FAQSection
              key={cat.id}
              title={cat.title}
              items={FAQ_ITEMS.filter((i) => i.category === cat.id)}
            />
          ))}
          <div className="mt-12">
            <ContactCTA title="Still have questions? Send RFQ" />
          </div>
        </div>
      </section>
    </>
  );
}
