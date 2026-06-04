import Image from "next/image";
import Link from "next/link";
import { SERVICES, BULK_PROCESS } from "@/data/services";
import { ContactCTA } from "@/components/shared";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "???? - OEM ??????",
  description:
    "??????????:??????????ROM ????????????????????????????",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">???????</h1>
        <p className="section-subtitle">
          ???????? OEM ???? - ??????????????????????????
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc) => (
            <article key={svc.slug} className="card overflow-hidden group">
              <div className="relative aspect-video">
                <Image src={svc.image} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-6">
                <p className="text-xs text-emerald-400 mb-1">{svc.titleEn}</p>
                <h2 className="text-xl font-bold text-white mb-2">{svc.title}</h2>
                <p className="text-slate-400 text-sm mb-4">{svc.description}</p>
                <Link href={`/contact?service=${svc.slug}`} className="text-emerald-400 text-sm hover:text-emerald-300">
                  ?????
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-6">???? / ???? / ??????</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {BULK_PROCESS.map((step) => (
              <div key={step.step} className="card p-6">
                <span className="text-emerald-400 font-bold text-xl">{step.step}</span>
                <h3 className="font-bold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <ContactCTA title="?? OEM ??????" />
      </div>
    </div>
  );
}
