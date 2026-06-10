import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT, SITE } from "@/lib/config";

export function SiteHero({
  image,
  secondaryImage,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  image: string;
  secondaryImage?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="tech-hero">
      <div className="tech-hero-bg" aria-hidden />
      <div className="tech-grid-bg absolute inset-0 pointer-events-none" aria-hidden />

      <div className="container-wide relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 md:py-28 lg:py-32">
        <div className="max-w-xl lg:max-w-none">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-lg mb-8 leading-relaxed">{subtitle}</p>
          <div className="flex flex-wrap gap-3 mb-8">{children}</div>
          <div className="flex flex-wrap gap-3">
            <span className="hero-stat-pill">Est. 2017</span>
            <span className="hero-stat-pill">20–32 nodes / SKU</span>
            <span className="hero-stat-pill">Guangzhou factory</span>
          </div>
        </div>

        <div className="relative lg:pl-4">
          <div className="hero-product-glow" aria-hidden />
          <div className="hero-product-frame">
            <Image
              src={image}
              alt="Phone farm hardware"
              fill
              className="object-contain p-6 md:p-10 drop-shadow-2xl"
              priority
              sizes="(max-width:1024px) 90vw, 45vw"
            />
          </div>
          {secondaryImage && (
            <div className="absolute -bottom-4 -left-2 md:-left-6 w-[38%] max-w-[200px] aspect-square rounded-2xl overflow-hidden border border-cyan-400/30 shadow-xl shadow-cyan-950/40 bg-[var(--surface)] hidden sm:block">
              <Image src={secondaryImage} alt="" fill className="object-cover" sizes="200px" />
            </div>
          )}
        </div>
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
      <div className="tech-grid-bg absolute inset-0 opacity-60 pointer-events-none" aria-hidden />
      {image && (
        <>
          <div className="page-banner-visual">
            <Image src={image} alt="" fill className="object-cover object-center" sizes="50vw" priority />
          </div>
          <div className="page-banner-overlay" aria-hidden />
        </>
      )}
      {!image && <div className="absolute inset-0 bg-[var(--surface)]" aria-hidden />}
      <div className="container-wide relative z-10 w-full py-14 md:py-20">
        <p className="eyebrow">{SITE.nameEn} · {SITE.locationEn}</p>
        <h1 className="section-title mb-4 max-w-3xl">{title}</h1>
        {subtitle && <p className="section-subtitle mb-0 max-w-2xl">{subtitle}</p>}
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
    <section className="border-b border-sky-400/15 backdrop-blur-sm" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(56,189,248,0.08) 50%, rgba(255,255,255,0.05) 100%)" }}>
      <div className="container-wide py-10 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="text-center md:text-left rounded-2xl p-6 md:p-7 backdrop-blur-sm transition-all"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(125,211,252,0.22)" }}
            >
              <div className="trust-metric-value">{item.value}</div>
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
    <div className={`product-showcase-band grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
      <div className={`product-showcase-image min-h-[280px] lg:min-h-[380px] ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <Image src={image} alt={title} fill className="object-cover hover:scale-[1.02] transition-transform duration-700" sizes="(max-width:1024px) 100vw, 45vw" />
      </div>
      <div className={`space-y-6 lg:space-y-7 ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <p className="eyebrow">{titleZh}</p>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{title}</h3>
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed">{description}</p>
        <ul className="param-list">
          {params.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="text-base md:text-lg text-slate-400">
          <span className="accent-text">Best for:</span> {useCase}
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
      {images.map((img, i) => (
        <div
          key={img.label}
          className={`relative rounded-2xl overflow-hidden border border-cyan-500/15 bg-[var(--surface)] shadow-lg shadow-cyan-950/20 hover:border-cyan-400/30 transition-colors ${
            i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[360px]" : "aspect-[4/3]"
          }`}
        >
          <Image src={img.src} alt={img.label} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 50vw, 25vw" />
          <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0f1a30]/90 via-[#152238]/40 to-transparent text-sm md:text-base text-sky-50 px-4 py-3 font-semibold">
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
      RFQ: <a href={`mailto:${CONTACT.email}`} className="text-cyan-400 hover:text-cyan-300 font-medium">{CONTACT.email}</a>
      {" · "}
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium">WhatsApp</a>
    </p>
  );
}
