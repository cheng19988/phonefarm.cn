import Link from "next/link";
import { FAQSection } from "@/components/commerce";
import { ContactCTA, JsonLd } from "@/components/shared";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "@/data/faq";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

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
      <div className="section">
        <div className="container-wide max-w-3xl">
          <h1 className="section-title">FAQ</h1>
          <p className="section-subtitle">
            Procurement, installation and after-sales answers for phone farm hardware buyers.
          </p>

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
          <p className="text-center text-sm text-slate-500 mt-4">
            Technical setup details: <Link href="/manual" className="text-blue-400 hover:underline">Installation Manual</Link>
          </p>
        </div>
      </div>
    </>
  );
}
