import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config";
import { BLOG_POSTS } from "@/data/blog";
import { PRODUCT_SEEDS } from "@/data/products";

/** Paths that must never appear in the public sitemap. */
const SITEMAP_EXCLUDED_PREFIXES = ["/admin", "/api", "/account", "/orders", "/login", "/register"];

/** OEM / internal SKUs — RFQ-only, kept out of sitemap to focus crawl budget on buyer SKUs. */
const SITEMAP_EXCLUDED_PRODUCT_SLUGS = new Set([
  "android-phone-farm",
  "real-device-phone-farm",
  "empty-box-chassis",
  "remote-control-setup",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");

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
    "/phone-farm-knowledge-base",
    "/privacy",
    "/terms",
  ]
    .filter((path) => !SITEMAP_EXCLUDED_PREFIXES.some((p) => path.startsWith(p)))
    .map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : path === "/manual" ? 0.95 : 0.8,
    }));

  const productPages = PRODUCT_SEEDS.filter((p) => !SITEMAP_EXCLUDED_PRODUCT_SLUGS.has(p.slug)).map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p.priceUsd > 0 ? 0.9 : 0.75,
  }));

  const blogPages = BLOG_POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
