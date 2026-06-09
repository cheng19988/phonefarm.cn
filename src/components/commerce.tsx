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
    <article className="card flex flex-col h-full group hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5">
      <Link href={`/products/${slug}`} className="block relative aspect-[4/3] overflow-hidden bg-[var(--surface-elevated)]">
        <Image
          src={imageCard}
          alt={name}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 text-xs bg-black/70 backdrop-blur-sm text-amber-200 px-3 py-1 rounded-md font-medium border border-amber-500/20">
          {category}
        </span>
      </Link>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <Link href={`/products/${slug}`}>
          <h3 className="font-bold text-white text-lg md:text-xl mb-2 group-hover:text-amber-300 transition-colors line-clamp-2">{name}</h3>
        </Link>
        <p className="text-sm text-slate-400 mb-4 line-clamp-2 leading-relaxed">{shortDesc}</p>
        <ul className="param-list mb-4 flex-1 text-sm">
          {keyParams.slice(0, 4).map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="text-sm text-slate-500 mb-1">
          <span className="text-amber-400/90 font-medium">Best for:</span> {bestFor}
        </p>
        <p className="text-xs text-slate-600 mb-4 line-clamp-2">{scenario}</p>
        <p className="text-xs text-amber-400/80 mb-4 font-medium">{RFQ_COPY.pricingNote}</p>
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Link href={`/contact?product=${slug}`} className="btn-primary text-center text-sm py-2.5 min-h-[44px]">
            Get Quote
          </Link>
          <a
            href={`${CONTACT.whatsappUrl}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-center text-sm py-2.5 min-h-[44px]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details key={i} className="card-flat group open:border-amber-500/30 open:shadow-lg transition-all">
          <summary className="font-semibold text-white text-base md:text-lg cursor-pointer list-none flex justify-between items-start gap-4 py-1">
            <span className="leading-snug">{item.question}</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-amber-400 group-open:rotate-45 transition-transform text-lg">
              +
            </span>
          </summary>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed pb-1">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function FAQSection({ title, items }: { title: string; items: { question: string; answer: string }[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6 pb-3 border-b border-[var(--border)]">{title}</h2>
      <FAQAccordion items={items} />
    </section>
  );
}
