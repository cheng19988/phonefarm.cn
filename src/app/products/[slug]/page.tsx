import Link from "next/link";
import { notFound } from "next/navigation";
import { ensureDatabase } from "@/lib/ensure-db";
import { prisma } from "@/lib/prisma";
import { ProductBuyForm } from "@/components/product-buy-form";
import { FAQAccordion } from "@/components/commerce";
import { ProductGallery } from "@/components/product-gallery";
import { JsonLd } from "@/components/shared";
import { SpecTable } from "@/components/spec-table";
import { RfqCTA, ProductStickyCTA } from "@/components/rfq-cta";
import { SubsectionHeader } from "@/components/site-sections";
import { buildMetadata, productJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { getProductSeed } from "@/data/products";
import { getProductGallery } from "@/lib/images";
import { CONTACT, RFQ_COPY } from "@/lib/config";
import { REFERENCE_PRICE_NOTES, canBuyOnline, formatListPrice } from "@/lib/product-pricing";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const seed = getProductSeed(slug);
  if (!seed) return {};
  return buildMetadata({
    title: seed.name,
    description: seed.shortDesc,
    path: `/products/${slug}`,
    image: seed.imageHero,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  await ensureDatabase();
  const product = await prisma.product.findUnique({ where: { slug } });
  const seed = getProductSeed(slug);
  if (!product || !seed || !product.published) notFound();

  const gallery = getProductGallery(slug);
  const waText = encodeURIComponent(`Hi, RFQ for: ${seed.name}. Quantity and config to follow.`);
  const buyOnline = canBuyOnline(product.priceUsd, product.stock);
  const priceNote = REFERENCE_PRICE_NOTES[slug];

  return (
    <>
      <JsonLd
        data={[
          productJsonLd({
            name: seed.name,
            description: seed.shortDesc,
            slug: seed.slug,
            priceUsd: product.priceUsd,
            stock: product.stock,
            image: seed.imageHero,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: seed.name, path: `/products/${slug}` },
          ]),
          ...(seed.faq.length > 0
            ? [faqJsonLd(seed.faq.map((f) => ({ question: f.q, answer: f.a })))]
            : []),
        ]}
      />

      <section className="section pb-32 md:pb-16 border-b border-[var(--border)]">
        <div className="container-wide">
          <nav className="text-sm text-slate-500 mb-8 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-cyan-400">Products</Link>
            <span>/</span>
            <span className="text-slate-300">{seed.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <ProductGallery images={gallery.length ? gallery : [product.imageDetail]} alt={seed.name} />
            <div className="lg:pt-4">
              <p className="eyebrow">{seed.category}</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">{seed.name}</h1>
              <p className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed">{seed.shortDesc}</p>
              <p className="text-slate-400 text-sm md:text-base mb-6">
                <span className="text-slate-500">For:</span> {seed.targetBuyer}
              </p>
              <ul className="param-list mb-6">
                {seed.keyParams.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {buyOnline ? (
                <div className="mb-4">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {formatListPrice(product.priceUsd)}
                    <span className="text-sm font-normal text-slate-400 ml-2">USD list · USDT checkout</span>
                  </p>
                  {product.stock > 0 && (
                    <p className="text-sm text-emerald-400/90 mt-1">In stock ({product.stock} available)</p>
                  )}
                  {priceNote && <p className="text-xs text-slate-500 mt-2 max-w-lg leading-relaxed">{priceNote}</p>}
                </div>
              ) : (
                <p className="text-cyan-400/90 font-medium mb-8">{RFQ_COPY.pricingNote}</p>
              )}
              <div id="buy" className="flex flex-wrap gap-3 mb-6 scroll-mt-28">
                {buyOnline && <ProductBuyForm slug={slug} priceUsd={product.priceUsd} stock={product.stock} />}
                <Link href={`/contact?product=${slug}`} className="btn-primary">Get Quote</Link>
                <a href={`${CONTACT.whatsappUrl}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  WhatsApp
                </a>
                <Link href="/pricing" className="btn-outline">MOQ & Lead Time</Link>
              </div>
              <p className="text-xs text-slate-500">{RFQ_COPY.paymentNote}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section className="card-flat">
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">{seed.description}</p>
              </section>

              <section>
                <SubsectionHeader title="Key Specifications" subtitle="Factory parameters for procurement review." />
                <SpecTable specs={seed.specs} />
              </section>

              <section>
                <SubsectionHeader title="Capabilities" />
                <ul className="grid sm:grid-cols-2 gap-3">
                  {seed.features.map((f) => (
                    <li key={f} className="card-flat py-4 text-sm md:text-base text-slate-300">{f}</li>
                  ))}
                </ul>
              </section>

              <section>
                <SubsectionHeader title="Use cases" />
                <ul className="grid sm:grid-cols-2 gap-3">
                  {seed.scenarios.map((s) => (
                    <li key={s} className="text-sm md:text-base text-slate-400 py-3 px-4 border border-[var(--border)] rounded-xl bg-[var(--surface)]">{s}</li>
                  ))}
                </ul>
              </section>

              <section>
                <SubsectionHeader title="Deployment notes" />
                <ul className="param-list">
                  {seed.deploymentNotes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </section>

              <section>
                <SubsectionHeader title="Product FAQ" />
                <FAQAccordion items={seed.faq.map((f) => ({ question: f.q, answer: f.a }))} />
              </section>
            </div>

            <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <section className="card-flat">
                <h3 className="font-bold text-white mb-4">What&apos;s included</h3>
                <ul className="param-list text-sm">
                  {seed.accessories.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </section>
              <section className="card-flat">
                <h3 className="font-bold text-white mb-4">Customization</h3>
                <ul className="param-list text-sm">
                  {seed.customizationOptions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </section>
              <section className="card-flat">
                <h3 className="font-bold text-white mb-4">Warranty & delivery</h3>
                <ul className="param-list text-sm">
                  {seed.delivery.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </section>
              <RfqCTA productSlug={slug} compact />
            </div>
          </div>
        </div>
      </section>

      <ProductStickyCTA slug={slug} />
    </>
  );
}
