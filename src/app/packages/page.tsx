import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/shared";
import { PageBanner, SectionHeader } from "@/components/site-sections";
import { PACKAGES } from "@/data/packages";
import { buildMetadata } from "@/lib/seo";
import { bannerProps } from "@/lib/banners";
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
        {...bannerProps("packages")}
      />

      <section className="section">
        <div className="container-wide space-y-14 md:space-y-20 lg:space-y-24">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`card overflow-hidden grid lg:grid-cols-2 ${pkg.highlight ? "ring-2 ring-cyan-500/50 shadow-xl shadow-cyan-500/10" : ""}`}
            >
              <div className="relative min-h-[300px] lg:min-h-[420px]">
                <Image src={pkg.image} alt={pkg.name} fill className="object-cover hover:scale-[1.02] transition-transform duration-700" sizes="50vw" />
                {pkg.highlight && (
                  <span className="absolute top-5 left-5 bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-full shadow-lg">
                    Most deployed
                  </span>
                )}
              </div>
              <div className="p-8 md:p-12 lg:p-14 flex flex-col gap-5">
                <p className="eyebrow mb-0">{pkg.nameZh}</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">{pkg.name}</h2>
                <p className="text-cyan-400 text-base md:text-lg font-semibold">{pkg.tagline}</p>
                <p className="text-slate-400 text-base md:text-lg">
                  <span className="text-slate-500 font-medium">Ideal for:</span> {pkg.idealFor}
                </p>
                <ul className="param-list flex-1">
                  {pkg.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-6 text-base text-slate-500 pt-2">
                  <span><strong className="text-slate-300">MOQ:</strong> {pkg.moq}</span>
                  <span><strong className="text-slate-300">Lead time:</strong> {pkg.leadTime}</span>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
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
