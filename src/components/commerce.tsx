"use client";

import Image from "next/image";
import Link from "next/link";
import { StockBadge } from "./shared";
import { CONTACT } from "@/lib/config";

type ProductCardProps = {
  slug: string;
  name: string;
  shortDesc: string;
  priceUsd: number;
  stock: number;
  imageCard: string;
  category: string;
};

export function ProductCard({ slug, name, shortDesc, priceUsd, stock, imageCard, category }: ProductCardProps) {
  return (
    <article className="card group flex flex-col">
      <Link href={`/products/${slug}`} className="block relative aspect-square overflow-hidden rounded-t-xl bg-slate-900">
        <Image src={imageCard} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width:768px) 100vw, 25vw" />
        <span className="absolute top-3 left-3 text-xs bg-slate-950/80 text-emerald-400 px-2 py-1 rounded">{category}</span>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/products/${slug}`}>
          <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">{name}</h3>
        </Link>
        <p className="text-sm text-slate-400 mb-3 line-clamp-2 flex-1">{shortDesc}</p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-white">参考价 ${priceUsd.toLocaleString()}</span>
          <StockBadge stock={stock} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link href={`/products/${slug}`} className="btn-secondary text-center text-sm py-2">查看详情</Link>
          <Link href={`/contact?product=${slug}`} className="btn-primary text-center text-sm py-2">获取报价</Link>
        </div>
      </div>
    </article>
  );
}

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details key={i} className="card p-4 group">
          <summary className="font-medium text-white cursor-pointer list-none flex justify-between items-center">
            {item.question}
            <span className="text-emerald-400 group-open:rotate-45 transition-transform text-xl">+</span>
          </summary>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function BuyButtons({ slug }: { slug: string; stock?: number }) {
  const waText = encodeURIComponent(`你好，我想咨询产品：${slug}`);
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={`/contact?product=${slug}`} className="btn-primary">获取报价</Link>
      <Link href={`/contact?product=${slug}&type=sample`} className="btn-secondary">申请样品</Link>
      <a href={`${CONTACT.whatsappUrl}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
        WhatsApp 咨询
      </a>
    </div>
  );
}
