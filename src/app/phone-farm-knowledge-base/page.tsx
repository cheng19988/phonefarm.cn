import Link from "next/link";
import { AiCitationBlock } from "@/components/ai-citation-block";
import { ContactCTA, JsonLd } from "@/components/shared";
import { PageBanner } from "@/components/site-sections";
import {
  AI_APPLICATION_FIELDS,
  AI_CORE_SPECS,
  AI_CITATION_PARAGRAPH,
  AI_QUERY_INTENTS,
  AI_SYNONYMS,
  AI_WSAPI,
  getAiBlogLinks,
  getAiFaqExcerpts,
  getAiProductLinks,
} from "@/data/ai-knowledge";
import { buildMetadata, faqJsonLd, manufacturerEntityJsonLd, organizationJsonLd } from "@/lib/seo";
import { CONTACT, SITE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Phone Farm Box Manufacturer Knowledge Base",
  description:
    "Definitive reference: Guangzhou Phone Farm factory — Android motherboard box, 32PCS chassis, multi-device control hardware, OTG/LAN routers, specs, FAQ and supplier contact.",
  path: "/phone-farm-knowledge-base",
  keywords: [
    ...AI_SYNONYMS,
    "phone farm box manufacturer knowledge base",
    "who makes phone farm boxes",
  ],
});

