import Image from "next/image";
import Link from "next/link";
import { SERVICES, BULK_PROCESS, DELIVERY_PROCESS } from "@/data/services";
import { ContactCTA } from "@/components/shared";
import { PageBanner, SectionHeader } from "@/components/site-sections";
import { buildMetadata } from "@/lib/seo";
import { bannerProps } from "@/lib/banners";

export const metadata = buildMetadata({
  title: "Phone Farm Factory Services - OEM, ROM, Remote Setup",
  description:
    "Phone farm box with remote setup included: OEM cabinet build, Android assembly, ROM customization, OTG/LAN network deploy, AnyDesk commissioning and export shipping from Guangzhou.",
  path: "/services",
  keywords: [
    "phone farm box with remote setup",
    "custom phone farm box",
    "phone farm factory services",
    "OEM phone farm cabinet",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Factory Services"
        subtitle="Hardware assembly, ROM scope, network deployment, and remote commissioning from Guangzhou — scoped via RFQ."
        {...bannerProps("services")}
      />

      <section className="section">
        <div className="container-wide space-y-8">
          {SERVICES.map((svc) => (
            <article key={svc.slug} className="card overflow-hidden hover:border-cyan-500/30 transition-colors">
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[220px] lg:col-span-2 bg-[var(--surface-elevated)]">
                  <Image src={svc.image} alt={svc.title} fill className="object-cover" sizes="40vw" />
                </div>
                <div className="lg:col-span-3 p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{svc.title}</h2>
                  <p className="text-slate-400 text-base mb-6 leading-relaxed">{svc.summary}</p>
                  <div className="grid sm:grid-cols-2 gap-6 text-sm mb-6">
                    <div>
                      <p className="text-cyan-400/90 font-semibold mb-2 uppercase text-xs tracking-wide">What we provide</p>
                      <ul className="param-list text-sm">
                        {svc.provides.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold mb-2 uppercase text-xs tracking-wide">Buyer prepares</p>
                      <ul className="param-list text-sm">
                        {svc.buyerPrepares.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mb-2"><span className="text-slate-400">Typical delivery:</span> {svc.typicalDelivery}</p>
                  <p className="text-sm text-slate-500 mb-6"><span className="text-slate-400">Choose when:</span> {svc.whenToChoose}</p>
                  <Link href={`/contact?service=${svc.slug}`} className="btn-primary">Request This Service</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-compact border-t border-[var(--border)] bg-[var(--surface)]/30">
        <div className="container-wide">
          <SectionHeader title="Delivery process" subtitle="From RFQ confirmation to export handoff." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {DELIVERY_PROCESS.map((step) => (
              <div key={step.step} className="card-flat">
                <span className="text-cyan-400 font-bold text-lg">{step.step}</span>
                <h3 className="font-semibold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <SectionHeader title="Bulk order process" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BULK_PROCESS.map((step) => (
              <div key={step.step} className="card-flat">
                <span className="text-cyan-400 font-bold text-lg">{step.step}</span>
                <h3 className="font-semibold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className="container-wide">
          <ContactCTA title="Discuss OEM / bulk deployment" />
        </div>
      </section>
    </>
  );
}
