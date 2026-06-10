/**
 * Upscale banner PNGs 2× with Lanczos + light sharpen for full-width HD display.
 * Run: node scripts/upscale-banners.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SCALE = 2;
const BANNER_DIR = path.join(process.cwd(), "public", "images", "banner");

async function upscaleFile(filePath) {
  const meta = await sharp(filePath).metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  if (!w || !h) throw new Error(`Invalid image: ${filePath}`);

  const tmp = `${filePath}.upscale.tmp`;
  await sharp(filePath)
    .resize(Math.round(w * SCALE), Math.round(h * SCALE), {
      kernel: sharp.kernel.lanczos3,
      fit: "fill",
    })
    .sharpen({ sigma: 0.65, m1: 1.15, m2: 0.55, x1: 2, y2: 10, y3: 20 })
    .png({ compressionLevel: 6, effort: 10 })
    .toFile(tmp);

  fs.renameSync(tmp, filePath);
  return { name: path.basename(filePath), from: `${w}×${h}`, to: `${w * SCALE}×${h * SCALE}` };
}

const files = fs.readdirSync(BANNER_DIR).filter((f) => f.endsWith(".png")).sort();
console.log(`Upscaling ${files.length} banner(s) at ${SCALE}×…`);

for (const file of files) {
  const result = await upscaleFile(path.join(BANNER_DIR, file));
  console.log(`  ${result.name}: ${result.from} → ${result.to}`);
}

console.log("Done.");
