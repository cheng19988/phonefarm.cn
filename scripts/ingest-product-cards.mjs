/**
 * Copy product card/hero images from user Desktop folder (full resolution).
 * Run: npm run ingest:product-cards
 */
import fs from "node:fs";
import path from "node:path";

const SOURCE_DIR = "C:\\Users\\cdl30\\Desktop\\新建文件夹";
const root = process.cwd();
const cardDir = path.join(root, "public", "images", "card");
const heroDir = path.join(root, "public", "images", "hero");

/** slug-related card + hero pairs from Desktop originals */
const PRODUCT_IMAGES = [
  {
    card: "motherboard-box-card.png",
    hero: "motherboard-box-hero.png",
    src: "f224216c-e806-426d-a64f-a98b0a6da9de.png",
    note: "20-Slot Phone Farm Box",
  },
  {
    card: "phone-farm-box-card.png",
    hero: "phone-farm-box-hero.png",
    src: "8232b49d-7ad4-42d2-971f-67f368b66bbb.png",
    note: "32PCS chassis studio shot",
  },
  {
    card: "phone-array-card.png",
    hero: "phone-array-hero.png",
    src: "1caaec79-c5ac-4bd3-8d20-4c56d511f4c1.png",
    note: "warehouse hardware lineup",
  },
  {
    card: "iphone-farm-card.png",
    hero: "iphone-farm-hero.png",
    src: "952c8939-3bf9-4f18-bb13-5940b26d3f3d.png",
    note: "dense blade racks",
  },
  {
    card: "android-farm-card.png",
    hero: "android-farm-hero.png",
    src: "9a9eff7d-239c-4c8f-8450-6b60592fa0d5.png",
    note: "ops center + racks",
  },
  {
    card: "hardware-accessory-card.png",
    hero: "hardware-accessory-hero.png",
    src: "dd0dcd8b-81fb-48ff-9c67-046da3a7aa11.png",
    note: "chassis components layout",
  },
];

if (!fs.existsSync(SOURCE_DIR)) {
  console.error(`Source folder not found: ${SOURCE_DIR}`);
  process.exit(1);
}

fs.mkdirSync(cardDir, { recursive: true });
fs.mkdirSync(heroDir, { recursive: true });

for (const item of PRODUCT_IMAGES) {
  const from = path.join(SOURCE_DIR, item.src);
  if (!fs.existsSync(from)) {
    console.error(`✗ missing ${item.src}`);
    continue;
  }
  fs.copyFileSync(from, path.join(cardDir, item.card));
  fs.copyFileSync(from, path.join(heroDir, item.hero));
  const kb = Math.round(fs.statSync(from).size / 1024);
  console.log(`✓ ${item.card} + ${item.hero} ← ${item.src} (${kb}KB) — ${item.note}`);
}

console.log(`\nIngested ${PRODUCT_IMAGES.length} product image set(s).`);
