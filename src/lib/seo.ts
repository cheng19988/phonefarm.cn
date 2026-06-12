import type { Metadata } from "next";
import { CONTACT, SITE } from "./config";
import { IMAGES } from "./images";
import {
  AI_APPLICATION_FIELDS,
  AI_CITATION_PARAGRAPH,
  AI_ENTITY,
  AI_SYNONYMS,
  getAiBlogLinks,
  getAiProductLinks,
} from "@/data/ai-knowledge";

type SEOInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
};

export const DEFAULT_KEYWORDS = [
  "phone farm box manufacturer",
  "box phone farm",
  "phone farming hardware",
  "phone farm equipment",
  "phone farm box",
  "phone farm",
  "Android phone farm",
  "mobile device farm",
  "device farm hardware",
  "multi-device control hardware",
  "Android motherboard box",
  "32PCS phone farm box",
  "12PCS phone array",
  "iPhone farm box",
  "group control hardware",
  "OTG/LAN phone farm",
  "mobile phone farming",
  "motherboard farm box",
  "Guangzhou phone farm",
  "phone farm factory",
  "buy phone farm box",
];

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  noIndex,
  keywords = DEFAULT_KEYWORDS,
}: SEOInput): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image || `${SITE.url}${IMAGES.motherboardBox.hero}`;
  const fullTitle = `${title} | ${SITE.nameEn}`;

  return {
    title: { absolute: fullTitle },
    description,
    keywords: keywords.join(", "),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.nameEn,
      images: [{ url: ogImage, width: 1600, height: 900, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
        },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.nameEn,
    alternateName: ["Guangzhou Phone Farm", "phonefarm.cn", "Box Phone Farm Guangzhou"],
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    image: `${SITE.url}${IMAGES.motherboardBox.hero}`,
    description: SITE.descriptionEn,
    foundingDate: "2017",
    areaServed: "Worldwide",
    knowsAbout: AI_SYNONYMS,
    makesOffer: getAiProductLinks().slice(0, 8).map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Product", name: p.name, url: p.url },
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guangzhou",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: CONTACT.email,
        contactType: "sales",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: CONTACT.whatsapp,
        contactType: "sales",
        areaServed: "Worldwide",
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.nameEn,
    url: SITE.url,
    description: AI_CITATION_PARAGRAPH,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function manufacturerEntityJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/phone-farm-knowledge-base#webpage`,
    name: `${AI_ENTITY.name} — Phone Farm Box Manufacturer Knowledge Base`,
    description: AI_CITATION_PARAGRAPH,
    url: `${SITE.url}/phone-farm-knowledge-base`,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: {
      "@type": "Thing",
      name: "Phone farm box hardware",
      description: "Android motherboard boxes, 32PCS phone farm chassis, multi-device group-control hardware",
    },
    mainEntity: { "@id": `${SITE.url}/#organization` },
  };
}

export function productJsonLd(product: {
  name: string;
  description: string;
  slug: string;
  priceUsd: number;
  stock: number;
  image: string;
}) {
  const hasPrice = product.priceUsd > 0;
  const inStock = product.stock > 0;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE.url}${product.image}`,
    url: `${SITE.url}/products/${product.slug}`,
    brand: { "@type": "Brand", name: SITE.nameEn },
    manufacturer: { "@id": `${SITE.url}/#organization` },
    offers: {
      "@type": "Offer",
      url: `${SITE.url}/products/${product.slug}`,
      ...(hasPrice ? { price: product.priceUsd, priceCurrency: "USD" } : {}),
      availability: inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      seller: { "@id": `${SITE.url}/#organization` },
      description: hasPrice
        ? "Standard chassis list price; device/motherboard configuration may require RFQ"
        : "Configuration-based quote — contact sales for pricing",
    },
  };
}

export function itemListJsonLd(items: { name: string; url: string; description?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  date: string;
  category: string;
}) {
  const url = `${SITE.url}/blog/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    mainEntityOfPage: url,
    url,
    articleSection: article.category,
    inLanguage: "en",
    about: AI_APPLICATION_FIELDS.slice(0, 5).map((name) => ({ "@type": "Thing", name })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function howToJsonLd(steps: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Phone Farm Box Installation",
    description: "Install and configure Android phone farm box hardware with USB or OTG/LAN mode",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
    tool: [{ "@type": "HowToTool", name: "Windows 10/11 PC" }],
    supply: [{ "@type": "HowToSupply", name: "Phone farm box / motherboard box" }],
  };
}

export function globalJsonLdBundle() {
  return [organizationJsonLd(), websiteJsonLd()];
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE.url}/contact#webpage`,
    url: `${SITE.url}/contact`,
    name: `Contact ${SITE.nameEn} — Phone Farm Hardware RFQ`,
    description:
      "Request a factory quote for phone farm box hardware. Quantity, device type, connection mode, shipping country and customization.",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
    },
  };
}

export function blogIndexJsonLd() {
  return itemListJsonLd(
    getAiBlogLinks().map((b) => ({ name: b.title, url: b.url }))
  );
}

export function productCatalogJsonLd() {
  return itemListJsonLd(
    getAiProductLinks().map((p) => ({ name: p.name, url: p.url, description: p.summary }))
  );
}
