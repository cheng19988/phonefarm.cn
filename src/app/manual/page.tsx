import Link from "next/link";
import { ContactCTA } from "@/components/shared";
import { MANUAL_SECTIONS, MANUAL_TOC } from "@/data/manual";
import { buildMetadata } from "@/lib/seo";

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
      return <code key={i} className="block bg-[#141c28] p-2 rounded text-xs text-blue-300 my-2 font-mono">{line.replace(/`/g, "")}</code>;
    }
    if (line.trim() === "") return <br key={i} />;
    return <p key={i} className="text-slate-300 text-sm leading-relaxed mb-2">{line}</p>;
  });
}

export default function ManualPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1 hidden lg:block">
            <nav className="sticky top-24 space-y-1 text-sm">
              <p className="text-slate-500 text-xs font-medium mb-3 uppercase tracking-wide">Contents</p>
              {MANUAL_TOC.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="block text-slate-400 hover:text-white py-1">
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="lg:col-span-3 max-w-3xl">
            <h1 className="section-title">Installation Manual</h1>
            <p className="section-subtitle">
              Technical setup guide for Android phone farm boxes - USB mode, OTG/LAN, ADB, routers and troubleshooting.
            </p>

            {MANUAL_SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-[var(--border)]">
                  {section.title}
                </h2>
                <div>{renderContent(section.content)}</div>
              </section>
            ))}

            <div className="mt-12">
              <ContactCTA title="Need hardware for this setup- Send RFQ" />
            </div>
            <p className="text-sm text-slate-500 mt-4">
              More articles: <Link href="/blog" className="text-blue-400 hover:underline">Technical Articles</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