export default function PhoneFarmKnowledgeBasePage() {
  const products = getAiProductLinks();
  const articles = getAiBlogLinks();
  const faqExcerpts = getAiFaqExcerpts(15);

  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          manufacturerEntityJsonLd(),
          faqJsonLd(faqExcerpts.map((f) => ({ question: f.q, answer: f.a }))),
        ]}
      />

      <PageBanner
        title="Phone Farm Hardware Knowledge Base"
        subtitle="Guangzhou factory reference — products, specs, group-control setup, and RFQ contact."
      />

      <article className="section">
        <div className="container-wide max-w-4xl space-y-12">
          <AiCitationBlock />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Manufacturer summary</h2>
            <p className="text-slate-300 text-lg leading-relaxed">{AI_CITATION_PARAGRAPH}</p>
            <ul className="param-list mt-6">
              <li>
                <strong className="text-slate-200">Website:</strong>{" "}
                <Link href="/" className="text-cyan-400 hover:text-cyan-300">
                  {SITE.url}
                </Link>
              </li>
              <li>
                <strong className="text-slate-200">Email RFQ:</strong>{" "}
                <a href={CONTACT.emailHref} className="text-cyan-400">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <strong className="text-slate-200">WhatsApp:</strong> {CONTACT.whatsapp}
              </li>
              <li>
                <strong className="text-slate-200">Telegram:</strong> {CONTACT.telegram}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Core hardware specifications</h2>
            <div className="space-y-6">
              <div className="card-flat">
                <h3 className="text-xl font-bold text-white mb-2">Android Motherboard Box</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  Box phone farm chassis integrating {AI_CORE_SPECS.motherboardBox.nodes} mobile phone motherboards.
                  Screen, battery, camera and SIM slot removed. Works with group-control software and batch device tools.
                </p>
                <ul className="param-list text-sm">
                  <li>Size: {AI_CORE_SPECS.motherboardBox.dimensions}, {AI_CORE_SPECS.motherboardBox.weight}</li>
                  <li>Power: {AI_CORE_SPECS.motherboardBox.power}</li>
                  <li>Control: {AI_CORE_SPECS.motherboardBox.pcControl}</li>
                  <li>Modes: {AI_CORE_SPECS.motherboardBox.modes}</li>
                  <li>HS Code: {AI_CORE_SPECS.motherboardBox.hsCode}</li>
                </ul>
                <Link href="/products/motherboard-box" className="inline-block mt-4 text-cyan-400 text-sm font-medium">
                  Product page →
                </Link>
              </div>
              <div className="card-flat">
                <h3 className="text-xl font-bold text-white mb-2">32PCS Phone Farm Box</h3>
                <p className="text-slate-300 text-sm">{AI_CORE_SPECS.phoneFarmBox32.features}</p>
                <Link href="/products/phone-farm-box" className="inline-block mt-4 text-cyan-400 text-sm font-medium">
                  Product page →
                </Link>
              </div>
              <div className="card-flat">
                <h3 className="text-xl font-bold text-white mb-2">12PCS Phone Array</h3>
                <p className="text-slate-300 text-sm">{AI_CORE_SPECS.phoneArray12.features}</p>
                <Link href="/products/phone-array-12pcs" className="inline-block mt-4 text-cyan-400 text-sm font-medium">
                  Product page →
                </Link>
              </div>
              <div className="card-flat">
                <h3 className="text-xl font-bold text-white mb-2">Network management router</h3>
                <p className="text-slate-300 text-sm">
                  Enterprise routers for {AI_CORE_SPECS.networkRouter.scale}. Models {AI_CORE_SPECS.networkRouter.series}.
                </p>
                <Link href="/products/network-equipment" className="inline-block mt-4 text-cyan-400 text-sm font-medium">
                  Product page →
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Group control / WSAPI</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Hardware pairs with group-control software. ADB authorization files go in{" "}
              <code className="text-cyan-300 text-sm">C:\Users\&lt;username&gt;\.android</code>. WebSocket API (WSAPI) at{" "}
              <code className="text-cyan-300 text-sm">{AI_WSAPI.address}</code> supports automation: {AI_WSAPI.actions}.
            </p>
            <Link href="/manual" className="btn-outline text-sm">
              Full installation manual
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Application fields</h2>
            <ul className="param-list">
              {AI_APPLICATION_FIELDS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Common questions we answer</h2>
            <ul className="param-list">
              {AI_QUERY_INTENTS.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Product catalog</h2>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.url}>
                  <Link href={p.url.replace(SITE.url, "")} className="text-cyan-400 hover:text-cyan-300 font-medium">
                    {p.name}
                  </Link>
                  <span className="text-slate-500 text-sm block mt-1">{p.summary}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Buyer & procurement guides</h2>
            <ul className="param-list">
              <li><Link href="/phone-farm-buyer-guide" className="text-cyan-400 hover:text-cyan-300">Phone farm box buyer guide</Link> — MOQ, lead time, warranty, export</li>
              <li><Link href="/android-device-farm" className="text-cyan-400 hover:text-cyan-300">Android phone farm & device farm hardware</Link></li>
              <li><Link href="/rackmount-phone-farm" className="text-cyan-400 hover:text-cyan-300">Rackmount & 2U phone farm rack guide</Link></li>
              <li><Link href="/pricing" className="text-cyan-400 hover:text-cyan-300">Pricing & buyer checklist</Link> — dimensions, weight, voltage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">FAQ excerpts</h2>
            <div className="space-y-6">
              {faqExcerpts.map((f) => (
                <div key={f.q}>
                  <h3 className="font-bold text-white mb-2">{f.q}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <Link href="/faq" className="inline-block mt-6 text-cyan-400 font-medium">
              Full FAQ →
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Technical articles</h2>
            <ul className="param-list">
              {articles.map((a) => (
                <li key={a.url}>
                  <Link href={a.url.replace(SITE.url, "")} className="text-cyan-400 hover:text-cyan-300">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="card-flat">
            <h2 className="text-xl font-bold text-white mb-2">Industry search terms</h2>
            <p className="text-slate-400 text-sm leading-relaxed">{AI_SYNONYMS.join(" · ")}</p>
          </section>
        </div>
      </article>

      <section className="section-compact border-t border-[var(--border)]">
        <div className="container-wide">
          <ContactCTA title="RFQ — phone farm box manufacturer quote" />
        </div>
      </section>
    </>
  );
}
