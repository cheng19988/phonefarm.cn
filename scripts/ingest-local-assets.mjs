/**
 * Copy and map local asset folders into public/images for phonefarm.cn.
 * Run: node scripts/ingest-local-assets.mjs
 */
import fs from "fs";
import path from "path";

const root = process.cwd();
const outReal = path.join(root, "public", "images", "real");
const outHero = path.join(root, "public", "images", "hero");
const outCard = path.join(root, "public", "images", "card");
const outFactory = path.join(root, "public", "images", "factory");

const SOURCE_DIRS = [
  "E:\\宣传资料主板机照片",
  "E:\\主板机照片素材",
  "D:\\产品商品详情图",
];

const SKIP_PATTERNS = [/水印/i, /演示文稿/i, /微信截图/i, /微信图片/i];

/** slug -> ordered list of filename keywords to prefer from source files */
const PICK_RULES = [
  { dest: "motherboard-box-hero.jpg", keywords: ["IMG_0310", "IMG_0311", "IMG_0308", "0f5501e1"], minBytes: 80000 },
  { dest: "motherboard-box-front.jpg", keywords: ["IMG_0312", "IMG_0332", "IMG_0333", "photo_2025"], minBytes: 60000 },
  { dest: "motherboard-box-inside.jpg", keywords: ["IMG_0159", "inside", "0310"], minBytes: 50000 },
  { dest: "phone-farm-box-hero.jpg", keywords: ["32", "phone", "0551", "0553", "47327"], minBytes: 60000 },
  { dest: "phone-farm-box-front.jpg", keywords: ["0551", "0553", "farm", "box"], minBytes: 50000 },
  { dest: "factory-workshop.jpg", keywords: ["workshop", "assembly", "0311", "0312"], minBytes: 80000 },
  { dest: "factory-packing.jpg", keywords: ["pack", "export", "721a7543"], minBytes: 50000 },
  { dest: "factory-qc.jpg", keywords: ["test", "bench", "0333"], minBytes: 50000 },
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

ensureDir(outReal);
ensureDir(outHero);
ensureDir(outCard);
ensureDir(outFactory);

const all = [];
for (const dir of SOURCE_DIRS) {
  walkImages(dir, all);
}

console.log(`Found ${all.length} source images across ${SOURCE_DIRS.length} roots`);

const used = new Set();
const manifest = [];

for (const rule of PICK_RULES) {
  const best = pickBest(all.filter((f) => !used.has(f.full)), rule);
  if (!best) {
    console.warn("  skip (no match):", rule.dest);
    continue;
  }
  used.add(best.full);
  const destName = rule.dest.replace(/\.jpg$/i, ".webp").replace(/\.(webp)$/i, ".$1");
  // keep original extension for simplicity
  const ext = path.extname(best.name).toLowerCase() || ".jpg";
  const base = rule.dest.replace(/\.[^.]+$/, "");
  const finalName = base + ext;
  const destPath = path.join(outReal, finalName);
  fs.copyFileSync(best.full, destPath);
  manifest.push({ dest: finalName, from: best.full, bytes: best.size });

  // hero + card copies for key products
  if (finalName.includes("hero")) {
    fs.copyFileSync(best.full, path.join(outHero, finalName));
  }
  if (finalName.includes("front") || finalName.includes("hero")) {
    fs.copyFileSync(best.full, path.join(outCard, finalName));
  }
  if (finalName.startsWith("factory-")) {
    fs.copyFileSync(best.full, path.join(outFactory, finalName));
  }
  console.log("  copied:", finalName, "<-", path.basename(best.full));
}

// fill remaining slots with largest unused photos (factory gallery)
const gallery = all
  .filter((f) => !used.has(f.full) && f.size > 100000)
  .sort((a, b) => b.size - a.size)
  .slice(0, 6);

gallery.forEach((f, i) => {
  const ext = path.extname(f.name).toLowerCase() || ".jpg";
  const name = `gallery-${i + 1}${ext}`;
  fs.copyFileSync(f.full, path.join(outFactory, name));
  manifest.push({ dest: `factory/${name}`, from: f.full, bytes: f.size });
  console.log("  gallery:", name);
});

fs.writeFileSync(
  path.join(root, "scripts", "ingest-manifest.json"),
  JSON.stringify({ at: new Date().toISOString(), picked: manifest }, null, 2)
);

console.log("Done. Run npm run build to refresh real-images-manifest.json");
