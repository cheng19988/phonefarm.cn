import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT, SITE } from "@/lib/config";

export function SiteHero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="catalog-hero border-b border-[var(--border)]">
      <Image src={image} alt="" fill className="object-cover object-center" priority sizes="100vw" />
      <div className="catalog-hero-overlay" aria-hidden />
      <div className="container-wide relative z-10 w-full pb-14 md:pb-20 pt-28 md:pt-36">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-white max-w-4xl leading-[1.05] mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}

export function PageBanner({
  title,
  subtitle,
  image,
  children,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-banner">
      {image && (
        <>
          <div className="absolute inset-0">
            <Image src={image} alt="" fill className="object-cover opacity-40" sizes="100vw" priority />
          </div>
          <div className="page-banner-overlay" aria-hidden />
        </>
      )}
      <div className={`container-wide relative z-10 py-16 md:py-24 ${!image ? "bg-[var(--surface)]" : ""}`}>
        <p className="eyebrow">{SITE.nameEn} · {SITE.locationEn}</p>
        <h1 className="section-title mb-3">{title}</h1>
        {subtitle && <p className="section-subtitle mb-0">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export function TrustStrip() {
  const items = [
    { value: "2017", label: "Assembling since" },
    { value: "20–32", label: "Nodes per chassis SKU" },
    { value: "Guangzhou", label: "Factory direct" },
    { value: "RFQ + USDT", label: "Bulk order paths" },
  ];
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="container-wide py-8 md:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div key={item.label} className="text-center md:text-left border-l-2 border-amber-500/40 pl-4 md:pl-6">
              <div className="trust-metric-value">{item.value}</div>
              <div className="trust-metric-label mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, center }: { title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
      <h2 className={`section-title ${center ? "mx-auto" : ""}`}>{title}</h2>
      {subtitle && <p className={`section-subtitle ${center ? "mx-auto" : ""} mb-0`}>{subtitle}</p>}
    </div>
  );
}

export function ProductShowcase({
  title,
  titleZh,
  description,
  params,
  useCase,
  href,
  image,
  reverse,
}: {
  title: string;
  titleZh: string;
  description: string;
  params: readonly string[] | string[];
  useCase: string;
  href: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
      <div className={`product-showcase-image ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
      </div>
      <div className={reverse ? "lg:[direction:ltr]" : ""}>
        <p className="eyebrow mb-2">{titleZh}</p>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h3>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">{description}</p>
        <ul className="param-list mb-6">
          {params.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="text-sm text-slate-500 mb-8">
          <span className="text-amber-400/90 font-medium">Best for:</span> {useCase}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href={href} className="btn-primary">View Product</Link>
          <Link href={`/contact?product=${href.split("/").pop()}`} className="btn-outline">Get Quote</Link>
        </div>
      </div>
    </div>
  );
}

export function FactoryGallery({ images }: { images: { src: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {images.map((img, i) => (
        <div
          key={img.label}
          className={`relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] ${
            i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[320px]" : "aspect-[4/3]"
          }`}
        >
          <Image src={img.src} alt={img.label} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 50vw, 25vw" />
          <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent text-xs md:text-sm text-slate-200 px-3 py-2 font-medium">
            {img.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function RfqFloatingHint() {
  return (
    <p className="text-xs text-slate-500 mt-4">
      RFQ: <a href={`mailto:${CONTACT.email}`} className="text-amber-400/90 hover:text-amber-300">{CONTACT.email}</a>
      {" · "}
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400/90 hover:text-emerald-300">WhatsApp</a>
    </p>
  );
}
