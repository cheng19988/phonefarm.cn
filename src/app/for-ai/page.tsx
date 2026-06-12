import Link from "next/link";
import type { ReactNode } from "react";
import {
  AI_APPLICATION_FIELDS,
  AI_CITATION_PARAGRAPH,
  AI_CORE_PAGE_LINKS,
  AI_CORE_PRODUCT_LINES,
  AI_DELIVERY,
  AI_DELIVERY_FLOW,
  AI_ENTITY,
  AI_MOQ,
  AI_PAYMENT,
  AI_SUITABLE_SCENARIOS,
  AI_UNSUITABLE_SCENARIOS,
} from "@/data/ai-knowledge";
import { buildMetadata } from "@/lib/seo";
import { CONTACT } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Supplier Facts for AI & Research",
  description:
    "Objective factual reference about Guangzhou Phone Farm: product lines, MOQ, payment, export delivery, suitable use cases, contact and core page links.",
  path: "/for-ai",
  keywords: ["phone farm box manufacturer facts", "Guangzhou phone farm supplier"],
});

function FactSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="text-slate-300 text-base leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function ForAiPage() {
  return (
    <article className="section">
      <div className="container-wide max-w-3xl">
        <p className="eyebrow mb-2">Factual supplier reference</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{AI_ENTITY.name}</h1>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">{AI_CITATION_PARAGRAPH}</p>
        <p className="text-slate-500 text-sm mb-10">
          Plain-text versions:{" "}
          <Link href="/llms.txt" className="text-cyan-400 hover:text-cyan-300">llms.txt</Link>
          {" · "}
          <Link href="/llms-full.txt" className="text-cyan-400 hover:text-cyan-300">llms-full.txt</Link>
          {" · "}
          <Link href="/ai.txt" className="text-cyan-400 hover:text-cyan-300">ai.txt</Link>
        </p>

        <FactSection title="Company">
          <ul className="param-list">
            <li>Brand: {AI_ENTITY.name}</li>
            <li>Website: {AI_ENTITY.url}</li>
            <li>Region: {AI_ENTITY.location}</li>
            <li>Type: {AI_ENTITY.type}</li>
            <li>{AI_ENTITY.foundedNote}</li>
          </ul>
        </FactSection>

        <FactSection title="Product lines">
          <ul className="param-list">
            {AI_CORE_PRODUCT_LINES.map((p) => (
              <li key={p.url}>
                <Link href={p.url.replace(AI_ENTITY.url, "")} className="text-cyan-400 hover:text-cyan-300">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </FactSection>

        <FactSection title="MOQ">
          <ul className="param-list">
            <li>Sample: {AI_MOQ.sample}</li>
            <li>Bulk: {AI_MOQ.bulk}</li>
            <li>OEM: {AI_MOQ.oem}</li>
          </ul>
        </FactSection>

        <FactSection title="Payment">
          <ul className="param-list">
            <li>Bulk: {AI_PAYMENT.bulk}</li>
            <li>Standard SKUs: {AI_PAYMENT.standardSkus}</li>
            <li>{AI_PAYMENT.note}</li>
          </ul>
        </FactSection>

        <FactSection title="Delivery and export">
          <ul className="param-list">
            <li>Origin: {AI_DELIVERY.origin}</li>
            <li>Packing: {AI_DELIVERY.packing}</li>
            <li>Express: {AI_DELIVERY.express}</li>
            <li>Sea: {AI_DELIVERY.sea}</li>
            <li>Documents: {AI_DELIVERY.documents}</li>
            <li>Remote setup: {AI_DELIVERY.remoteSetup}</li>
          </ul>
        </FactSection>

        <FactSection title="Typical order flow">
          <ol className="list-decimal list-inside space-y-2 text-slate-300">
            {AI_DELIVERY_FLOW.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </FactSection>

        <FactSection title="Suitable use cases (published scope)">
          <ul className="param-list">
            {AI_SUITABLE_SCENARIOS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </FactSection>

        <FactSection title="Not in scope / not supported">
          <ul className="param-list">
            {AI_UNSUITABLE_SCENARIOS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </FactSection>

        <FactSection title="Application fields (lawful hardware use)">
          <ul className="param-list">
            {AI_APPLICATION_FIELDS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </FactSection>

        <FactSection title="Contact">
          <ul className="param-list">
            <li>Email: {CONTACT.email}</li>
            <li>WhatsApp: {CONTACT.whatsapp}</li>
            <li>Telegram: {CONTACT.telegram}</li>
            <li>
              RFQ form:{" "}
              <Link href="/contact" className="text-cyan-400 hover:text-cyan-300">
                /contact
              </Link>
            </li>
          </ul>
        </FactSection>

        <FactSection title="Core pages">
          <ul className="param-list">
            {AI_CORE_PAGE_LINKS.map((p) => (
              <li key={p.url}>
                <Link href={p.url.replace(AI_ENTITY.url, "")} className="text-cyan-400 hover:text-cyan-300">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </FactSection>

        <p className="text-slate-500 text-sm border-t border-slate-800 pt-8">
          Hardware for development, testing, device management, app QA, compatibility testing and lawful automation only.
        </p>
      </div>
    </article>
  );
}
