/**
 * Site image map — ingested assets under public/images/{real,factory,deck,hero,card}.
 */
import realImageManifest from "./real-images-manifest.json";

const existing = new Set<string>(realImageManifest as string[]);

/** Static paths committed under public/images — always safe to serve */
const STATIC_IMAGE = /^\/images\/(factory|deck|card|hero|real|banner)\//;

function pub(sub: string, file: string): string {
  return `/images/${sub}/${file}`;
}

function asset(primary: string, fallback: string): string {
  const name = primary.split("/").pop() ?? "";
  if (existing.has(name) || STATIC_IMAGE.test(primary)) return primary;
  return fallback;
}

const PLACEHOLDER = {
  card: pub("card", "motherboard-box-front.jpg"),
  hero: pub("hero", "motherboard-box-hero.jpg"),
  detail: pub("real", "motherboard-box-inside.jpg"),
};

const R = {
  mbHero: pub("real", "motherboard-box-hero.jpg"),
  mbFront: pub("real", "motherboard-box-front.jpg"),
  mbInside: pub("real", "motherboard-box-inside.jpg"),
  pfHero: pub("real", "phone-farm-box-hero.png"),
  pfFront: pub("real", "phone-farm-box-front.png"),
  pfDetail: pub("real", "phone-farm-box-front.png"),
  arrayHero: pub("real", "phone-array-hero.png"),
  iphoneHero: pub("real", "iphone-farm-hero.png"),
  factoryWorkshop: pub("factory", "factory-workshop.jpg"),
  factoryPacking: pub("factory", "factory-packing.jpg"),
  factoryQc: pub("real", "factory-qc.png"),
  deck1: pub("deck", "deck-slide-1.png"),
  deck2: pub("deck", "deck-slide-2.png"),
};

const GALLERY_FILES = [
  "factory-workshop.jpg",
  "factory-packing.jpg",
  "gallery-01.png",
  "gallery-02.png",
  "gallery-03.png",
  "gallery-04.jpg",
  "gallery-05.jpg",
  "gallery-06.jpg",
  "gallery-07.jpg",
  "gallery-08.png",
  "gallery-09.jpg",
  "gallery-10.jpg",
];

export const FACTORY_GALLERY = GALLERY_FILES.map((f) => pub("factory", f));

