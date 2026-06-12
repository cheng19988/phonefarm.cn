import { ContactForm } from "@/components/contact-form";
import { OrderFlowGuide } from "@/components/order-flow-guide";
import { SalesContactCard } from "@/components/sales-contact-card";
import { PageBanner } from "@/components/site-sections";
import { buildMetadata } from "@/lib/seo";
import { bannerProps } from "@/lib/banners";

export const metadata = buildMetadata({
  title: "Contact Guangzhou Factory — Hardware RFQ",
  description:
    "Request a factory quote for phone farm hardware: Android motherboard box, 32PCS chassis, arrays, routers. Guangzhou assembly, export packing, worldwide shipping.",
  path: "/contact",
});

type Props = {
  searchParams: Promise<{ product?: string; service?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const defaultProduct = params.product || params.service || "";

  return (
    <>
      <PageBanner
        title="Request a Quote"
        subtitle="B2B hardware RFQ — we confirm configuration, lead time and export terms before production."
        {...bannerProps("contact")}
      />
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <ContactForm defaultProduct={defaultProduct} />
            </div>
            <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <SalesContactCard />
              <OrderFlowGuide compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
