import Link from "next/link";
import { ensureDatabase } from "@/lib/ensure-db";
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/commerce";
import { ContactCTA, JsonLd } from "@/components/shared";
import { PageBanner, SubsectionHeader } from "@/components/site-sections";
import { buildMetadata, productCatalogJsonLd } from "@/lib/seo";
import { PRODUCT_CATALOG_GROUPS } from "@/lib/config";
import { getProductSeed, getProductBestFor, type CatalogGroup } from "@/data/products";
import { bannerProps } from "@/lib/banners";
import { getProductCardImage } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Products — Phone Farm Hardware Catalog",
  description:
    "Android motherboard box, 32PCS phone farm box, 12PCS phone array, iPhone farm box, routers, accessories and OEM cabinets.",
  path: "/products",
});

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ group?: string }>;
}) {
  const params = await searchParams;
  const groupFilter = params.group as CatalogGroup | undefined;

  await ensureDatabase();

  const products = await prisma.product.findMany({
    where: { published: true },
    orderBy: { name: "asc" },
  });

  const filtered = groupFilter
    ? products.filter((p) => getProductSeed(p.slug)?.catalogGroup === groupFilter)
    : products;

  return (
    <>
      <JsonLd data={productCatalogJsonLd()} />
      <PageBanner
        title="Hardware Catalog"
        subtitle="Factory-configured phone farm chassis, motherboard clusters, and lab accessories — every SKU quoted per your configuration."
        {...bannerProps("products")}
      />

      <section className="section">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 md:gap-4 mb-14 md:mb-16">
            <Link
              href="/products"
              className={`px-5 py-3 rounded-full text-sm md:text-base font-semibold border min-h-[48px] flex items-center transition-all ${
                !groupFilter ? "border-cyan-500 text-cyan-200 bg-cyan-500/15 shadow-md shadow-cyan-500/20" : "border-[var(--border)] text-slate-400 hover:text-white hover:border-cyan-500/40"
              }`}
            >
              All products
            </Link>
            {PRODUCT_CATALOG_GROUPS.map((g) => (
              <Link
                key={g.id}
                href={`/products?group=${g.id}`}
                className={`px-5 py-3 rounded-full text-sm md:text-base font-semibold border min-h-[48px] flex items-center transition-all ${
                  groupFilter === g.id ? "border-cyan-500 text-cyan-200 bg-cyan-500/15 shadow-md shadow-cyan-500/20" : "border-[var(--border)] text-slate-400 hover:text-white hover:border-cyan-500/40"
                }`}
              >
                {g.label}
              </Link>
            ))}
          </div>

          <div className="catalog-grid">
            {filtered.map((p) => {
              const seed = getProductSeed(p.slug);
              return (
                <ProductCard
                  key={p.id}
                  slug={p.slug}
                  name={p.name}
                  shortDesc={seed?.shortDesc || p.shortDesc}
                  keyParams={seed?.keyParams || []}
                  bestFor={getProductBestFor(p.slug)}
                  scenario={seed?.targetBuyer || "Contact for configuration"}
                  imageCard={getProductCardImage(p.slug)}
                  category={p.category}
                  priceUsd={p.priceUsd}
                  stock={p.stock}
                />
              );
            })}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="card-flat">
              <SubsectionHeader compact title="Bulk & OEM" subtitle="Multi-box labs and custom cabinets — send quantity, ROM scope, and shipping country." />
              <Link href="/contact" className="btn-primary">Bulk RFQ</Link>
            </div>
            <div className="card-flat">
              <SubsectionHeader compact title="Solution packages" subtitle="Pre-defined bundles for starter labs and enterprise rollouts." />
              <Link href="/packages" className="btn-outline">View Packages</Link>
            </div>
          </div>

          <div className="mt-12">
            <ContactCTA title="Request configuration quote" />
          </div>
        </div>
      </section>
    </>
  );
}
