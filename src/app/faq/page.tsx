import { FAQSection } from "@/components/commerce";
import { ContactCTA, JsonLd } from "@/components/shared";
import { PageBanner, SectionHeader } from "@/components/site-sections";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "@/data/faq";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { bannerProps } from "@/lib/banners";

export const metadata = buildMetadata({
  title: "FAQ — Phone Farm Hardware",
  description:
    "Product configuration, USB/OTG setup, ADB, router choice, RFQ process, shipping, payment and warranty for Guangzhou Phone Farm hardware.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <PageBanner
        title="FAQ"
        subtitle="Procurement, installation and after-sales answers for phone farm hardware buyers."
        {...bannerProps("faq")}
      />
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
