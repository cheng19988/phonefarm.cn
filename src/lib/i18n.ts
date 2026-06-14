import { SITE } from "./config";

/** English path (no trailing slash; "" = homepage) paired with Chinese /zh path. */
const LOCALE_PATH_PAIRS: [en: string, zh: string][] = [
  ["", "/zh"],
  ["/faq", "/zh/faq"],
  ["/products", "/zh/products"],
  ["/pricing", "/zh/pricing"],
  ["/contact", "/zh/contact"],
  ["/about", "/zh/about"],
  ["/phone-farming", "/zh/phone-farming"],
  ["/products/motherboard-box", "/zh/products/motherboard-box"],
  ["/products/phone-farm-box", "/zh/products/phone-farm-box"],
  ["/products/phone-array-12pcs", "/zh/products/phone-array-12pcs"],
  ["/products/iphone-phone-farm", "/zh/products/iphone-phone-farm"],
];

const ZH_PRODUCT_SLUGS = [
  "motherboard-box",
  "phone-farm-box",
  "phone-array-12pcs",
  "iphone-phone-farm",
] as const;

export type SiteLocale = "en" | "zh-CN";

function normalizePath(path: string): string {
  if (!path || path === "/") return "";
  return path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
}

const PATH_TO_LOCALE = new Map<string, { en: string; zh: string }>();

for (const [en, zh] of LOCALE_PATH_PAIRS) {
  const entry = { en, zh };
  PATH_TO_LOCALE.set(en, entry);
  PATH_TO_LOCALE.set(zh, entry);
}

export function resolveLocalePair(path: string): { en: string; zh: string } | undefined {
  return PATH_TO_LOCALE.get(normalizePath(path));
}

export function pathToUrl(path: string): string {
  const normalized = normalizePath(path);
  return normalized ? `${SITE.url}${normalized}` : SITE.url;
}

/** hreflang alternates for paired pages (Google / Baidu bilingual SEO). */
export function getHreflangAlternates(path: string): Record<string, string> | undefined {
  const pair = resolveLocalePair(path);
  if (!pair) return undefined;
  return {
    en: pathToUrl(pair.en),
    "zh-CN": pathToUrl(pair.zh),
    "x-default": pathToUrl(pair.en),
  };
}

export function localeFromPath(path: string): SiteLocale {
  return normalizePath(path).startsWith("/zh") ? "zh-CN" : "en";
}

export function localeSwitchHref(pathname: string, target: SiteLocale): string {
  const pair = resolveLocalePair(pathname);
  if (target === "zh-CN") return pair?.zh ?? "/zh";
  return pair?.en ?? "/";
}

export function isZhPath(path: string): boolean {
  return localeFromPath(path) === "zh-CN";
}

export { ZH_PRODUCT_SLUGS };
