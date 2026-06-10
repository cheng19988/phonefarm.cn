/**
 * Copy user-provided banner originals at full resolution (no resize/compress).
 * Source: C:\Users\cdl30\Desktop\新建文件夹
 * Run: npm run ingest:banners
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "public", "images", "banner");

/** User folder — chat uploads are NOT used */
const SOURCE_DIR = "C:\\Users\\cdl30\\Desktop\\新建文件夹";

/**
 * Fixed slot → source file mapping (do not auto-pick from other folders).
 * Picked by content fit + aspect ratio; 2 spare files in folder are intentionally unused.
 */
const BANNER_MAP = [
  {
    dest: "banner-home.png",
    src: "f27e34c8-504a-49a8-873e-79362ba65b87.png",
    note: "home hero — dashboard + hardware, left fade for title",
  },
  {
    dest: "banner-products.png",
    src: "dd0dcd8b-81fb-48ff-9c67-046da3a7aa11.png",
    note: "products — wide hardware lineup (cover banner)",
  },
  {
    dest: "banner-about.png",
    src: "546b692f-eb6f-4fc4-9f98-b26c37d7ddb6.png",
    note: "about — showroom panorama",
  },
  {
    dest: "banner-contact.png",
    src: "60856b25-cddf-405e-bf68-be9555a60092.png",
    note: "contact — ultra-wide, white space on left",
  },
  {
    dest: "banner-services.png",
    src: "9a9eff7d-239c-4c8f-8450-6b60592fa0d5.png",
    note: "services — ops center with monitoring screens",
  },
  {
    dest: "banner-packages.png",
    src: "73ad07c8-0be6-456b-9848-c8e26b7ba595.png",
    note: "packages — factory floor + shipping",
  },
  {
    dest: "banner-pricing.png",
    src: "952c8939-3bf9-4f18-bb13-5940b26d3f3d.png",
    note: "pricing — clean product showcase",
  },
  {
    dest: "banner-factory.png",
    src: "1caaec79-c5ac-4bd3-8d20-4c56d511f4c1.png",
    note: "faq — warehouse hardware lineup",
  },
  {
    dest: "banner-blog.png",
    src: "8232b49d-7ad4-42d2-971f-67f368b66bbb.png",
    note: "blog — studio product shot",
  },
  {
    dest: "banner-manual.png",
    src: "3aa9c78c-5764-4aae-aa50-8b2a91179ca7.png",
    note: "manual — setup with control monitors",
  },
];

function readDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf[0] === 0x89 && buf.toString("ascii", 1, 4) === "PNG") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  return null;
}

if (!fs.existsSync(SOURCE_DIR)) {
  console.error(`Source folder not found: ${SOURCE_DIR}`);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

let ok = 0;
for (const { dest, src, note } of BANNER_MAP) {
  const from = path.join(SOURCE_DIR, src);
  const to = path.join(outDir, dest);
  if (!fs.existsSync(from)) {
    console.error(`✗ ${dest} — missing source: ${src}`);
    continue;
  }
  fs.copyFileSync(from, to);
  const dims = readDimensions(to);
  const kb = Math.round(fs.statSync(to).size / 1024);
  console.log(`✓ ${dest} ← ${src} (${dims?.width}×${dims?.height}, ${kb}KB) — ${note}`);
  ok++;
}

console.log(`\nCopied ${ok}/${BANNER_MAP.length} banner(s) at full resolution from Desktop folder.`);
