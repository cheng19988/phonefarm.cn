import { ensureDatabase } from "@/lib/ensure-db";
import { prisma } from "@/lib/prisma";
import { PRODUCT_SEEDS } from "@/data/products";

export type CatalogProduct = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  priceUsd: number;
  stock: number;
  published: boolean;
  imageCard: string;
  imageHero: string;
  imageDetail: string;
};

function seedToCatalogProduct(seed: (typeof PRODUCT_SEEDS)[number], index: number): CatalogProduct {
  return {
    id: `seed-${seed.slug}`,
    slug: seed.slug,
    name: seed.name,
    category: seed.category,
    shortDesc: seed.shortDesc,
    description: seed.description,
    priceUsd: seed.priceUsd,
    stock: seed.stock,
    published: true,
    imageCard: seed.imageCard,
    imageHero: seed.imageHero,
    imageDetail: seed.imageDetail,
  };
}

/** Load catalog from DB; fall back to static seeds if SQLite init fails (cold start). */
export async function loadPublishedProducts(): Promise<CatalogProduct[]> {
  try {
    await ensureDatabase();
    const rows = await prisma.product.findMany({
      where: { published: true },
      orderBy: { name: "asc" },
    });
    if (rows.length > 0) return rows;
  } catch (error) {
    console.error("[catalog] database unavailable, using static seed fallback:", error);
  }
  return PRODUCT_SEEDS.map(seedToCatalogProduct);
}

export async function loadProductBySlug(slug: string): Promise<CatalogProduct | null> {
  try {
    await ensureDatabase();
    const row = await prisma.product.findUnique({ where: { slug } });
    if (row?.published) return row;
  } catch (error) {
    console.error("[catalog] loadProductBySlug fallback:", error);
  }
  const seed = PRODUCT_SEEDS.find((s) => s.slug === slug);
  return seed ? seedToCatalogProduct(seed, 0) : null;
}
