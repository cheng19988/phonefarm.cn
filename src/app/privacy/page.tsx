import { PageBanner } from "@/components/site-sections";
import { buildMetadata } from "@/lib/seo";
import { CONTACT, SITE, RFQ_COPY } from "@/lib/config";
import { bannerProps } from "@/lib/banners";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `${SITE.nameEn} privacy policy - how RFQ and contact data is collected and used.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" subtitle="How we handle RFQ and contact information." {...bannerProps("legal")} />
      <div className="section">
        <div className="container-wide max-w-3xl prose-content">
          <p className="text-sm text-slate-500">Last updated: June 2026</p>

          <h2>Information We Collect</h2>
          <p>
            When you send an RFQ or contact us, we collect the details you submit: name, email, company, country,
            messaging handles (WhatsApp/Telegram), project requirements, and optional budget. We do not collect credit card data on this website.
          </p>

          <h2>How We Use Information</h2>
          <p>
            To respond to quotes, provide technical support, coordinate shipping, and fulfill confirmed orders.
            We do not sell personal data to third parties or use RFQ data for unrelated marketing lists.
          </p>

          <h2>Retention</h2>
          <p>
            RFQ records are kept for sales follow-up and order history. You may request deletion of non-order inquiry data by emailing {CONTACT.email}.
          </p>

          <h2>Cookies & Analytics</h2>
          <p>
            This site uses essential cookies for session security where login is used. We do not run third-party advertising trackers.
            Hosting providers (e.g. Vercel) may log standard server access data.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Notifications may be delivered via Telegram or webhooks configured by {SITE.nameEn}. Email may be handled through Gmail or your chosen mail provider when you contact us.
          </p>

          <h2>International Transfers</h2>
          <p>
            Data is processed from Guangzhou, China and may be accessed by sales staff or hosting infrastructure in other regions to respond to export inquiries.
          </p>

          <h2>Payment Data</h2>
          <p>{RFQ_COPY.paymentNote} On-chain transaction references may be stored for confirmed orders.</p>

          <h2>Security</h2>
          <p>Industry-standard measures protect stored RFQ and order records. No method of transmission over the Internet is 100% secure.</p>

          <h2>Contact</h2>
          <p>Privacy inquiries: <a href={CONTACT.emailHref} target="_blank" rel="noopener noreferrer">{CONTACT.email}</a></p>
        </div>
      </div>
    </>
  );
}
