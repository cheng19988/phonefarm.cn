import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/commerce";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "产品中心 - 手机农场整机盒与主板盒",
  description:
    "广州手机农场产品：主板盒、32PCS 整机盒、12PCS 阵列、iPhone 农场盒、网络路由器、USB Hub、电源散热及定制机柜。工厂直销，价格与库存实时展示。",
  path: "/products",
});

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string; category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category;
  const sortQuery = (extra: Record<string, string>) => {
    const q = new URLSearchParams();
    if (category) q.set("category", category);
    Object.entries(extra).forEach(([k, v]) => q.set(k, v));
    const s = q.toString();
    return s ? `/products?${s}` : "/products";
  };
  const orderBy =
    params.sort === "price-desc"
      ? { priceUsd: "desc" as const }
      : params.sort === "price-asc"
        ? { priceUsd: "asc" as const }
        : { name: "asc" as const };

  const products = await prisma.product.findMany({
    where: {
      published: true,
      ...(category ? { category } : {}),
    },
    orderBy,
  });

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">产品中心</h1>
        <p className="section-subtitle">
          广州手机农场工厂直销真机硬件 — 价格 USD 展示，现货 3-5 个工作日发货。支持批量采购与 OEM 定制。
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <Link href="/products" className={`px-3 py-1 rounded-full text-sm border ${!category ? "border-emerald-600 text-emerald-400" : "border-slate-700 text-slate-400"}`}>
            全部
          </Link>
          {categories.map((cat) => (
            <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`} className={`px-3 py-1 rounded-full text-sm border ${category === cat ? "border-emerald-600 text-emerald-400" : "border-slate-700 text-slate-400"}`}>
              {cat}
            </Link>
          ))}
        </div>

        <div className="flex gap-3 mb-8 text-sm">
          <span className="text-slate-500">排序：</span>
          <Link href={sortQuery({ sort: "price-asc" })} className="text-slate-400 hover:text-white">价格从低到高</Link>
          <Link href={sortQuery({ sort: "price-desc" })} className="text-slate-400 hover:text-white">价格从高到低</Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} slug={p.slug} name={p.name} shortDesc={p.shortDesc} priceUsd={p.priceUsd} stock={p.stock} imageCard={p.imageCard} category={p.category} />
          ))}
        </div>
      </div>
    </div>
  );
}
