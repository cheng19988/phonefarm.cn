import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { FAQAccordion } from "@/components/commerce";
import { JsonLd } from "@/components/shared";
import { SpecTable } from "@/components/spec-table";
import { RfqCTA, ProductStickyCTA } from "@/components/rfq-cta";
import { buildMetadata, productJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { getProductSeed } from "@/data/products";
import { CONTACT, RFQ_COPY } from "@/lib/config";

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
  const product = await prisma.product.findUnique({ where: { slug } });
  const seed = getProductSeed(slug);
  if (!product || !seed) notFound();

  const features = seed.features;
  const specs = seed.specs;
  const scenarios = seed.scenarios;
  const included = seed.accessories;
  const warranty = seed.delivery;
  const deploymentNotes = seed.deploymentNotes;
  const customization = seed.customizationOptions;
  const faq = seed.faq;

  const waText = encodeURIComponent(`Hi, RFQ for: ${seed.name}. Quantity and config to follow.`);

  return (
    <>
      <JsonLd
        data={[
          productJsonLd({
            name: seed.name,
            description: seed.shortDesc,
            slug: seed.slug,
            priceUsd: 0,
            stock: 1,
            image: seed.imageHero,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: seed.name, path: `/products/${slug}` },
          ]),
        ]}
      />

      <div className="section pb-24 md:pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="relative aspect-square rounded-md overflow-hidden border border-[var(--border)] bg-[#141c28]">
              <Image src={product.imageDetail} alt={seed.name} fill className="object-cover" priority />
            </div>
            <div>
              <p className="text-blue-400 text-xs mb-2">{seed.category}</p>
              <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3">{seed.name}</h1>
              <p className="text-slate-300 text-sm mb-4">{seed.shortDesc}</p>
              <p className="text-slate-400 text-sm mb-4">
                <span className="text-slate-500">For: </span>{seed.targetBuyer}
              </p>
              <ul className="param-list mb-4">
                {seed.keyParams.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="text-sm text-blue-400/90 mb-6">{RFQ_COPY.pricingNote}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Link href={`/contact?product=${slug}`} className="btn-primary">Get Quote</Link>
                <a href={`${CONTACT.whatsappUrl}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  WhatsApp Inquiry
                </a>
                <Link href="/manual" className="btn-secondary">Manual</Link>
              </div>
              <p className="text-xs text-slate-500">{RFQ_COPY.paymentNote}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Overview</h2>
                <p className="text-slate-300 text-sm leading-relaxed">{seed.description}</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Key Specifications</h2>
                <SpecTable specs={specs} />
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Capabilities</h2>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="text-sm text-slate-300 flex gap-2">
                      <span className="text-blue-400 shrink-0">-</span>{f}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">What This Product Is For</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {scenarios.map((s) => (
                    <li key={s} className="text-sm text-slate-400 py-2 px-3 border border-[var(--border)] rounded-md">{s}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Deployment Notes</h2>
                <ul className="space-y-2">
                  {deploymentNotes.map((n) => (
                    <li key={n} className="text-sm text-slate-400">{n}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-white mb-3">Product FAQ</h2>
                <FAQAccordion items={faq.map((f) => ({ question: f.q, answer: f.a }))} />
              </section>
            </div>

            <div className="space-y-6">
              <section className="card-flat">
                <h3 className="font-medium text-white text-sm mb-3">What Is Included</h3>
                <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside">
                  {included.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </section>

              <section className="card-flat">
                <h3 className="font-medium text-white text-sm mb-3">Customization Options</h3>
                <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside">
                  {customization.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </section>

              <section className="card-flat">
                <h3 className="font-medium text-white text-sm mb-3">Warranty & Delivery</h3>
                <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside">
                  {warranty.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </section>

              <RfqCTA productSlug={slug} compact />
            </div>
          </div>

          <div className="mt-12">
            <RfqCTA productSlug={slug} title={`RFQ: ${seed.name}`} />
          </div>
        </div>
      </div>

      <ProductStickyCTA slug={slug} />
    </>
  );
}
