/**
 * Per-SKU product card images from local product photo library (not banner/marketing folder).
 * Run: npm run ingest:product-cards
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const cardDir = path.join(root, "public", "images", "card");
const heroDir = path.join(root, "public", "images", "hero");

const SOURCE_DIRS = [
  "E:\\宣传资料主板机照片",
  "E:\\主板机照片素材",
  "E:\\主板机照片素材\\水印\\演示文稿",
  "D:\\产品商品详情图",
];

/** slug → pick rules; each product gets a unique real photo */
const PRODUCT_RULES = [
  {
    slug: "motherboard-box",
    keywords: ["IMG_0333", "0333"],
    minBytes: 60000,
    note: "20-node motherboard box front",
  },
  {
    slug: "phone-farm-box",
    keywords: ["s8-change-en_main", "s8_change_en"],
    minBytes: 200000,
    note: "32PCS S8 phone farm box product shot",
  },
  {
    slug: "phone-array-12pcs",
    keywords: ["IMG_0579", "0579"],
    minBytes: 100000,
    note: "12PCS drawer array",
  },
  {
    slug: "iphone-phone-farm",
    keywords: ["IMG_0566", "0566"],
    minBytes: 100000,
    note: "iPhone farm hardware",
  },
  {
    slug: "android-phone-farm",
    keywords: ["a908n-en_main", "A908N"],
    minBytes: 200000,
    note: "A908N android farm box",
  },
  {
    slug: "real-device-phone-farm",
    keywords: ["IMG_0553", "0553"],
    minBytes: 100000,
    note: "Real device deployment photo",
  },
  {
    slug: "empty-box-chassis",
    keywords: ["Structure_of_B", "gallery_6"],
    minBytes: 200000,
    note: "Empty chassis / internal structure",
  },
  {
    slug: "usb-hub",
    keywords: ["幻灯片10", "slide-1", "deck-slide-1"],
    minBytes: 100000,
    note: "USB / connectivity setup slide",
  },
  {
    slug: "power-supply-solution",
    keywords: ["IMG_0159", "0159"],
    minBytes: 50000,
    note: "Internal power / wiring",
  },
  {
    slug: "cooling-solution",
    keywords: ["IMG_0310", "0310"],
    minBytes: 80000,
    note: "Chassis with visible cooling fans",
  },
  {
    slug: "network-equipment",
    keywords: ["幻灯片11", "slide-2", "deck-slide-2", "OTG", "LAN"],
    minBytes: 100000,
    note: "OTG/LAN network setup",
  },
  {
    slug: "custom-cabinet",
    keywords: ["IMG_0551", "0551"],
    minBytes: 500000,
    note: "Large OEM cabinet / rack",
  },
  {
    slug: "remote-control-setup",
    keywords: ["幻灯片10", "0570", "monitor"],
    minBytes: 100000,
    note: "Remote control / monitoring setup",
  },
];

function walkImages(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    let st;
    try {
      st = fs.statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) walkImages(full, acc);
    else if (/\.(jpe?g|png|webp)$/i.test(name)) {
      acc.push({ full, name, size: st.size, hay: `${name} ${full}`.toLowerCase() });
    }
  }
  return acc;
}

function score(file, keywords) {
  let s = 0;
  for (const kw of keywords) {
    if (file.hay.includes(kw.toLowerCase())) s += 12;
  }
  s += Math.min(file.size / 100000, 6);
  return s;
}

function pickBest(pool, rule, used) {
  const candidates = pool.filter(
    (f) => !used.has(f.full) && f.size >= rule.minBytes && score(f, rule.keywords) > 0
  );
  if (!candidates.length) return null;
  return candidates.sort((a, b) => score(b, rule.keywords) - score(a, rule.keywords))[0];
}

fs.mkdirSync(cardDir, { recursive: true });
fs.mkdirSync(heroDir, { recursive: true });

const pool = [];
for (const dir of SOURCE_DIRS) pool.push(...walkImages(dir));
console.log(`Scanned ${pool.length} product photos`);

const used = new Set();
let ok = 0;

for (const rule of PRODUCT_RULES) {
  const pick = pickBest(pool, rule, used);
  if (!pick) {
    console.error(`✗ ${rule.slug} — no match (${rule.note})`);
    continue;
  }
  used.add(pick.full);
  const ext = path.extname(pick.name).toLowerCase() || ".jpg";
  const cardName = `${rule.slug}${ext}`;
  const cardPath = path.join(cardDir, cardName);
  fs.copyFileSync(pick.full, cardPath);
  fs.copyFileSync(pick.full, path.join(heroDir, cardName));
  const kb = Math.round(pick.size / 1024);
  console.log(`✓ ${cardName} ← ${path.basename(pick.full)} (${kb}KB) — ${rule.note}`);
  ok++;
}

console.log(`\nIngested ${ok}/${PRODUCT_RULES.length} SKU card image(s) from product library.`);
