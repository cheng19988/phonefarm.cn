import { ContactCTA } from "@/components/shared";
import { FactoryGallery, PageBanner, SectionHeader, SubsectionHeader } from "@/components/site-sections";
import { buildMetadata } from "@/lib/seo";
import {
  BUYER_SHOULD_PROVIDE,
  FACTORY_DIRECT,
  FACTORY_WORKFLOW,
  QUALITY_CHECKS,
  RELIABILITY,
  TRUST_NOTE,
  WHAT_WE_DO,
  WHO_WE_ARE,
  WHY_CHOOSE_US,
} from "@/data/about";
import { bannerProps } from "@/lib/banners";
import { IMAGES } from "@/lib/images";
import { SITE, CONTACT } from "@/lib/config";

export const metadata = buildMetadata({
  title: "About Guangzhou Phone Farm — Factory-Direct Phone Farm Box Manufacturer",
  description:
    "Phone farm factory in Guangzhou since 2017. B2B phone farm box manufacturer: assembly, QC burn-in, export packing, ROM customization, 20-node motherboard boxes, 32PCS chassis and remote AnyDesk setup worldwide.",
  path: "/about",
  keywords: [
    "phone farm factory",
    "phone farm box manufacturer",
    "Guangzhou phone farm",
    "phone farm hardware supplier",
    "device farm hardware factory",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title={`About ${SITE.nameEn}`}
        subtitle="Factory-direct phone farm hardware from Guangzhou — assembly, burn-in, export packing, and remote commissioning."
        {...bannerProps("about")}
      />

      <div className="section">
        <div className="container-wide max-w-4xl">
          <p className="text-slate-400 text-base mb-10">
            Hardware is provided for development, testing, device management, and other lawful use only.
          </p>

          <section className="mb-14">
            <SubsectionHeader title={WHO_WE_ARE.title} />
            {WHO_WE_ARE.paragraphs.map((p) => (
              <p key={p} className="text-slate-300 text-base leading-relaxed mb-4">{p}</p>
            ))}
          </section>

          <section className="mb-14">
            <SubsectionHeader title={WHY_CHOOSE_US.title} />
            {WHY_CHOOSE_US.paragraphs.map((p) => (
              <p key={p} className="text-slate-300 text-base leading-relaxed mb-4">{p}</p>
            ))}
          </section>

          <section className="mb-14">
            <SubsectionHeader title={FACTORY_DIRECT.title} />
            {FACTORY_DIRECT.paragraphs.map((p) => (
              <p key={p} className="text-slate-300 text-base leading-relaxed mb-4">{p}</p>
            ))}
          </section>

          <section className="mb-14">
            <SubsectionHeader title={RELIABILITY.title} />
            {RELIABILITY.paragraphs.map((p) => (
              <p key={p} className="text-slate-300 text-base leading-relaxed mb-4">{p}</p>
            ))}
          </section>

          <section className="card-flat mb-14 border-cyan-500/20">
            <SubsectionHeader title="Factory & export" />
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Assembly, burn-in, and export packing are handled at our Guangzhou workshop. Buyers receive commercial invoice, foam packing, and optional remote AnyDesk commissioning after shipment.
            </p>
            <dl className="grid sm:grid-cols-2 gap-4 text-sm">
              <div><dt className="text-slate-500">Region</dt><dd className="text-white font-medium">{SITE.locationEn}</dd></div>
              <div><dt className="text-slate-500">Address</dt><dd className="text-white font-medium">{SITE.addressEn}</dd></div>
              <div><dt className="text-slate-500">Established</dt><dd className="text-white font-medium">2017</dd></div>
              <div><dt className="text-slate-500">Export</dt><dd className="text-white font-medium">Worldwide RFQ · DHL/FedEx/sea freight</dd></div>
            </dl>
          </section>

          <section className="card-flat mb-14">
            <SubsectionHeader title="What we actually do" />
            <ul className="param-list">
              {WHAT_WE_DO.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <SubsectionHeader title="Factory workflow" />
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
            <SubsectionHeader title="Quality checks before shipment" />
            <ul className="param-list">
              {QUALITY_CHECKS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <section className="card-flat mb-14">
            <SubsectionHeader title="What buyers should provide" />
            <ul className="param-list">
              {BUYER_SHOULD_PROVIDE.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <p className="text-slate-400 text-sm mb-14 italic border-l-2 border-cyan-500/40 pl-4">{TRUST_NOTE}</p>

          <section className="mb-14">
            <SubsectionHeader title="Company information" center />
            <dl className="card-flat grid sm:grid-cols-2 gap-4 text-sm">
              <div><dt className="text-slate-500">Brand</dt><dd className="text-white font-medium">{SITE.nameEn}</dd></div>
              <div><dt className="text-slate-500">Location</dt><dd className="text-white font-medium">{SITE.locationEn}</dd></div>
              <div><dt className="text-slate-500">Address</dt><dd className="text-white font-medium">{SITE.addressEn}</dd></div>
              <div><dt className="text-slate-500">Email</dt><dd><a href={CONTACT.emailHref} target="_blank" rel="noopener noreferrer" className="text-cyan-400">{CONTACT.email}</a></dd></div>
              <div><dt className="text-slate-500">Telegram</dt><dd><a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400">{CONTACT.telegram}</a></dd></div>
              <div><dt className="text-slate-500">WhatsApp</dt><dd><a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400">{CONTACT.whatsapp}</a></dd></div>
            </dl>
          </section>
        </div>
      </div>

      <section className="section-compact section-alt">
        <div className="container-wide">
          <SectionHeader title="Factory environment" subtitle="Real workshop and packing areas in Guangzhou." center />
          <FactoryGallery
            images={[
              { src: IMAGES.companyWorkshop, label: "Assembly floor" },
              { src: IMAGES.qc, label: "QC & burn-in" },
              { src: IMAGES.companyWarehouse, label: "Export packing" },
              { src: IMAGES.companyOffice, label: "Office" },
              { src: IMAGES.companyMeeting, label: "Meeting room" },
              { src: IMAGES.motherboardBox.hero, label: "Motherboard box" },
              { src: IMAGES.phoneFarmBox.hero, label: "32PCS chassis" },
              { src: IMAGES.realDevice.hero, label: "12PCS array" },
              { src: "/images/factory/gallery-07.jpg", label: "Workshop detail" },
              { src: "/images/factory/gallery-08.png", label: "Assembly bench" },
              { src: "/images/factory/gallery-11.png", label: "Production line" },
              { src: "/images/factory/gallery-12.jpg", label: "Packing area" },
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
