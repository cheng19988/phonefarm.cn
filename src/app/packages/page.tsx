import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/shared";
import { PageBanner, SectionHeader } from "@/components/site-sections";
import { PACKAGES } from "@/data/packages";
import { buildMetadata } from "@/lib/seo";
import { IMAGES } from "@/lib/images";
import { CONTACT } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Phone Farm Solution Packages",
  description:
    "Pre-configured phone farm packages: starter lab, pro motherboard deployment, and enterprise 32PCS farm — assembly, QC, and export from Guangzhou.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <>
      <PageBanner
        title="Solution Packages"
        subtitle="Curated hardware bundles for labs that need a clear starting point — every package is confirmed via RFQ before production."
        image={IMAGES.motherboardBox.hero}
      />

      <section className="section">
        <div className="container-wide space-y-10 md:space-y-14">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`card overflow-hidden grid lg:grid-cols-2 ${pkg.highlight ? "ring-1 ring-amber-500/40" : ""}`}
            >
              <div className="relative min-h-[260px] lg:min-h-[360px]">
                <Image src={pkg.image} alt={pkg.name} fill className="object-cover" sizes="50vw" />
                {pkg.highlight && (
                  <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-md">
                    Most deployed
                  </span>
                )}
              </div>
              <div className="p-6 md:p-10 flex flex-col">
                <p className="eyebrow mb-1">{pkg.nameZh}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{pkg.name}</h2>
                <p className="text-amber-400/90 text-sm font-medium mb-4">{pkg.tagline}</p>
                <p className="text-slate-400 text-sm mb-4">
                  <span className="text-slate-500">Ideal for:</span> {pkg.idealFor}
                </p>
                <ul className="param-list mb-6 flex-1">
                  {pkg.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
                  <span><strong className="text-slate-300">MOQ:</strong> {pkg.moq}</span>
                  <span><strong className="text-slate-300">Lead time:</strong> {pkg.leadTime}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href={`/contact?product=${pkg.id}`} className="btn-primary">Request Package Quote</Link>
                  <Link href={pkg.href} className="btn-outline">View SKU Details</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-compact border-t border-[var(--border)] bg-[var(--surface)]/40">
        <div className="container-wide">
          <SectionHeader
            title="Need a custom mix?"
            subtitle="Combine motherboard boxes, network gear, ROM scope, and remote install in one RFQ — we confirm layout before build."
            center
          />
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">Send Custom RFQ</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className="container-wide">
          <ContactCTA title="Configure your phone farm package" />
        </div>
      </section>
    </>
  );
}
