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
    <section className="catalog-hero border-b border-orange-500/20">
      <Image src={image} alt="" fill className="object-cover object-center scale-105" priority sizes="100vw" />
      <div className="catalog-hero-overlay" aria-hidden />
      <div className="absolute top-1/3 right-0 w-[min(50vw,520px)] h-[min(50vw,520px)] rounded-full bg-orange-500/20 blur-[120px] pointer-events-none" aria-hidden />
      <div className="container-wide relative z-10 w-full pb-16 md:pb-24 pt-32 md:pt-40">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-white max-w-4xl leading-[1.02] mb-8 tracking-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mb-10 leading-relaxed">{subtitle}</p>
        <div className="flex flex-wrap gap-4 md:gap-5">{children}</div>
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
    <section className="page-banner flex items-end">
      {image && (
        <>
          <div className="absolute inset-0">
            <Image src={image} alt="" fill className="object-cover opacity-50 scale-105" sizes="100vw" priority />
          </div>
          <div className="page-banner-overlay" aria-hidden />
        </>
      )}
      <div className={`container-wide relative z-10 w-full py-16 md:py-24 ${!image ? "bg-[var(--surface)]" : ""}`}>
        <p className="eyebrow">{SITE.nameEn} · {SITE.locationEn}</p>
        <h1 className="section-title mb-4">{title}</h1>
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
    <section className="border-b border-orange-500/15 bg-gradient-to-r from-[var(--surface)] via-[var(--surface-elevated)] to-[var(--surface)]">
      <div className="container-wide py-10 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {items.map((item) => (
            <div
              key={item.label}
              className="text-center md:text-left rounded-2xl p-6 md:p-8 border border-white/5 bg-white/[0.03] hover:border-orange-500/30 transition-colors"
            >
              <div className="trust-metric-value bg-gradient-to-br from-white to-orange-200 bg-clip-text text-transparent">
                {item.value}
              </div>
              <div className="trust-metric-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, center }: { title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`mb-12 md:mb-16 lg:mb-20 ${center ? "text-center" : ""}`}>
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
    <div className={`product-showcase-band grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
      <div className={`product-showcase-image min-h-[280px] lg:min-h-[400px] ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <Image src={image} alt={title} fill className="object-cover hover:scale-[1.02] transition-transform duration-700" sizes="(max-width:1024px) 100vw, 45vw" />
      </div>
      <div className={`space-y-6 lg:space-y-8 ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <p className="eyebrow">{titleZh}</p>
        <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight">{title}</h3>
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed">{description}</p>
        <ul className="param-list">
          {params.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="text-base md:text-lg text-slate-400">
          <span className="text-orange-400 font-bold">Best for:</span> {useCase}
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link href={href} className="btn-primary">View Product</Link>
          <Link href={`/contact?product=${href.split("/").pop()}`} className="btn-outline">Get Quote</Link>
        </div>
      </div>
    </div>
  );
}

export function FactoryGallery({ images }: { images: { src: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
      {images.map((img, i) => (
        <div
          key={img.label}
          className={`relative rounded-2xl overflow-hidden border-2 border-white/10 bg-[var(--surface)] shadow-xl ${
            i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[360px]" : "aspect-[4/3]"
          }`}
        >
          <Image src={img.src} alt={img.label} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 50vw, 25vw" />
          <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-sm md:text-base text-white px-4 py-3 font-semibold">
            {img.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function RfqFloatingHint() {
  return (
    <p className="text-sm text-slate-500 mt-4">
      RFQ: <a href={`mailto:${CONTACT.email}`} className="text-orange-400 hover:text-orange-300 font-medium">{CONTACT.email}</a>
      {" · "}
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium">WhatsApp</a>
    </p>
  );
}
