import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const BAD_PATTERNS = [
  { name: "3?5", re: /3\?5/ },
  { name: "60?100", re: /60\?100/ },
  { name: "TRon", re: /TRon TRC20/ },
  { name: "shipping country.Guangzhou", re: /shipping country\.Guangzhou/ },
  { name: "sales ? USDT", re: /sales \? USDT/ },
  { name: "checkout ? quote", re: /checkout \? quote/ },
  { name: "* - / - - Engineering", re: /- - Engineering|- \s*Engineering drawing/ },
  { name: "en-dash U+2013", re: /\u2013/ },
  { name: "em-dash U+2014", re: /\u2014/ },
  { name: "multiplication U+00D7", re: /\u00d7/ },
];

const SCAN_PATHS = [
  "src/data/faq.ts",
  "src/data/services.ts",
  "src/data/manual.ts",
  "src/data/products.ts",
  "src/lib/config.ts",
  "src/components/rfq-cta.tsx",
  "src/components/shared.tsx",
  "public/llms.txt",
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      walk(full, out);
    } else if (entry.name.endsWith(".js") && !entry.name.endsWith(".map")) {
      out.push(full);
    }
  }
  return out;
}

function scanText(label, text) {
  const hits = [];
  for (const { name, re } of BAD_PATTERNS) {
    if (re.test(text)) hits.push(name);
  }
  if (hits.length) console.error(`FAIL ${label}: ${hits.join(", ")}`);
  return hits;
}

let failed = false;

for (const rel of SCAN_PATHS) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) continue;
  const hits = scanText(rel, fs.readFileSync(file, "utf8"));
  if (hits.length) failed = true;
}

const seedDb = path.join(root, "prisma/data/phonefarm-seed.db");
if (fs.existsSync(seedDb)) {
  const hits = scanText("prisma/data/phonefarm-seed.db", fs.readFileSync(seedDb));
  if (hits.length) failed = true;
}

const nextServer = path.join(root, ".next/server");
if (fs.existsSync(nextServer)) {
  for (const file of walk(nextServer)) {
    const text = fs.readFileSync(file, "utf8");
    if (!text.includes("3-5") && !text.includes("FAQ_ITEMS") && !text.includes("Engineering drawing")) continue;
    const hits = scanText(path.relative(root, file), text);
    if (hits.length) failed = true;
  }
}

if (failed) {
  console.error("verify-copy: malformed RFQ copy detected");
  process.exit(1);
}

console.log("verify-copy: OK (no malformed patterns in source, seed, or build chunks)");
