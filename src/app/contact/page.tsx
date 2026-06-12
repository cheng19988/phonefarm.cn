import { Suspense } from "react";
import { ContactForm, ContactFormSkeleton } from "@/components/contact-form";
import { OrderFlowGuide } from "@/components/order-flow-guide";
import { SalesContactCard } from "@/components/sales-contact-card";
import { PageBanner } from "@/components/site-sections";
import { buildMetadata } from "@/lib/seo";
import { bannerProps } from "@/lib/banners";

export const metadata = buildMetadata({
  title: "Contact - Request a Quote",
  description: "Send RFQ for phone farm hardware: quantity, device type, connection mode and shipping country.",
  path: "/contact",
});

export default function ContactPage() {
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
              <Suspense fallback={<ContactFormSkeleton />}>
                <ContactForm />
              </Suspense>
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
