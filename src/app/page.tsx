import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "@/components/commerce";
import { ContactCTA } from "@/components/shared";
import { buildMetadata } from "@/lib/seo";
import { getFaqPreview } from "@/data/faq";
import { MANUAL_TOC } from "@/data/manual";
import { IMAGES } from "@/lib/images";
import { SITE, CONTACT, CORE_PRODUCTS } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Phone Farm Hardware Manufacturer",
  description:
    "Guangzhou Phone Farm — Android motherboard box, 32PCS phone farm box, 12PCS phone array, iPhone farm box, ROM customization and remote setup for bulk device deployment.",
  path: "/",
});

const CAPABILITIES = [
  "Hardware assembly & QC burn-in",
  "Motherboard sourcing and slot testing",
  "ROM customization (auto-boot, ADB persistence)",
  "OTG/LAN network deployment",
  "Remote installation via AnyDesk",
  "Bulk packing & export shipping from Guangzhou",
];

const APPLICATIONS = [
  "App compatibility testing",
  "Multi-device management",
  "QA & software automation testing",
  "Enterprise device deployment lab",
  "Remote operation workflow validation",
  "Internal automation integration (ADB/API)",
];

export default function HomePage() {
  const previewFaq = getFaqPreview(5);

  return (
    <>
      <div className="rfq-bar md:hidden">
        <div className="container-wide text-xs text-slate-400">
          RFQ: <a href={`mailto:${CONTACT.email}`} className="text-slate-300">{CONTACT.email}</a>
        </div>
      </div>

      <section className="border-b border-[var(--border)]">
        <div className="container-wide py-14 md:py-20">
          <p className="text-blue-400 text-sm font-medium mb-3">{SITE.nameEn} · {SITE.locationEn}</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white max-w-3xl leading-tight mb-4">
            Phone Farm Hardware Manufacturer
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-2 leading-relaxed">
            Real-device phone farm boxes, Android motherboard arrays, ROM customization and remote setup support for bulk device deployment.
          </p>
          <p className="text-sm text-slate-500 mb-8">{SITE.name} · 手机农场硬件设备 · 群控硬件 · 主板盒定制</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Get Quote</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Inquiry</a>
            <Link href="/manual" className="btn-secondary">View Manual</Link>
          </div>
        </div>
      </section>

      <section className="section border-b border-[var(--border)]">
        <div className="container-wide">
          <h2 className="section-title">Core Products</h2>
          <p className="section-subtitle">Hardware SKUs with factory parameters — configuration and bulk pricing via RFQ.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {CORE_PRODUCTS.map((item) => (
              <Link key={item.slug} href={item.href} className="card p-0 flex flex-col sm:flex-row overflow-hidden hover:border-blue-800 transition-colors">
                <div className="relative w-full sm:w-40 h-32 sm:h-auto shrink-0 bg-[#141c28]">
                  <Image
                    src={item.slug === "motherboard-box" ? IMAGES.motherboardBox.hero : item.slug === "phone-farm-box" ? IMAGES.phoneFarmBox.hero : item.slug === "phone-array-12pcs" ? IMAGES.realDevice.hero : IMAGES.iphoneFarm.hero}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-medium text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 mb-2">{item.titleZh}</p>
                  <ul className="param-list text-xs mb-2">
                    {item.params.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <p className="text-[11px] text-slate-500">{item.use}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/products" className="btn-outline text-sm">All Products →</Link>
          </div>
        </div>
      </section>

      <section className="section border-b border-[var(--border)] bg-[#141c28]/50">
        <div className="container-wide">
          <h2 className="section-title">Factory Capabilities</h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {CAPABILITIES.map((c) => (
              <li key={c} className="text-sm text-slate-300 py-2 px-3 border border-[var(--border)] rounded-md bg-[var(--surface)]">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-b border-[var(--border)]">
        <div className="container-wide grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-title">Installation Manual</h2>
            <p className="text-slate-400 text-sm mb-4">
              Technical reference for USB mode, OTG/LAN, ADB authorization, router sizing and troubleshooting.
            </p>
            <ul className="space-y-1 text-sm text-slate-400 mb-6">
              {MANUAL_TOC.slice(0, 6).map((s) => (
                <li key={s.id}><Link href={`/manual#${s.id}`} className="hover:text-white">{s.title}</Link></li>
              ))}
            </ul>
            <Link href="/manual" className="btn-primary text-sm">Read Full Manual</Link>
          </div>
          <div className="relative aspect-video rounded-md overflow-hidden border border-[var(--border)]">
            <Image src={IMAGES.remoteControl.hero} alt="Device management setup" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section border-b border-[var(--border)]">
        <div className="container-wide">
          <h2 className="section-title">Applications</h2>
          <p className="text-sm text-slate-500 mb-4">Hardware for development, testing and legitimate device operations.</p>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {APPLICATIONS.map((a) => (
              <li key={a} className="text-sm text-slate-400 py-2 border-b border-[var(--border)]">{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-b border-[var(--border)]">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title">FAQ Preview</h2>
          <FAQAccordion items={previewFaq} />
          <Link href="/faq" className="btn-outline text-sm mt-6 inline-flex">All FAQ →</Link>
        </div>
      </section>

      <section className="section border-b border-[var(--border)]">
        <div className="container-wide">
          <h2 className="section-title">Workshop Photos</h2>
          <p className="text-sm text-slate-500 mb-6">Guangzhou assembly and packing environment. More photos available during RFQ.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { src: IMAGES.companyFront, label: "Front desk" },
              { src: IMAGES.companyOffice, label: "Office" },
              { src: IMAGES.companyMeeting, label: "Meeting" },
              { src: IMAGES.companyWorkshop, label: "Workshop" },
              { src: IMAGES.companyWarehouse, label: "Warehouse" },
            ].map((img) => (
              <div key={img.label} className="relative aspect-[4/3] rounded-md overflow-hidden border border-[var(--border)]">
                <Image src={img.src} alt={img.label} fill className="object-cover" />
                <span className="absolute bottom-0 inset-x-0 bg-black/60 text-[10px] text-slate-300 px-2 py-1">{img.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <ContactCTA title="Need a phone farm box configuration?" />
        </div>
      </section>
    </>
  );
}
