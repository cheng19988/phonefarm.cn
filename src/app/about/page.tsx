import { ContactCTA } from "@/components/shared";
import { FactoryGallery, PageBanner, SectionHeader } from "@/components/site-sections";
import { buildMetadata } from "@/lib/seo";
import {
  BUYER_SHOULD_PROVIDE,
  FACTORY_WORKFLOW,
  QUALITY_CHECKS,
  TRUST_NOTE,
  WHAT_WE_DO,
  WHO_WE_ARE,
} from "@/data/about";
import { IMAGES } from "@/lib/images";
import { SITE, CONTACT } from "@/lib/config";

export const metadata = buildMetadata({
  title: "About — Guangzhou Phone Farm Factory",
  description:
    "Guangzhou-based phone farm hardware manufacturer — assembly, QC, packing, ROM customization and remote setup for bulk device deployment.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title={`About ${SITE.nameEn}`}
        subtitle="Factory-direct phone farm hardware from Guangzhou — assembly, burn-in, export packing, and remote commissioning."
        image={IMAGES.companyWorkshop}
      />

      <div className="section">
        <div className="container-wide max-w-4xl">
          <p className="text-slate-400 text-base mb-10">
            Hardware is provided for development, testing, device management, and other lawful use only.
          </p>

          <section className="mb-14">
            <SectionHeader title={WHO_WE_ARE.title} />
            {WHO_WE_ARE.paragraphs.map((p) => (
              <p key={p} className="text-slate-300 text-base leading-relaxed mb-4">{p}</p>
            ))}
          </section>

          <section className="card-flat mb-14">
            <SectionHeader title="What we actually do" />
            <ul className="param-list">
              {WHAT_WE_DO.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <SectionHeader title="Factory workflow" />
            <div className="space-y-4">
              {FACTORY_WORKFLOW.map((step) => (
                <div key={step.step} className="card-flat flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/30">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card-flat mb-14">
            <SectionHeader title="Quality checks before shipment" />
            <ul className="param-list">
              {QUALITY_CHECKS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <section className="card-flat mb-14">
            <SectionHeader title="What buyers should provide" />
            <ul className="param-list">
              {BUYER_SHOULD_PROVIDE.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <p className="text-slate-400 text-sm mb-14 italic border-l-2 border-cyan-500/40 pl-4">{TRUST_NOTE}</p>

          <section className="mb-14">
            <SectionHeader title="Company information" center />
            <dl className="card-flat grid sm:grid-cols-2 gap-4 text-sm">
              <div><dt className="text-slate-500">Brand</dt><dd className="text-white font-medium">{SITE.nameEn}</dd></div>
              <div><dt className="text-slate-500">Location</dt><dd className="text-white font-medium">{SITE.locationEn}</dd></div>
              <div><dt className="text-slate-500">Email</dt><dd><a href={`mailto:${CONTACT.email}`} className="text-cyan-400">{CONTACT.email}</a></dd></div>
              <div><dt className="text-slate-500">Phone</dt><dd className="text-white">{CONTACT.phone}</dd></div>
            </dl>
          </section>
        </div>
      </div>

      <section className="section-compact border-t border-[var(--border)] bg-[var(--surface)]/30">
        <div className="container-wide">
          <SectionHeader title="Factory environment" subtitle="Real workshop and packing areas in Guangzhou." center />
          <FactoryGallery
            images={[
              { src: IMAGES.companyWorkshop, label: "Assembly" },
              { src: IMAGES.qc, label: "QC bench" },
              { src: IMAGES.companyWarehouse, label: "Export packing" },
              { src: IMAGES.motherboardBox.hero, label: "Motherboard box" },
            ]}
          />
        </div>
      </section>

      <section className="section-compact">
        <div className="container-wide max-w-4xl">
          <ContactCTA title="Work with our Guangzhou factory team" />
        </div>
      </section>
    </>
  );
}
