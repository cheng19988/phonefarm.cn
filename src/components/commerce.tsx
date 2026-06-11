"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT, RFQ_COPY } from "@/lib/config";
import { FaqAnswer } from "@/components/faq-answer";

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

export function ProductCard({ slug, name, shortDesc, keyParams, bestFor, imageCard, category }: ProductCardProps) {
  const waText = encodeURIComponent(`Hi, I need a quote for: ${name}`);
  return (
    <article className="card flex flex-col h-full group hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1">
      <Link href={`/products/${slug}`} className="product-card-image">
        <Image
          src={imageCard}
          alt={name}
          fill
          unoptimized
          className="object-contain p-3 md:p-4 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          sizes="(max-width:768px) 100vw, 40vw"
        />
        <span className="absolute top-4 left-4 text-sm bg-cyan-500/90 text-slate-950 px-4 py-1.5 rounded-full font-bold shadow-lg">
          {category}
        </span>
      </Link>
      <div className="product-card-body">
        <Link href={`/products/${slug}`}>
          <h3 className="font-extrabold text-white text-xl md:text-2xl lg:text-[1.65rem] leading-snug group-hover:text-cyan-300 transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-base md:text-lg text-slate-300 leading-relaxed line-clamp-2">{shortDesc}</p>
        <ul className="param-list flex-1">
          {keyParams.slice(0, 3).map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="text-base text-slate-300 pt-2 border-t border-[var(--border)]">
          <span className="accent-text">Best for:</span> {bestFor}
        </p>
        <p className="text-sm text-cyan-300 font-semibold">{RFQ_COPY.pricingNote}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <Link href={`/contact?product=${slug}`} className="btn-primary text-center text-sm md:text-base">
            Get Quote
          </Link>
          <a
            href={`${CONTACT.whatsappUrl}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-center text-sm md:text-base"
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
    <div className="space-y-4">
      {items.map((item, i) => (
        <details key={i} className="card-flat group open:border-cyan-400/40 open:shadow-xl transition-all">
          <summary className="font-bold text-white text-lg md:text-xl cursor-pointer list-none flex justify-between items-start gap-4 py-1">
            <span className="leading-snug">{item.question}</span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 group-open:rotate-45 transition-transform text-xl">
              +
            </span>
          </summary>
          <FaqAnswer text={item.answer} />
        </details>
      ))}
    </div>
  );
}

export function FAQSection({ title, items }: { title: string; items: { question: string; answer: string }[] }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8 pb-4 border-b border-cyan-500/20">{title}</h2>
      <FAQAccordion items={items} />
    </section>
  );
}
