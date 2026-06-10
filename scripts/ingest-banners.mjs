/**
 * Ingest full-resolution banner images from local asset folders (no resize/compress).
 * Run: npm run ingest:banners
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "public", "images", "banner");

const SOURCE_DIRS = [
  "E:\\宣传资料主板机照片",
  "E:\\主板机照片素材",
  "E:\\主板机照片素材\\水印\\演示文稿",
  "D:\\产品商品详情图",
];

/** Banner slot → pick rules (keywords in path/filename, min width) */
const BANNER_RULES = [
  {
    dest: "banner-products.png",
    minWidth: 1600,
    minRatio: 1.2,
    keywords: ["product", "box-phone", "phone-farm", "phone_farm", "20-slot", "20slot", "主板", "整机", "generasi", "gallery"],
  },
  {
    dest: "banner-factory.png",
    minWidth: 1600,
    minRatio: 1.3,
    keywords: ["factory", "workshop", "assembly", "0571", "0570", "0547", "IMG_057", "lab", "车间", "工厂"],
  },
  {
    dest: "banner-home.png",
    minWidth: 1600,
    minRatio: 1.3,
    keywords: ["0571", "0570", "0547", "monitor", "dashboard", "lab", "workshop", "hero", "banner"],
  },
  {
    dest: "banner-about.png",
    minWidth: 1600,
    minRatio: 1.3,
    keywords: ["showroom", "gallery", "office", "0312", "0310", "公司", "展厅"],
  },
  {
    dest: "banner-contact.png",
    minWidth: 1600,
    minRatio: 1.3,
    keywords: ["contact", "office", "team", "0547", "0571"],
  },
  {
    dest: "banner-services.png",
    minWidth: 1600,
    minRatio: 1.55,
    keywords: ["slide", "0571", "0570", "0547", "deck", "演示", "factory", "workshop"],
  },
  {
    dest: "banner-packages.png",
    minWidth: 1600,
    minRatio: 1.3,
    keywords: ["package", "solution", "0571", "0570", "slide"],
  },
  {
    dest: "banner-pricing.png",
    minWidth: 1600,
    minRatio: 1.3,
    keywords: ["price", "quote", "slide", "1920"],
  },
  {
    dest: "banner-blog.png",
    minWidth: 1600,
    minRatio: 1.3,
    keywords: ["slide", "manual", "guide", "deck"],
  },
  {
    dest: "banner-manual.png",
    minWidth: 1600,
    minRatio: 1.55,
    keywords: ["0579", "0580", "0581", "USB", "OTG", "slide", "manual", "setup"],
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
    if (st.isDirectory()) {
      if (/微信截图|微信图片/i.test(full)) continue;
      walkImages(full, acc);
    } else if (/\.(jpe?g|png|webp)$/i.test(name)) {
      acc.push({ full, name, size: st.size, dir });
    }
  }
  return acc;
}

/** Read PNG/JPEG dimensions from header — no deps */
function readDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  // PNG
  if (buf[0] === 0x89 && buf.toString("ascii", 1, 4) === "PNG") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  // JPEG
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) break;
      const marker = buf[i + 1];
      const len = buf.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8) {
        return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      }
      i += 2 + len;
    }
  }
  return null;
}

function score(file, keywords) {
  const hay = `${file.name} ${file.dir}`.toLowerCase();
  let s = 0;
  for (const kw of keywords) {
    if (hay.includes(kw.toLowerCase())) s += 12;
  }
  s += Math.min(file.size / 100000, 8);
  if (file.dims) {
    s += Math.min(file.dims.width / 400, 10);
    const ratio = file.dims.width / file.dims.height;
    if (ratio >= 1.4 && ratio <= 2.8) s += 5;
  }
  return s;
}

function pickBest(pool, rule) {
  const candidates = pool.filter((f) => {
    if (!f.dims) return false;
    const ratio = f.dims.width / f.dims.height;
    return f.dims.width >= rule.minWidth && ratio >= rule.minRatio;
  });
  if (!candidates.length) return null;
  return candidates
    .map((f) => ({ f, s: score(f, rule.keywords) }))
    .sort((a, b) => b.s - a.s)[0]?.f ?? null;
}

function copyBinary(src, destName) {
  const dest = path.join(outDir, destName);
  fs.copyFileSync(src, dest);
  const dims = readDimensions(dest);
  const kb = Math.round(fs.statSync(dest).size / 1024);
  return { dest: destName, dims, kb, src };
}

fs.mkdirSync(outDir, { recursive: true });

const pool = [];
for (const dir of SOURCE_DIRS) {
  for (const f of walkImages(dir)) {
    const dims = readDimensions(f.full);
    if (dims) pool.push({ ...f, dims });
  }
}

console.log(`Scanned ${pool.length} images from local folders`);
const hdWide = pool.filter((f) => f.dims.width >= 1600 && f.dims.width / f.dims.height >= 1.3);
console.log(`  ${hdWide.length} are HD wide (≥1600px, ratio≥1.3)`);

const used = new Set();
const results = [];

for (const rule of BANNER_RULES) {
  const available = pool.filter((f) => !used.has(f.full));
  const pick = pickBest(available, rule);
  if (pick) {
    used.add(pick.full);
    const r = copyBinary(pick.full, rule.dest);
    results.push(r);
    console.log(`✓ ${rule.dest} ← ${path.basename(pick.full)} (${r.dims.width}×${r.dims.height}, ${r.kb}KB)`);
  } else {
    console.log(`⚠ ${rule.dest} — no HD match, keeping existing file`);
  }
}

// Fill any missing slots with best remaining HD wides
for (const rule of BANNER_RULES) {
  const dest = path.join(outDir, rule.dest);
  if (results.some((r) => r.dest === rule.dest)) continue;
  const remaining = hdWide.filter((f) => !used.has(f.full)).sort((a, b) => b.dims.width - a.dims.width);
  const pick = remaining[0];
  if (pick) {
    used.add(pick.full);
    const r = copyBinary(pick.full, rule.dest);
    results.push(r);
    console.log(`↪ ${rule.dest} ← fallback ${path.basename(pick.full)} (${r.dims.width}×${r.dims.height})`);
  }
}

console.log(`\nIngested ${results.length} banner(s) at full resolution (no compression).`);
