import bcrypt from "bcryptjs";
import type { PrismaClient } from "@/generated/prisma/client";
import { PRODUCT_SEEDS } from "@/data/products";

export async function seedDatabase(client: PrismaClient) {
  for (const seed of PRODUCT_SEEDS) {
    await client.product.upsert({
      where: { slug: seed.slug },
      update: {
        name: seed.name,
        category: seed.category,
        shortDesc: seed.shortDesc,
        description: seed.description,
        features: JSON.stringify(seed.features),
        specs: JSON.stringify(seed.specs),
        scenarios: JSON.stringify(seed.scenarios),
        accessories: JSON.stringify(seed.accessories),
        delivery: JSON.stringify(seed.delivery),
        maintenance: JSON.stringify(seed.maintenance),
        faq: JSON.stringify(seed.faq),
        priceUsd: seed.priceUsd,
        stock: seed.stock,
        imageCard: seed.imageCard,
        imageHero: seed.imageHero,
        imageDetail: seed.imageDetail,
      },
      create: {
        slug: seed.slug,
        name: seed.name,
        category: seed.category,
        shortDesc: seed.shortDesc,
        description: seed.description,
        features: JSON.stringify(seed.features),
        specs: JSON.stringify(seed.specs),
        scenarios: JSON.stringify(seed.scenarios),
        accessories: JSON.stringify(seed.accessories),
        delivery: JSON.stringify(seed.delivery),
        maintenance: JSON.stringify(seed.maintenance),
        faq: JSON.stringify(seed.faq),
        priceUsd: seed.priceUsd,
        stock: seed.stock,
        imageCard: seed.imageCard,
        imageHero: seed.imageHero,
        imageDetail: seed.imageDetail,
      },
    });
  }

  const adminEmail = process.env.ADMIN_EMAIL || "admin@phonefarm.cn";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123456";

  await client.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: "Admin",
      role: "admin",
      passwordHash: await bcrypt.hash(adminPassword, 12),
    },
  });
}
