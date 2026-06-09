import Link from "next/link";
import { ensureDatabase } from "@/lib/ensure-db";
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/commerce";
import { ContactCTA } from "@/components/shared";
import { PageBanner, SectionHeader } from "@/components/site-sections";
import { buildMetadata } from "@/lib/seo";
import { PRODUCT_CATALOG_GROUPS } from "@/lib/config";
import { getProductSeed, getProductBestFor, type CatalogGroup } from "@/data/products";
import { IMAGES } from "@/lib/images";

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
      <PageBanner
        title="Hardware Catalog"
        subtitle="Factory-configured phone farm chassis, motherboard clusters, and lab accessories — every SKU quoted per your configuration."
        image={IMAGES.motherboardBox.hero}
      />

      <section className="section">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
            <Link
              href="/products"
              className={`px-4 py-2.5 rounded-lg text-sm font-medium border min-h-[44px] flex items-center ${
                !groupFilter ? "border-amber-500 text-amber-300 bg-amber-500/10" : "border-[var(--border)] text-slate-400 hover:text-white"
              }`}
            >
              All products
            </Link>
            {PRODUCT_CATALOG_GROUPS.map((g) => (
              <Link
                key={g.id}
                href={`/products?group=${g.id}`}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium border min-h-[44px] flex items-center ${
                  groupFilter === g.id ? "border-amber-500 text-amber-300 bg-amber-500/10" : "border-[var(--border)] text-slate-400 hover:text-white"
                }`}
              >
                {g.label}
              </Link>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  imageCard={p.imageCard}
                  category={p.category}
                />
              );
            })}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="card-flat">
              <SectionHeader title="Bulk & OEM" subtitle="Multi-box labs and custom cabinets — send quantity, ROM scope, and shipping country." />
              <Link href="/contact" className="btn-primary">Bulk RFQ</Link>
            </div>
            <div className="card-flat">
              <SectionHeader title="Solution packages" subtitle="Pre-defined bundles for starter labs and enterprise rollouts." />
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
