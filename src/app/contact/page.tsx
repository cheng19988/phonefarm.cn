import { Suspense } from "react";
import { ContactForm, ContactFormSkeleton } from "@/components/contact-form";
import { ContactBar, ContactCTA } from "@/components/shared";
import { PageBanner } from "@/components/site-sections";
import { RFQ_COPY } from "@/lib/config";
import { bannerProps } from "@/lib/banners";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact - Request a Quote",
  description: "Send RFQ for phone farm hardware: quantity, device type, connection mode and shipping country.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact / RFQ"
        subtitle="Send target quantity, device type, connection mode and shipping country. We reply with factory configuration and quote."
        {...bannerProps("contact")}
      />
      <section className="section">
        <div className="container-wide max-w-3xl">
          <div className="card-flat mb-8">
            <h2 className="font-bold text-white mb-3">Sales channels</h2>
            <ContactBar />
            <p className="text-sm text-slate-500 mt-4">{RFQ_COPY.paymentNote}</p>
          </div>
          <Suspense fallback={<ContactFormSkeleton />}>
            <ContactForm />
          </Suspense>
          <div className="mt-12">
            <ContactCTA title="Prefer WhatsApp or email?" />
          </div>
        </div>
      </section>
    </>
  );
}
