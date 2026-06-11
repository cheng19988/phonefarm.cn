import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config";
import { BLOG_POSTS } from "@/data/blog";
import { PRODUCT_SEEDS } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/products",
    "/packages",
    "/pricing",
    "/manual",
    "/services",
    "/about",
    "/faq",
    "/contact",
    "/blog",
    "/phone-farming",
    "/mobile-phone-farming",
    "/quality-assurance",
    "/privacy",
    "/terms",
  ].map(
    (path) => ({
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : path === "/manual" ? 0.95 : 0.8,
    })
  );

  const productPages = PRODUCT_SEEDS.map((p) => ({
    url: `${SITE.url}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogPages = BLOG_POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
