import Link from "next/link";
import { ContactCTA } from "@/components/shared";
import { PageBanner } from "@/components/site-sections";
import type { SeoGuide } from "@/data/seo-guides";
import { CONTACT } from "@/lib/config";

export function SeoGuidePageView({ guide }: { guide: SeoGuide }) {
  return (
    <>
      <PageBanner title={guide.title} subtitle={guide.heroSubtitle} />

      <article className="section">
        <div className="container-wide max-w-4xl space-y-10">
          {guide.sections.map((section) => {
            const Tag = section.level === 2 ? "h2" : "h3";
            return (
              <section key={section.heading}>
                <Tag
                  className={
                    section.level === 2
                      ? "text-2xl md:text-3xl font-bold text-white mb-4"
                      : "text-xl font-bold text-white mb-3"
                  }
                >
                  {section.heading}
                </Tag>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-slate-300 text-base md:text-lg leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="param-list mt-2">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}

          <div className="card-flat flex flex-wrap gap-3 pt-4">
            <Link href="/products" className="btn-primary">Browse Products</Link>
            <Link href="/contact" className="btn-outline">Get Quote</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              WhatsApp
            </a>
            <Link href="/manual" className="btn-outline">Installation Manual</Link>
          </div>
        </div>
      </article>

      <section className="section-compact border-t border-[var(--border)]">
        <div className="container-wide">
          <ContactCTA title="Configure your phone farm hardware" />
        </div>
      </section>
    </>
  );
}
