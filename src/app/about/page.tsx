import Image from "next/image";
import { ContactCTA } from "@/components/shared";
import { buildMetadata } from "@/lib/seo";
import { IMAGES } from "@/lib/images";
import { SITE, CONTACT } from "@/lib/config";

export const metadata = buildMetadata({
  title: "About - Guangzhou Phone Farm",
  description:
    "Guangzhou-based phone farm hardware supplier - assembly, testing, packing, ROM customization and remote setup for bulk device deployment.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-3xl">
        <h1 className="section-title">About {SITE.nameEn}</h1>
        <p className="text-slate-300 text-base mb-6 leading-relaxed">
          {SITE.nameEn} is a Guangzhou-based supplier focused on phone farm box hardware - Android motherboard arrays,
          multi-device chassis, network gear for OTG/LAN deployment, and factory services including ROM customization and remote setup.
        </p>
        <p className="text-slate-400 text-sm mb-8">
          {SITE.name} - 手机农场硬件 - 主板盒 - 批量设备管理 - OEM 定制
        </p>

        <div className="card-flat mb-10">
          <h2 className="font-medium text-white mb-4 text-sm">What we do</h2>
          <ul className="space-y-2 text-sm text-slate-400">
            <li> -  Hardware assembly, slot testing and QC burn-in</li>
            <li> -  Motherboard sourcing (model subject to supply)</li>
            <li> -  ROM customization for farm operation</li>
            <li> -  OTG/LAN network deployment guidance</li>
            <li> -  Remote installation support (AnyDesk)</li>
            <li> -  Bulk packing and export shipping from Guangzhou</li>
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { title: "Real device hardware", desc: "Physical phones and motherboards - not cloud virtual instances or emulators." },
            { title: "RFQ-based sales", desc: "Configuration and bulk pricing via email, WhatsApp or contact form - not retail checkout." },
            { title: "OEM available", desc: "Custom cabinet, slot count and branding for integrators and enterprise labs." },
            { title: "Documentation", desc: "Installation manual, FAQ and remote support for commissioning." },
          ].map((item) => (
            <div key={item.title} className="card-flat">
              <h2 className="font-medium text-white text-sm mb-2">{item.title}</h2>
              <p className="text-slate-400 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="card-flat mb-10 text-sm text-slate-400">
          <h2 className="font-medium text-white mb-3">Company information</h2>
          <dl className="grid sm:grid-cols-2 gap-3 text-xs">
            <div><dt className="text-slate-500">Brand</dt><dd className="text-slate-300">{SITE.nameEn} / {SITE.name}</dd></div>
            <div><dt className="text-slate-500">Location</dt><dd className="text-slate-300">{SITE.locationEn}</dd></div>
            <div><dt className="text-slate-500">Sales contact</dt><dd className="text-slate-300">{CONTACT.email}</dd></div>
            <div><dt className="text-slate-500">WhatsApp</dt><dd className="text-slate-300">{CONTACT.whatsapp}</dd></div>
          </dl>
          <p className="text-xs text-slate-500 mt-4">
            More factory documents and production photos can be provided during RFQ communication.
          </p>
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
