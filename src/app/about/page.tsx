import Image from "next/image";
import { ContactCTA } from "@/components/shared";
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
  title: "About - Guangzhou Phone Farm",
  description:
    "Guangzhou-based phone farm hardware supplier - assembly, QC, packing, ROM customization and remote setup for bulk device deployment.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-3xl">
        <h1 className="section-title">About {SITE.nameEn}</h1>
        <p className="text-slate-400 text-sm mb-8">
          Hardware is provided for development, testing, device management, and other lawful use only.
        </p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3">{WHO_WE_ARE.title}</h2>
          {WHO_WE_ARE.paragraphs.map((p) => (
            <p key={p} className="text-slate-300 text-sm leading-relaxed mb-3">{p}</p>
          ))}
        </section>

        <section className="card-flat mb-10">
          <h2 className="font-medium text-white mb-4 text-sm">What We Actually Do</h2>
          <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-slate-400">
            {WHAT_WE_DO.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4">Factory Workflow</h2>
          <div className="space-y-3">
            {FACTORY_WORKFLOW.map((step) => (
              <div key={step.step} className="card-flat flex gap-4">
                <span className="text-blue-400 font-mono text-sm shrink-0">{step.step}</span>
                <div>
                  <h3 className="font-medium text-white text-sm">{step.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card-flat mb-10">
          <h2 className="font-medium text-white mb-4 text-sm">Quality Check</h2>
          <p className="text-xs text-slate-500 mb-3">Standard checks before packing:</p>
          <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-slate-400">
            {QUALITY_CHECKS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card-flat mb-10">
          <h2 className="font-medium text-white mb-4 text-sm">What Buyers Should Provide</h2>
          <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-slate-400">
            {BUYER_SHOULD_PROVIDE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card-flat mb-10 border-blue-900/30">
          <h2 className="font-medium text-white mb-3 text-sm">Trust Note</h2>
          <p className="text-sm text-slate-400 leading-relaxed">{TRUST_NOTE}</p>
        </section>

        <div className="card-flat mb-10 text-sm text-slate-400">
          <h2 className="font-medium text-white mb-3">Company information</h2>
          <dl className="grid sm:grid-cols-2 gap-3 text-xs">
            <div><dt className="text-slate-500">Brand</dt><dd className="text-slate-300">{SITE.nameEn} / {SITE.name}</dd></div>
            <div><dt className="text-slate-500">Location</dt><dd className="text-slate-300">{SITE.locationEn}</dd></div>
            <div><dt className="text-slate-500">Sales contact</dt><dd className="text-slate-300">{CONTACT.email}</dd></div>
            <div><dt className="text-slate-500">WhatsApp</dt><dd className="text-slate-300">{CONTACT.whatsapp}</dd></div>
          </dl>
        </div>

        <h2 className="text-lg font-semibold text-white mb-4">Workshop Photos</h2>
        <p className="text-xs text-slate-500 mb-4">Assembly and packing environment in Guangzhou. Updated photos shared on request.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {[
            { src: IMAGES.companyFront, label: "Front desk" },
            { src: IMAGES.companyOffice, label: "Office" },
            { src: IMAGES.companyMeeting, label: "Meeting room" },
            { src: IMAGES.companyWorkshop, label: "Workshop" },
            { src: IMAGES.companyWarehouse, label: "Warehouse" },
          ].map((img) => (
            <div key={img.label} className="relative aspect-[4/3] rounded-md overflow-hidden border border-[var(--border)]">
              <Image src={img.src} alt={img.label} fill className="object-cover" />
            </div>
          ))}
        </div>

        <ContactCTA title="Factory visit or RFQ - contact sales" />
      </div>
    </div>
  );
}
