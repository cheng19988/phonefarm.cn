/**
 * Copy and map local asset folders into public/images for phonefarm.cn.
 * Watermarked / presentation assets are allowed per project policy.
 * Run: npm run ingest:assets
 */
import fs from "fs";
import path from "path";

const root = process.cwd();
const outReal = path.join(root, "public", "images", "real");
const outHero = path.join(root, "public", "images", "hero");
const outCard = path.join(root, "public", "images", "card");
const outFactory = path.join(root, "public", "images", "factory");
const outDeck = path.join(root, "public", "images", "deck");

const SOURCE_DIRS = [
  "E:\\宣传资料主板机照片",
  "E:\\主板机照片素材",
  "E:\\主板机照片素材\\水印\\演示文稿",
  "D:\\产品商品详情图",
];

/** Skip only low-quality chat screenshots — not watermarked deck slides */
const SKIP_PATTERNS = [/微信截图/i, /微信图片/i];

const PICK_RULES = [
  { dest: "motherboard-box-hero.jpg", keywords: ["IMG_0310", "IMG_0308", "0551", "motherboard"], minBytes: 80000 },
  { dest: "motherboard-box-front.jpg", keywords: ["IMG_0312", "IMG_0333", "0332", "0553"], minBytes: 60000 },
  { dest: "motherboard-box-inside.jpg", keywords: ["IMG_0159", "inside", "0311", "0579"], minBytes: 50000 },
  { dest: "phone-farm-box-hero.jpg", keywords: ["phone-farm", "32", "0551", "0553", "A908", "S8"], minBytes: 60000 },
  { dest: "phone-farm-box-front.png", keywords: ["phone-farm", "box-phone", "A908", "S8", "0551"], minBytes: 200000 },
  { dest: "phone-array-hero.jpg", keywords: ["12", "array", "drawer", "0556", "0579"], minBytes: 50000 },
  { dest: "iphone-farm-hero.jpg", keywords: ["iphone", "ios", "0579"], minBytes: 50000 },
  { dest: "factory-workshop.jpg", keywords: ["workshop", "assembly", "0312", "0311"], minBytes: 80000 },
  { dest: "factory-packing.jpg", keywords: ["pack", "export", "721a7543"], minBytes: 50000 },
  { dest: "factory-qc.png", keywords: ["qc", "test", "bench", "S8", "0333"], minBytes: 200000 },
  { dest: "deck-slide-1.png", keywords: ["slide", "演示", "ppt", "0551"], minBytes: 100000, deck: true },
  { dest: "deck-slide-2.png", keywords: ["slide", "演示", "0553", "0556"], minBytes: 100000, deck: true },
];

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

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
    if (st.isDirectory()) {
      if (SKIP_PATTERNS.some((re) => re.test(full))) continue;
      walkImages(full, acc);
    } else if (/\.(jpe?g|png|webp)$/i.test(name)) {
      acc.push({ full, name, size: st.size, dir });
    }
  }
  return acc;
}

function score(file, keywords) {
  const hay = `${file.name} ${file.dir}`.toLowerCase();
  let s = 0;
  for (const kw of keywords) {
    if (hay.includes(kw.toLowerCase())) s += 10;
  }
  if (/水印|演示/.test(file.dir)) s += 3;
  s += Math.min(file.size / 50000, 5);
  return s;
}

function pickBest(pool, rule) {
  const candidates = pool.filter((f) => f.size >= rule.minBytes);
  if (!candidates.length) return null;
  return candidates
    .map((f) => ({ f, s: score(f, rule.keywords) }))
    .sort((a, b) => b.s - a.s)[0]?.f;
}

function copyTo(destDir, finalName, src) {
  fs.copyFileSync(src, path.join(destDir, finalName));
}

ensureDir(outReal);
ensureDir(outHero);
ensureDir(outCard);
ensureDir(outFactory);
ensureDir(outDeck);

const all = [];
for (const dir of SOURCE_DIRS) {
  const n = walkImages(dir).length;
  walkImages(dir, all);
  console.log(`  scanned ${dir} (${n} images)`);
}

console.log(`Found ${all.length} source images total`);

const used = new Set();
const manifest = [];

for (const rule of PICK_RULES) {
  const best = pickBest(all.filter((f) => !used.has(f.full)), rule);
  if (!best) {
    console.warn("  skip (no match):", rule.dest);
    continue;
  }
  used.add(best.full);
  const ext = path.extname(best.name).toLowerCase() || ".jpg";
  const base = rule.dest.replace(/\.[^.]+$/, "");
  const finalName = base + ext;
  const targetReal = rule.deck ? outDeck : outReal;
  copyTo(targetReal, finalName, best.full);
  manifest.push({ dest: (rule.deck ? "deck/" : "real/") + finalName, from: best.full, bytes: best.size });

  if (!rule.deck) {
    if (finalName.includes("hero")) {
      copyTo(outHero, finalName, best.full);
      copyTo(outCard, finalName.replace("hero", "front").replace(/front\.(jpg|png)$/, `front${ext}`), best.full);
    }
    if (finalName.includes("front")) {
      copyTo(outCard, finalName, best.full);
    }
    if (finalName.startsWith("factory-")) {
      copyTo(outFactory, finalName, best.full);
    }
  }
  console.log("  copied:", finalName, "<-", path.basename(best.full));
}

const galleryPool = all
  .filter((f) => !used.has(f.full) && f.size > 80000)
  .sort((a, b) => b.size - a.size);

const galleryCount = 12;
galleryPool.slice(0, galleryCount).forEach((f, i) => {
  used.add(f.full);
  const ext = path.extname(f.name).toLowerCase() || ".jpg";
  const name = `gallery-${String(i + 1).padStart(2, "0")}${ext}`;
  copyTo(outFactory, name, f.full);
  manifest.push({ dest: `factory/${name}`, from: f.full, bytes: f.size });
  console.log("  gallery:", name);
});

fs.writeFileSync(
  path.join(root, "scripts", "ingest-manifest.json"),
  JSON.stringify({ at: new Date().toISOString(), sources: SOURCE_DIRS, picked: manifest }, null, 2)
);

console.log("Done. Run npm run build to refresh real-images-manifest.json");