export const IMAGES = {
  banners: {
    home: pub("banner", "banner-home.png"),
    products: pub("banner", "banner-products.png"),
    about: pub("banner", "banner-about.png"),
    contact: pub("banner", "banner-contact.png"),
    services: pub("banner", "banner-services.png"),
    packages: pub("banner", "banner-packages.png"),
    pricing: pub("banner", "banner-pricing.png"),
    factory: pub("banner", "banner-factory.png"),
    blog: pub("banner", "banner-blog.png"),
    manual: pub("banner", "banner-manual.png"),
  },
  phoneFarmBox: {
    card: asset(pub("card", "phone-farm-box-card.png"), R.pfFront),
    hero: asset(pub("hero", "phone-farm-box-hero.png"), R.pfHero),
    detail: asset(R.pfDetail, pub("real", "phone-farm-box-front.png")),
  },
  motherboardBox: {
    card: asset(pub("card", "motherboard-box-card.png"), R.mbFront),
    hero: asset(R.mbHero, R.mbFront),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  androidFarm: {
    card: asset(pub("card", "android-farm-card.png"), pub("card", "phone-farm-box-front.png")),
    hero: asset(pub("hero", "android-farm-hero.png"), pub("hero", "phone-array-hero.png")),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  iphoneFarm: {
    card: asset(pub("card", "iphone-farm-card.png"), pub("card", "iphone-farm-front.png")),
    hero: asset(pub("hero", "iphone-farm-hero.png"), pub("hero", "iphone-farm-hero.png")),
    detail: asset(R.iphoneHero, pub("hero", "iphone-farm-hero.png")),
  },
  realDevice: {
    card: asset(pub("card", "phone-array-card.png"), pub("card", "phone-array-front.png")),
    hero: asset(pub("hero", "phone-array-hero.png"), pub("hero", "phone-array-hero.png")),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  emptyBox: {
    card: asset(pub("card", "hardware-accessory-card.png"), PLACEHOLDER.detail),
    hero: asset(pub("hero", "hardware-accessory-hero.png"), PLACEHOLDER.detail),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  usbHub: {
    card: asset(pub("card", "hardware-accessory-card.png"), PLACEHOLDER.card),
    hero: asset(pub("hero", "hardware-accessory-hero.png"), R.deck1),
    detail: asset(R.deck2, R.deck2),
  },
  power: {
    card: asset(pub("card", "hardware-accessory-card.png"), PLACEHOLDER.card),
    hero: asset(pub("hero", "hardware-accessory-hero.png"), R.factoryWorkshop),
    detail: asset(R.factoryPacking, R.factoryPacking),
  },
  cooling: {
    card: asset(pub("card", "hardware-accessory-card.png"), PLACEHOLDER.card),
    hero: asset(pub("hero", "hardware-accessory-hero.png"), R.factoryQc),
    detail: asset(R.factoryQc, R.factoryQc),
  },
  network: {
    card: asset(pub("card", "hardware-accessory-card.png"), PLACEHOLDER.card),
    hero: asset(pub("hero", "hardware-accessory-hero.png"), R.deck1),
    detail: asset(R.deck2, R.deck2),
  },
  customCabinet: {
    card: asset(pub("card", "phone-farm-box-card.png"), pub("card", "phone-farm-box-hero.jpg")),
    hero: asset(pub("hero", "phone-farm-box-hero.png"), pub("hero", "phone-farm-box-hero.png")),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  remoteControl: {
    card: asset(pub("card", "android-farm-card.png"), PLACEHOLDER.card),
    hero: asset(pub("hero", "android-farm-hero.png"), R.deck2),
    detail: asset(R.deck2, R.deck2),
  },
  serviceScene: asset(R.deck1, R.deck1),
  factory: asset(R.factoryWorkshop, R.factoryWorkshop),
  workshop: asset(R.factoryWorkshop, R.factoryWorkshop),
  office: asset(pub("factory", "gallery-04.jpg"), pub("factory", "gallery-04.jpg")),
  meeting: asset(pub("factory", "gallery-05.jpg"), pub("factory", "gallery-05.jpg")),
  warehouse: asset(R.factoryPacking, R.factoryPacking),
  companyFront: pub("factory", "gallery-01.png"),
  companyOffice: pub("factory", "gallery-04.jpg"),
  companyMeeting: pub("factory", "gallery-05.jpg"),
  companyWorkshop: R.factoryWorkshop,
  companyWarehouse: R.factoryPacking,
  qc: asset(R.factoryQc, R.factoryQc),
  deck: { slide1: R.deck1, slide2: R.deck2 },
  manual: {
    otgLan: asset(R.deck1, R.deck1),
    motherboardCables: asset(R.mbInside, PLACEHOLDER.detail),
  },
} as const;

export const HAS_REAL_IMAGES = existing.size > 0;

export function getProductGallery(slug: string): string[] {
  const extra = FACTORY_GALLERY.slice(0, 3);
  const map: Record<string, string[]> = {
    "motherboard-box": [IMAGES.motherboardBox.hero, IMAGES.motherboardBox.detail, IMAGES.motherboardBox.card, ...extra],
    "phone-farm-box": [IMAGES.phoneFarmBox.hero, IMAGES.phoneFarmBox.detail, IMAGES.phoneFarmBox.card, IMAGES.qc],
    "phone-array-12pcs": [IMAGES.realDevice.hero, IMAGES.realDevice.detail, IMAGES.motherboardBox.detail],
    "iphone-phone-farm": [IMAGES.iphoneFarm.hero, IMAGES.iphoneFarm.detail, IMAGES.phoneFarmBox.card],
    "android-phone-farm": [IMAGES.phoneFarmBox.hero, IMAGES.androidFarm.hero, IMAGES.motherboardBox.detail],
  };
  const imgs = map[slug] ?? [IMAGES.motherboardBox.hero, IMAGES.motherboardBox.detail, IMAGES.qc];
  return [...new Set(imgs.filter(Boolean))].slice(0, 6);
}
