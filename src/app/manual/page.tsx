import Image from "next/image";
import Link from "next/link";
import { ContactCTA, JsonLd } from "@/components/shared";
import { PageBanner } from "@/components/site-sections";
import { MANUAL_SECTIONS, MANUAL_TOC } from "@/data/manual";
import { buildMetadata, howToJsonLd } from "@/lib/seo";
import { bannerProps } from "@/lib/banners";
import { IMAGES } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Installation Manual - Phone Farm Box Setup",
  description:
    "Phone farm box installation manual: USB mode, OTG/LAN, ADB authorization, router recommendations, troubleshooting and remote support.",
  path: "/manual",
});

function renderContent(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("**") && line.endsWith("**")) {
      return <p key={i} className="font-medium text-white mt-4 mb-2 text-sm">{line.replace(/\*\*/g, "")}</p>;
    }
    if (line.startsWith("[ ]")) {
      return <p key={i} className="text-slate-300 text-sm mb-1">{line}</p>;
    }
    if (line.startsWith(" -> ")) {
      return <p key={i} className="text-slate-400 text-sm mb-1 pl-2">{line}</p>;
    }
    if (line.startsWith("`") && line.includes("`")) {
      return <code key={i} className="block bg-[var(--surface-elevated)] p-3 rounded-lg text-sm text-cyan-300/90 my-2 font-mono border border-[var(--border)]">{line.replace(/`/g, "")}</code>;
    }
    if (line.trim() === "") return <br key={i} />;
    return <p key={i} className="text-slate-300 text-sm leading-relaxed mb-2">{line}</p>;
  });
}

export default function ManualPage() {
  const howToSteps = [
    { name: "Prepare Windows PC", text: "Windows 10/11, uninstall phone assistant apps, obtain ADB authorization files." },
    { name: "Connect USB mode", text: "Power on box, connect USB, tap Allow on debug prompt, verify device list in group-control software." },
    { name: "Configure OTG/LAN", text: "Connect box and PC to same router, scan IP range, switch green OTG mode, save adb tcpip 5555." },
    { name: "Verify batch control", text: "Test mirror, batch select and click farm / group-control batch operations." },
  ];

  return (
    <>
      <JsonLd data={howToJsonLd(howToSteps)} />
      <PageBanner
        title="Installation Manual"
        subtitle="USB mode, OTG/LAN, ADB authorization, router sizing and troubleshooting for phone farm hardware."
        {...bannerProps("manual")}
      />
      <div className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-4 gap-10">
            <aside className="lg:col-span-1">
              <nav className="lg:sticky lg:top-24 card-flat space-y-1 text-sm mb-8 lg:mb-0">
                <p className="text-slate-500 text-xs font-semibold mb-3 uppercase tracking-wide">Contents</p>
                {MANUAL_TOC.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block text-slate-400 hover:text-cyan-300 py-1.5">
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="lg:col-span-3 max-w-3xl">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--border)] mb-10">
                <Image src={IMAGES.manual.otgLan} alt="OTG/LAN setup reference" fill className="object-cover" sizes="66vw" />
              </div>

              {MANUAL_SECTIONS.map((section) => (
                <section key={section.id} id={section.id} className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-[var(--border)]">
                    {section.title}
                  </h2>
                  <div className="prose-content">{renderContent(section.content)}</div>
                </section>
              ))}

              <div className="mt-12">
                <p className="text-base text-slate-400 mb-6 card-flat">
                  Need help choosing USB or OTG/LAN mode? Send quantity and setup environment for{" "}
                  <Link href="/contact" className="text-cyan-400 hover:underline">RFQ support</Link>.
                </p>
                <ContactCTA title="Need hardware for this setup — Send RFQ" />
              </div>
              <p className="text-sm text-slate-500 mt-6">
                More articles: <Link href="/blog" className="text-cyan-400 hover:underline">Technical Articles</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
