import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "@/components/commerce";
import { ContactCTA } from "@/components/shared";
import {
  FactoryGallery,
  ProductShowcase,
  SectionHeader,
  SiteHero,
  TrustStrip,
} from "@/components/site-sections";
import { buildMetadata } from "@/lib/seo";
import { getFaqPreview } from "@/data/faq";
import { IMAGES } from "@/lib/images";
import { SITE, CONTACT, CORE_PRODUCTS } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Phone Farm Hardware Manufacturer | Guangzhou",
  description:
    "Guangzhou Phone Farm — flagship manufacturer for Android motherboard boxes, 32PCS phone farm boxes, 12PCS arrays, ROM customization and export delivery.",
  path: "/",
});

const CAPABILITIES = [
  { title: "Assembly & QC", desc: "Slot-level burn-in, power and USB path verification before export." },
  { title: "ROM & ADB", desc: "Auto-boot, persistent ADB, custom firmware scope for lab workflows." },
  { title: "Network deploy", desc: "USB, OTG/LAN, router sizing for 20–100+ node environments." },
  { title: "Remote setup", desc: "AnyDesk handoff so your team receives hardware ready to operate." },
  { title: "Export logistics", desc: "Foam packing, commercial invoice, Guangzhou freight coordination." },
  { title: "OEM projects", desc: "Custom cabinets, tray layouts, mixed Android/iOS lab builds." },
];

const APPLICATIONS = [
  "App compatibility & regression testing",
  "Multi-device management at scale",
  "QA automation & CI device farms",
  "Enterprise deployment labs",
  "Remote operation workflow validation",
  "Legitimate automation integration (ADB/API)",
];

const SHOWCASE_COPY: Record<string, string> = {
  "motherboard-box":
    "High-density Android motherboard chassis — 20 screenless nodes in a compact enclosure. One PC controls 3–5 boxes for batch or individual device tasks.",
  "phone-farm-box":
    "32-device phone farm box with active cooling and ROM customization options. Built for medium-scale testing labs and production QA teams.",
  "phone-array-12pcs":
    "12 hot-swappable drawers for full phones or motherboards. Easier maintenance and lower entry cost for evaluation labs.",
  "iphone-phone-farm":
    "iOS device farm chassis with adjustable tray spacing. Configuration and model mix confirmed before build.",
};

export default function HomePage() {
  const previewFaq = getFaqPreview(4);

  return (
    <>
      <SiteHero
        image={IMAGES.phoneFarmBox.hero}
        secondaryImage={IMAGES.motherboardBox.hero}
        eyebrow={`${SITE.nameEn} · ${SITE.locationEn} · Est. 2017`}
        title={
          <>
            Professional Phone Farm Hardware{" "}
            <span className="gradient-text">Built in Guangzhou</span>
          </>
        }
        subtitle="Factory-direct Android motherboard boxes, 32PCS phone farm chassis, and 12PCS arrays — assembled, tested, and shipped for serious device labs."
      >
        <div className="flex flex-wrap gap-3 md:gap-4">
          <Link href="/contact" className="btn-primary">Get Configuration Quote</Link>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            WhatsApp Sales
          </a>
          <Link href="/products" className="btn-secondary">Browse Catalog</Link>
        </div>
      </SiteHero>

      <TrustStrip />

      <section className="section border-b border-cyan-500/10">
        <div className="container-wide space-y-16 md:space-y-24 lg:space-y-32">
          <SectionHeader
            title="Flagship Hardware SKUs"
            subtitle="Each chassis is engineered for continuous operation — power, cooling, and USB routing verified before shipment."
          />
          {CORE_PRODUCTS.map((item, i) => (
            <ProductShowcase
              key={item.slug}
              title={item.title}
              titleZh={item.titleZh}
              description={SHOWCASE_COPY[item.slug] ?? item.use}
              params={item.params}
              useCase={item.use}
              href={item.href}
              image={
                item.slug === "motherboard-box"
                  ? IMAGES.motherboardBox.hero
                  : item.slug === "phone-farm-box"
                    ? IMAGES.phoneFarmBox.hero
                    : item.slug === "phone-array-12pcs"
                      ? IMAGES.realDevice.hero
                      : IMAGES.iphoneFarm.hero
              }
              reverse={i % 2 === 1}
            />
          ))}
          <div className="text-center pt-4">
            <Link href="/packages" className="btn-outline mr-3">View Solution Packages</Link>
            <Link href="/products" className="btn-primary">Full Product Catalog</Link>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container-wide">
          <SectionHeader
            title="Factory Capabilities"
            subtitle="From motherboard sourcing to export packing — one Guangzhou team owns the full hardware path."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="tech-card">
                <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-b border-[var(--border)]">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader title="Deployment Applications" subtitle="Hardware for development, testing, and legitimate multi-device operations." />
            <ul className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {APPLICATIONS.map((a) => (
                <li key={a} className="card-flat py-5 px-6 text-base md:text-lg text-slate-300">{a}</li>
              ))}
            </ul>
            <Link href="/services" className="btn-outline mt-8 inline-flex">Factory Services →</Link>
          </div>
          <div className="product-showcase-image min-h-[280px]">
            <Image src={IMAGES.qc} alt="Factory QC and testing bench" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      <section className="section border-b border-[var(--border)] bg-[var(--surface)]/30">
        <div className="container-wide">
          <SectionHeader
            title="Guangzhou Workshop"
            subtitle="Assembly, burn-in, packing, and remote setup — real factory workflow, not stock renders."
            center
          />
          <FactoryGallery
            images={[
              { src: IMAGES.companyWorkshop, label: "Assembly floor" },
              { src: IMAGES.qc, label: "QC & testing" },
              { src: IMAGES.companyWarehouse, label: "Export packing" },
              { src: IMAGES.companyOffice, label: "Office" },
              { src: IMAGES.companyMeeting, label: "Meeting room" },
              { src: IMAGES.motherboardBox.detail, label: "Motherboard layout" },
              { src: IMAGES.phoneFarmBox.hero, label: "Phone farm chassis" },
              { src: IMAGES.realDevice.hero, label: "12PCS array" },
            ]}
          />
          <p className="text-center mt-8">
            <Link href="/about" className="text-cyan-400 font-medium hover:text-cyan-300">About our factory team →</Link>
          </p>
        </div>
      </section>

      <section className="section-compact">
        <div className="container-wide max-w-3xl mx-auto">
          <SectionHeader title="FAQ" subtitle="Common questions about hardware, RFQ, and deployment." center />
          <FAQAccordion items={previewFaq} />
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-outline">All FAQ</Link>
          </div>
        </div>
      </section>

      <section className="section-compact border-t border-[var(--border)]">
        <div className="container-wide">
          <ContactCTA title="Need a phone farm configuration quote?" />
        </div>
      </section>
    </>
  );
}
