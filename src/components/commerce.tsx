"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT, RFQ_COPY } from "@/lib/config";

type ProductCardProps = {
  slug: string;
  name: string;
  shortDesc: string;
  keyParams: string[];
  bestFor: string;
  scenario: string;
  imageCard: string;
  category: string;
};

export function ProductCard({ slug, name, shortDesc, keyParams, bestFor, scenario, imageCard, category }: ProductCardProps) {
  const waText = encodeURIComponent(`Hi, I need a quote for: ${name}`);
  return (
    <article className="card flex flex-col">
      <Link href={`/products/${slug}`} className="block relative aspect-[4/3] overflow-hidden bg-[#141c28]">
        <Image src={imageCard} alt={name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <span className="absolute top-2 left-2 text-[10px] bg-black/70 text-slate-300 px-2 py-0.5 rounded">{category}</span>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/products/${slug}`}>
          <h3 className="font-medium text-white text-sm mb-1 hover:text-blue-400">{name}</h3>
        </Link>
        <p className="text-xs text-slate-400 mb-3 line-clamp-2">{shortDesc}</p>
        <ul className="param-list mb-3 flex-1 text-xs">
          {keyParams.slice(0, 4).map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="text-[11px] text-slate-500 mb-1">
          <span className="text-slate-400">Best for:</span> {bestFor}
        </p>
        <p className="text-[11px] text-slate-500 mb-3 line-clamp-2">{scenario}</p>
        <p className="text-[11px] text-blue-400/80 mb-3">{RFQ_COPY.pricingNote}</p>
        <div className="grid grid-cols-2 gap-2">
          <Link href={`/contact?product=${slug}`} className="btn-primary text-center text-xs py-1.5">
            Get Quote
          </Link>
          <a href={`${CONTACT.whatsappUrl}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-center text-xs py-1.5">
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <details key={i} className="card-flat group">
          <summary className="font-medium text-white text-sm cursor-pointer list-none flex justify-between items-center gap-4">
            {item.question}
            <span className="text-blue-400 group-open:rotate-45 transition-transform shrink-0">+</span>
          </summary>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function FAQSection({ title, items }: { title: string; items: { question: string; answer: string }[] }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-[var(--border)]">{title}</h2>
      <FAQAccordion items={items} />
    </section>
  );
}
