/**
 * Site image map — ingested assets under public/images/{real,factory,deck,hero,card}.
 */
import realImageManifest from "./real-images-manifest.json";

const existing = new Set<string>(realImageManifest as string[]);

/** Static paths committed under public/images — always safe to serve */
const STATIC_IMAGE = /^\/images\/(factory|deck|card|hero|real)\//;

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
  phoneFarmBox: {
    card: asset(R.pfFront, pub("card", "phone-farm-box-front.png")),
    hero: asset(R.pfHero, pub("hero", "phone-farm-box-hero.png")),
    detail: asset(R.pfDetail, pub("real", "phone-farm-box-front.png")),
  },
  motherboardBox: {
    card: asset(R.mbFront, pub("card", "motherboard-box-front.jpg")),
    hero: asset(R.mbHero, PLACEHOLDER.hero),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  androidFarm: {
    card: asset(R.pfFront, pub("card", "phone-farm-box-front.png")),
    hero: asset(R.arrayHero, pub("hero", "phone-array-hero.png")),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  iphoneFarm: {
    card: asset(R.iphoneHero, pub("card", "iphone-farm-front.png")),
    hero: asset(R.iphoneHero, pub("hero", "iphone-farm-hero.png")),
    detail: asset(R.iphoneHero, pub("hero", "iphone-farm-hero.png")),
  },
  realDevice: {
    card: asset(R.arrayHero, pub("card", "phone-array-front.png")),
    hero: asset(R.arrayHero, pub("hero", "phone-array-hero.png")),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  emptyBox: {
    card: asset(R.mbInside, PLACEHOLDER.detail),
    hero: asset(R.mbInside, PLACEHOLDER.detail),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  usbHub: {
    card: asset(R.deck1, PLACEHOLDER.card),
    hero: asset(R.deck1, R.deck1),
    detail: asset(R.deck2, R.deck2),
  },
  power: {
    card: asset(R.factoryWorkshop, PLACEHOLDER.card),
    hero: asset(R.factoryWorkshop, R.factoryWorkshop),
    detail: asset(R.factoryPacking, R.factoryPacking),
  },
  cooling: {
    card: asset(R.factoryQc, PLACEHOLDER.card),
    hero: asset(R.factoryQc, R.factoryQc),
    detail: asset(R.factoryQc, R.factoryQc),
  },
  network: {
    card: asset(R.pfFront, PLACEHOLDER.card),
    hero: asset(R.deck1, R.deck1),
    detail: asset(R.deck2, R.deck2),
  },
  customCabinet: {
    card: asset(R.pfHero, pub("card", "phone-farm-box-hero.jpg")),
    hero: asset(R.pfHero, pub("hero", "phone-farm-box-hero.png")),
    detail: asset(R.mbInside, PLACEHOLDER.detail),
  },
  remoteControl: {
    card: asset(R.deck1, PLACEHOLDER.card),
    hero: asset(R.deck2, R.deck2),
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
