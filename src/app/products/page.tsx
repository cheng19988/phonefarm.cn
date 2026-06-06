import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/commerce";
import { buildMetadata } from "@/lib/seo";
import { PRODUCT_CATALOG_GROUPS } from "@/lib/config";
import { getProductSeed, getProductBestFor, type CatalogGroup } from "@/data/products";
import { ContactCTA } from "@/components/shared";

export const metadata = buildMetadata({
  title: "Products - Phone Farm Hardware Catalog",
  description:
    "Android motherboard box, 32PCS phone farm box, 12PCS phone array, iPhone farm box, routers, accessories and OEM cabinets. Contact for configuration and bulk quote.",
  path: "/products",
});

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ group?: string }>;
}) {
  const params = await searchParams;
  const groupFilter = params.group as CatalogGroup | undefined;

  const products = await prisma.product.findMany({
    where: { published: true },
    orderBy: { name: "asc" },
  });

  const filtered = groupFilter
    ? products.filter((p) => getProductSeed(p.slug)?.catalogGroup === groupFilter)
    : products;

  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">Products</h1>
        <p className="section-subtitle">
          Phone farm hardware catalog - all pricing is configuration-based. Send RFQ for bulk quote, sample order or OEM scope.
        </p>

        <div className="card-flat mb-8">
          <h2 className="font-medium text-white text-sm mb-3">What to send for a quote</h2>
          <ul className="list-disc list-outside pl-5 text-sm text-slate-400 space-y-1">
            <li>Target quantity (nodes / boxes)</li>
            <li>Product type (motherboard box, 32PCS, array, OEM, etc.)</li>
            <li>Connection mode (USB, OTG/LAN, or not sure)</li>
            <li>Android or iPhone model preference</li>
            <li>Destination country</li>
            <li>Customization needs (ROM, router bundle, cabinet)</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href="/products"
            className={`px-3 py-1 rounded-md text-xs border ${!groupFilter ? "border-blue-600 text-blue-400 bg-blue-950/30" : "border-[var(--border)] text-slate-400"}`}
          >
            All
          </Link>
          {PRODUCT_CATALOG_GROUPS.map((g) => (
            <Link
              key={g.id}
              href={`/products?group=${g.id}`}
              className={`px-3 py-1 rounded-md text-xs border ${groupFilter === g.id ? "border-blue-600 text-blue-400 bg-blue-950/30" : "border-[var(--border)] text-slate-400"}`}
            >
              {g.label}
            </Link>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

        <div className="mt-12">
          <ContactCTA title="Request Bulk Price / OEM Quote" />
        </div>
      </div>
    </div>
  );
}
