import Image from "next/image";
import Link from "next/link";
import { SERVICES, BULK_PROCESS, DELIVERY_PROCESS } from "@/data/services";
import { ContactCTA } from "@/components/shared";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services - OEM, ROM, Remote Setup",
  description:
    "OEM phone farm box, Android assembly, ROM customization, OTG/LAN deployment, router config, remote installation, export shipping and API integration support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">Services</h1>
        <p className="section-subtitle">
          Factory services from Guangzhou: hardware, ROM, network deployment and remote commissioning. All scoped via RFQ.
        </p>

        <div className="space-y-6">
          {SERVICES.map((svc) => (
            <article key={svc.slug} className="card overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="relative aspect-video md:aspect-auto md:min-h-[180px] bg-[#141c28]">
                  <Image src={svc.image} alt={svc.title} fill className="object-cover" />
                </div>
                <div className="md:col-span-2 p-5">
                  <h2 className="text-lg font-medium text-white mb-2">{svc.title}</h2>
                  <p className="text-sm text-slate-400 mb-4">{svc.summary}</p>
                  <div className="grid sm:grid-cols-2 gap-4 text-xs mb-4">
                    <div>
                      <p className="text-slate-500 font-medium mb-1">What we provide</p>
                      <ul className="list-disc list-outside pl-5 text-slate-400 space-y-0.5 m-0">
                        {svc.provides.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium mb-1">Buyer prepares</p>
                      <ul className="list-disc list-outside pl-5 text-slate-400 space-y-0.5 m-0">
                        {svc.buyerPrepares.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mb-3">
                    <span className="text-slate-400">Typical delivery:</span> {svc.typicalDelivery}
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    <span className="text-slate-400">Choose when:</span> {svc.whenToChoose}
                  </p>
                  <Link href={`/contact?service=${svc.slug}`} className="btn-primary text-xs py-1.5">
                    Request This Service
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-semibold text-white mb-6">Delivery Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {DELIVERY_PROCESS.map((step) => (
              <div key={step.step} className="card-flat">
                <span className="text-blue-400 font-mono text-sm">{step.step}</span>
                <h3 className="font-medium text-white text-sm mt-1 mb-1">{step.title}</h3>
                <p className="text-xs text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-white mb-6">Bulk Order Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {BULK_PROCESS.map((step) => (
              <div key={step.step} className="card-flat">
                <span className="text-blue-400 font-mono text-sm">{step.step}</span>
                <h3 className="font-medium text-white text-sm mt-1 mb-1">{step.title}</h3>
                <p className="text-xs text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <ContactCTA title="Discuss OEM / Bulk Deployment" />
        </div>
      </div>
    </div>
  );
}
