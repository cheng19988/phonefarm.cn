import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BannerMedia } from "@/components/banner-media";
import type { BannerFit } from "@/lib/banners";
import { SITE } from "@/lib/config";

type BannerVisualProps = {
  fit?: BannerFit;
  focus?: string;
  scale?: number;
};

export function SiteHero({
  banner,
  fit = "cover",
  focus = "center",
  scale = 1,
  eyebrow,
  title,
  subtitle,
  children,
}: BannerVisualProps & {
  banner: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className={`tech-hero ${fit === "contain" ? "tech-hero--contain" : ""}`}>
      <div className="tech-hero-banner">
        <BannerMedia src={banner} fit={fit} focus={focus} scale={scale} className="tech-hero-photo" alt="" />
      </div>
      <div className="tech-hero-bg absolute inset-0 pointer-events-none z-[1]" aria-hidden />
      <div className="tech-hero-edges absolute inset-0 pointer-events-none z-[2]" aria-hidden />
      <div className={`tech-hero-overlay ${fit === "contain" ? "tech-hero-overlay--light" : ""}`} aria-hidden />
      <div className="tech-grid-bg absolute inset-0 opacity-25 pointer-events-none z-[2]" aria-hidden />

      <div className="container-wide relative z-10 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl lg:max-w-3xl hero-copy-panel">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
            {title}
          </h1>
          <p className="hero-lead">{subtitle}</p>
          <div className="flex flex-wrap gap-3 mb-8">{children}</div>
          <div className="flex flex-wrap gap-3">
            <span className="hero-stat-pill">Est. 2017</span>
            <span className="hero-stat-pill">20–32 nodes / SKU</span>
            <span className="hero-stat-pill">Guangzhou factory</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageBanner({
  title,
  subtitle,
  image,
  fit = "cover",
  imagePosition = "center",
  scale = 1,
  compactTitle,
  children,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  fit?: BannerFit;
  imagePosition?: string;
  scale?: number;
  /** Minimal title bar for banners that already include headline artwork */
  compactTitle?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`page-banner flex items-end ${fit === "contain" ? "page-banner--contain" : ""}`}>
      <div className="tech-grid-bg absolute inset-0 opacity-15 pointer-events-none z-[1]" aria-hidden />
      {image && (
        <>
          <div className="page-banner-visual">
            <BannerMedia src={image} fit={fit} focus={imagePosition} scale={scale} alt={`${title} banner`} />
          </div>
          <div className={`page-banner-overlay ${fit === "contain" ? "page-banner-overlay--contain" : ""} ${compactTitle ? "page-banner-overlay--compact" : ""}`} aria-hidden />
        </>
      )}
      {!image && <div className="absolute inset-0 bg-[var(--surface)]" aria-hidden />}
      <div className={`container-wide relative z-10 w-full ${compactTitle ? "py-6 md:py-8" : "py-14 md:py-20"}`}>
        {!compactTitle && <p className="eyebrow">{SITE.nameEn} · {SITE.locationEn}</p>}
        <h1 className={`section-title mb-4 max-w-3xl ${compactTitle ? "!text-2xl md:!text-3xl !mb-2" : ""}`}>{title}</h1>
        {subtitle && !compactTitle && <p className="section-subtitle mb-0 max-w-2xl">{subtitle}</p>}
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
    <section className="trust-strip">
      <div className="container-wide py-10 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {items.map((item) => (
            <div key={item.label} className="trust-metric-card">
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

export function SubsectionHeader({
  title,
  subtitle,
  center,
  compact,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={`subsection-header ${compact ? "!mb-4" : ""} ${center ? "text-center" : ""}`}>
      <h2 className={`subsection-title ${center ? "mx-auto" : ""}`}>{title}</h2>
      {subtitle && <p className={`subsection-subtitle ${center ? "mx-auto" : ""}`}>{subtitle}</p>}
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
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-contain p-4 md:p-6 hover:scale-[1.02] transition-transform duration-700"
          sizes="(max-width:1024px) 100vw, 45vw"
        />
      </div>
      <div className={`space-y-6 lg:space-y-7 ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <p className="eyebrow">{titleZh}</p>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{title}</h3>
        <p className="text-slate-200 text-lg md:text-xl leading-relaxed">{description}</p>
        <ul className="param-list">
          {params.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="text-base md:text-lg text-slate-300">
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
            i === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[360px]" : "aspect-[4/3]"
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
