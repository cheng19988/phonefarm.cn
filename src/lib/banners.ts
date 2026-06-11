import { IMAGES } from "./images";

export type BannerFit = "cover" | "contain";

export type BannerPreset = {
  src: string;
  fit: BannerFit;
  /** CSS object-position */
  focus?: string;
  /** Optional zoom for cover (HD assets default to 1) */
  scale?: number;
};

/** Per-page banner tuning — matched to Desktop 新建文件夹 originals */
export const PAGE_BANNERS = {
  home: {
    src: IMAGES.banners.home,
    fit: "cover",
    focus: "58% 48%",
    scale: 1.04,
  },
  products: {
    src: IMAGES.banners.products,
    fit: "cover",
    focus: "58% 50%",
    scale: 1,
  },
  about: {
    src: IMAGES.banners.about,
    fit: "cover",
    focus: "58% 50%",
    scale: 1,
  },
  contact: {
    src: IMAGES.banners.contact,
    fit: "cover",
    focus: "72% 50%",
    scale: 1,
  },
  services: {
    src: IMAGES.banners.services,
    fit: "cover",
    focus: "55% 48%",
    scale: 1,
  },
  packages: {
    src: IMAGES.banners.packages,
    fit: "cover",
    focus: "50% 45%",
    scale: 1,
  },
  pricing: {
    src: IMAGES.banners.pricing,
    focus: "58% 50%",
    fit: "cover",
    scale: 1,
  },
  faq: {
    src: IMAGES.banners.factory,
    fit: "cover",
    focus: "55% 50%",
    scale: 1,
  },
  blog: {
    src: IMAGES.banners.blog,
    fit: "cover",
    focus: "55% 50%",
    scale: 1,
  },
  manual: {
    src: IMAGES.banners.manual,
    fit: "cover",
    focus: "58% 48%",
    scale: 1,
  },
  legal: {
    src: IMAGES.banners.about,
    fit: "cover",
    focus: "58% 50%",
    scale: 1,
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
