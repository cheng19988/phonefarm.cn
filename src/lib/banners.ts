import { IMAGES } from "./images";

export type BannerFit = "cover" | "contain";

export type BannerPreset = {
  src: string;
  fit: BannerFit;
  /** CSS object-position */
  focus?: string;
  /** Slight zoom to crop baked-in white margins (cover only) */
  scale?: number;
};

/** Per-page banner tuning — fit/focus chosen for each asset’s composition */
export const PAGE_BANNERS = {
  /** Full lab scene — no left-side white fade */
  home: {
    src: IMAGES.banners.factory,
    fit: "cover",
    focus: "52% 48%",
    scale: 1.06,
  },
  /** Product marketing art — show entire graphic, no crop */
  products: {
    src: IMAGES.banners.products,
    fit: "contain",
    focus: "center",
  },
  about: {
    src: IMAGES.banners.about,
    fit: "cover",
    focus: "68% 50%",
    scale: 1.12,
  },
  contact: {
    src: IMAGES.banners.contact,
    fit: "cover",
    focus: "78% 50%",
    scale: 1.18,
  },
  services: {
    src: IMAGES.banners.services,
    fit: "cover",
    focus: "62% 50%",
    scale: 1.1,
  },
  packages: {
    src: IMAGES.banners.packages,
    fit: "cover",
    focus: "58% 50%",
    scale: 1.08,
  },
  pricing: {
    src: IMAGES.banners.pricing,
    fit: "cover",
    focus: "75% 50%",
    scale: 1.15,
  },
  faq: {
    src: IMAGES.banners.factory,
    fit: "cover",
    focus: "50% 45%",
    scale: 1.06,
  },
  blog: {
    src: IMAGES.banners.blog,
    fit: "cover",
    focus: "55% 50%",
    scale: 1.08,
  },
  manual: {
    src: IMAGES.banners.manual,
    fit: "cover",
    focus: "55% 50%",
    scale: 1.08,
  },
  legal: {
    src: IMAGES.banners.about,
    fit: "cover",
    focus: "65% 50%",
    scale: 1.1,
  },
} as const satisfies Record<string, BannerPreset>;

export function heroProps(key: keyof typeof PAGE_BANNERS) {
  const b = PAGE_BANNERS[key];
  return {
    banner: b.src,
    fit: b.fit,
    focus: b.focus,
    scale: "scale" in b ? b.scale : undefined,
  };
}

export function bannerProps(key: keyof typeof PAGE_BANNERS) {
  const b = PAGE_BANNERS[key];
  return {
    image: b.src,
    fit: b.fit,
    imagePosition: b.focus,
    scale: "scale" in b ? b.scale : undefined,
  };
}
