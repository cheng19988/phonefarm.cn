import { buildMetadata } from "@/lib/seo";
import { SITE, RFQ_COPY } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `${SITE.nameEn} privacy policy - how RFQ and contact data is collected and used.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-3xl prose-content">
        <h1 className="section-title">Privacy Policy</h1>
        <p className="text-sm text-slate-500">Last updated: June 2026</p>

        <h2>Information We Collect</h2>
        <p>
          When you send an RFQ or contact us, we collect name, email, phone, country, company and project details you submit.
          We do not collect credit card data on this website.
        </p>

        <h2>How We Use Information</h2>
        <p>
          To respond to quotes, provide support and fulfill orders. We do not sell personal data to third parties.
        </p>

        <h2>Payment Data</h2>
        <p>{RFQ_COPY.paymentNote} On-chain transaction references may be stored for confirmed orders.</p>

        <h2>Security</h2>
        <p>Industry-standard measures protect stored RFQ and order records.</p>

        <h2>Contact</h2>
        <p>Privacy inquiries: qiuxui646@gmail.com</p>
      </div>
    </div>
  );
}
