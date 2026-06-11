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

/** Per-SKU card/hero from ingest:product-cards ({slug}.png|.jpg in card/) */
function skuImage(slug: string, sub: "card" | "hero", fallback: string): string {
  for (const ext of [".png", ".jpg", ".jpeg", ".webp"]) {
    const file = `${slug}${ext}`;
    if (existing.has(file)) return pub(sub, file);
  }
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
    card: skuImage("phone-farm-box", "card", R.pfFront),
    hero: skuImage("phone-farm-box", "hero", R.pfHero),
    detail: asset(R.pfDetail, pub("real", "phone-farm-box-front.png")),
  },
  motherboardBox: {
    card: skuImage("motherboard-box", "card", R.mbFront),
    hero: skuImage("motherboard-box", "hero", R.mbHero),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  androidFarm: {
    card: skuImage("android-phone-farm", "card", R.pfFront),
    hero: skuImage("android-phone-farm", "hero", R.pfHero),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  iphoneFarm: {
    card: skuImage("iphone-phone-farm", "card", R.iphoneHero),
    hero: skuImage("iphone-phone-farm", "hero", R.iphoneHero),
    detail: asset(R.iphoneHero, pub("hero", "iphone-farm-hero.png")),
  },
  realDevice: {
    card: skuImage("phone-array-12pcs", "card", R.arrayHero),
    hero: skuImage("phone-array-12pcs", "hero", R.arrayHero),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  emptyBox: {
    card: skuImage("empty-box-chassis", "card", R.mbInside),
    hero: skuImage("empty-box-chassis", "hero", R.mbInside),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  usbHub: {
    card: skuImage("usb-hub", "card", R.deck1),
    hero: skuImage("usb-hub", "hero", R.deck1),
    detail: asset(R.deck2, R.deck2),
  },
  power: {
    card: skuImage("power-supply-solution", "card", R.mbInside),
    hero: skuImage("power-supply-solution", "hero", R.mbInside),
    detail: asset(R.factoryPacking, R.factoryPacking),
  },
  cooling: {
    card: skuImage("cooling-solution", "card", R.factoryQc),
    hero: skuImage("cooling-solution", "hero", R.factoryQc),
    detail: asset(R.factoryQc, R.factoryQc),
  },
  network: {
    card: skuImage("network-equipment", "card", R.deck2),
    hero: skuImage("network-equipment", "hero", R.deck2),
    detail: asset(R.deck2, R.deck2),
  },
  customCabinet: {
    card: skuImage("custom-cabinet", "card", pub("factory", "gallery-01.png")),
    hero: skuImage("custom-cabinet", "hero", pub("factory", "gallery-01.png")),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  remoteControl: {
    card: skuImage("remote-control-setup", "card", R.deck1),
    hero: skuImage("remote-control-setup", "hero", R.deck1),
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

/** Resolve card image for any product slug (used on catalog page). */
export function getProductCardImage(slug: string): string {
  const bySlug: Record<string, string> = {
    "motherboard-box": IMAGES.motherboardBox.card,
    "phone-farm-box": IMAGES.phoneFarmBox.card,
    "phone-array-12pcs": IMAGES.realDevice.card,
    "iphone-phone-farm": IMAGES.iphoneFarm.card,
    "android-phone-farm": IMAGES.androidFarm.card,
    "real-device-phone-farm": skuImage("real-device-phone-farm", "card", IMAGES.androidFarm.card),
    "empty-box-chassis": IMAGES.emptyBox.card,
    "usb-hub": IMAGES.usbHub.card,
    "power-supply-solution": IMAGES.power.card,
    "cooling-solution": IMAGES.cooling.card,
    "network-equipment": IMAGES.network.card,
    "ikuai-enterprise-switch": IMAGES.network.card,
    "custom-cabinet": IMAGES.customCabinet.card,
    "remote-control-setup": IMAGES.remoteControl.card,
  };
  return bySlug[slug] ?? IMAGES.motherboardBox.card;
}

export const HAS_REAL_IMAGES = existing.size > 0;

export function getProductGallery(slug: string): string[] {
  const extra = FACTORY_GALLERY.slice(0, 3);
  const map: Record<string, string[]> = {
    "motherboard-box": [IMAGES.motherboardBox.hero, IMAGES.motherboardBox.detail, IMAGES.motherboardBox.card, ...extra],
    "phone-farm-box": [IMAGES.phoneFarmBox.hero, IMAGES.phoneFarmBox.detail, IMAGES.phoneFarmBox.card, IMAGES.qc],
    "phone-array-12pcs": [IMAGES.realDevice.hero, IMAGES.realDevice.detail, IMAGES.motherboardBox.detail],
    "iphone-phone-farm": [IMAGES.iphoneFarm.hero, IMAGES.iphoneFarm.detail, IMAGES.phoneFarmBox.card],
    "android-phone-farm": [IMAGES.androidFarm.hero, IMAGES.phoneFarmBox.hero, IMAGES.motherboardBox.detail],
    "real-device-phone-farm": [IMAGES.androidFarm.hero, IMAGES.realDevice.hero, IMAGES.phoneFarmBox.detail, IMAGES.qc],
    "empty-box-chassis": [IMAGES.emptyBox.hero, IMAGES.motherboardBox.detail, IMAGES.motherboardBox.card],
    "usb-hub": [IMAGES.usbHub.hero, IMAGES.deck.slide1, IMAGES.deck.slide2, IMAGES.qc],
    "power-supply-solution": [IMAGES.power.hero, IMAGES.factory, IMAGES.qc],
    "cooling-solution": [IMAGES.cooling.hero, IMAGES.qc, IMAGES.phoneFarmBox.hero],
    "network-equipment": [IMAGES.network.hero, IMAGES.deck.slide2, IMAGES.deck.slide1],
    "ikuai-enterprise-switch": [IMAGES.network.hero, IMAGES.deck.slide2, IMAGES.deck.slide1],
    "custom-cabinet": [IMAGES.customCabinet.hero, IMAGES.companyWorkshop, IMAGES.companyWarehouse],
    "remote-control-setup": [IMAGES.remoteControl.hero, IMAGES.deck.slide1, IMAGES.deck.slide2],
  };
  const imgs = map[slug] ?? [IMAGES.motherboardBox.hero, IMAGES.motherboardBox.detail, IMAGES.qc];
  return [...new Set(imgs.filter(Boolean))].slice(0, 6);
}
