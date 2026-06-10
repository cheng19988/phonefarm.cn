import Link from "next/link";
import { CONTACT, RFQ_COPY } from "@/lib/config";

type RfqCTAProps = {
  title?: string;
  productSlug?: string;
  compact?: boolean;
};

export function RfqCTA({
  title = "Send RFQ - Get Configuration & Quote",
  productSlug,
  compact = false,
}: RfqCTAProps) {
  const contactHref = productSlug ? `/contact?product=${productSlug}` : "/contact";
  const waText = encodeURIComponent(
    productSlug
      ? `Hi, I need a quote for: ${productSlug}. Please share configuration options.`
      : "Hi, I need a phone farm box quote. Device count, model and shipping country to follow."
  );

  if (compact) {
    return (
      <div className="card-flat space-y-3">
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="text-xs text-slate-400">{RFQ_COPY.pricingNote}</p>
        <div className="flex flex-wrap gap-2">
          <Link href={contactHref} className="btn-primary text-xs py-1.5">
            Get Quote
          </Link>
          <a href={`${CONTACT.whatsappUrl}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-xs py-1.5">
            WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="card-flat">
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-slate-400 text-sm mb-4 max-w-2xl">
        Send your target quantity, Android or iPhone, motherboard or full phone, USB or OTG/LAN mode,
        destination country and customization needs. We reply with configuration and factory quote.
      </p>
      <ul className="param-list mb-5 text-slate-400">
        <li>Target quantity / MOQ or sample order</li>
        <li>Device model (if specified)</li>
        <li>Connection mode: USB or OTG/LAN</li>
        <li>Shipping country</li>
        <li>ROM / cabinet customization (if any)</li>
      </ul>
      <p className="text-xs text-slate-500 mb-4">{RFQ_COPY.pricingNote} | {RFQ_COPY.paymentNote}</p>
      <p className="text-xs text-slate-500 mb-4">Attach photos or current setup details if available.</p>
      <div className="flex flex-wrap gap-3">
        <Link href={contactHref} className="btn-primary">
          Send RFQ
        </Link>
        <a href={`${CONTACT.whatsappUrl}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          WhatsApp Inquiry
        </a>
        <a href={`mailto:${CONTACT.email}?subject=RFQ%20Phone%20Farm%20Hardware`} className="btn-secondary">
          Email RFQ
        </a>
      </div>
    </section>
  );
}

export function ProductStickyCTA({ slug }: { slug: string }) {
  const waText = encodeURIComponent(`Hi, quote request for: ${slug}`);
  return (
    <div className="sticky-bar fixed bottom-0 inset-x-0 z-50 md:hidden px-3 py-2.5">
      <div className="grid grid-cols-3 gap-2">
        <Link href={`/contact?product=${slug}`} className="btn-primary text-xs py-2 text-center">
          Get Quote
        </Link>
        <a href={`${CONTACT.whatsappUrl}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-xs py-2 text-center">
          WhatsApp
        </a>
        <a href={`mailto:${CONTACT.email}`} className="btn-secondary text-xs py-2 text-center">
          Email
        </a>
      </div>
    </div>
  );
}
