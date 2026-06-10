import { PageBanner } from "@/components/site-sections";
import { buildMetadata } from "@/lib/seo";
import { CONTACT, SITE, RFQ_COPY } from "@/lib/config";
import { IMAGES } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: `${SITE.nameEn} terms - RFQ sales, hardware use, warranty and payment for phone farm equipment.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageBanner title="Terms of Use" subtitle="RFQ sales, warranty, shipping and acceptable use." image={IMAGES.banners.about} />
      <div className="section">
        <div className="container-wide max-w-3xl prose-content">
          <p className="text-sm text-slate-500">Last updated: June 2026</p>

          <h2>RFQ & Orders</h2>
          <p>
            {SITE.nameEn} sells phone farm hardware via request-for-quote (RFQ). This website does not provide automatic retail checkout.
            Orders are confirmed by written quote and proforma invoice after sales review.
          </p>

          <h2>Products</h2>
          <p>
            Products are real-device hardware assembled or configured in Guangzhou, China. Specifications vary by configuration -
            only the approved quote and BOM govern your order.
          </p>

          <h2>Payment</h2>
          <p>{RFQ_COPY.paymentNote}</p>
          <p>Bank transfer is standard for corporate orders. USDT (Tron TRC20) may be available for confirmed bulk orders when agreed with sales.</p>

          <h2>Shipping</h2>
          <p>International shipping available. Express 3-7 days, sea 15-30 days typical. Import duties are buyer responsibility. Freight forwarder introduction available.</p>

          <h2>Warranty</h2>
          <p>Chassis: 12 months. Motherboards: 90 days. Accessories: 12 months unless stated otherwise. Unauthorized modification voids warranty.</p>

          <h2>Custom Products</h2>
          <p>Custom-assembled or ROM-modified units generally cannot be returned after dispatch unless explicitly stated in quote.</p>

          <h2>Legal Use</h2>
          <p>
            Hardware is for development, testing and legitimate device operations. Buyer must comply with local laws.
            {SITE.nameEn} is not responsible for misuse.
          </p>

          <h2>Contact</h2>
          <p>Terms questions: {CONTACT.email}</p>
        </div>
      </div>
    </>
  );
}
