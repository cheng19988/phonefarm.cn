# Real Image Replacement Guide (phonefarm.cn)

Upload **authentic** product and workshop photos only.

**Do not:**

- Generate or use AI product/factory images
- Use stock photos that misrepresent your hardware
- Fabricate certificates, client logos, or factory scale you cannot verify

## Upload location

```
public/images/real/
```

Filenames must match exactly (case-sensitive). Use `.webp` when possible.

## Recommended filenames

### Android motherboard box

- `motherboard-box-front.webp`
- `motherboard-box-inside.webp`
- `motherboard-box-cables.webp`
- `motherboard-box-packing.webp`

### 32PCS phone farm box

- `phone-farm-box-32-front.webp`
- `phone-farm-box-32-inside.webp`
- `phone-farm-box-32-testing.webp`
- `phone-farm-box-32-packing.webp`

### 12PCS phone array

- `phone-array-12-front.webp`
- `phone-array-12-drawer.webp`
- `phone-array-12-testing.webp`

### iPhone farm box

- `iphone-farm-box-front.webp`
- `iphone-farm-box-inside.webp`

### Network / router

- `otg-lan-router-setup.webp`
- `switch-network-cabling.webp`

### Factory / workshop (real photos only)

- `workshop-assembly-table.webp`
- `workshop-testing-bench.webp`
- `export-packing-box.webp`
- `cable-routing-detail.webp`

## Suggested dimensions

| Use case | Size |
|----------|------|
| Product card | 1200×900 |
| Product detail hero | 1600×1000 |
| About / workshop | 1600×1000 |
| Manual step image | 1400×900 |

## Image requirements

- Real product or real factory/workshop photos only
- No third-party brand watermarks
- No customer privacy, accounts, IMEI, or shipping labels
- No sensitive admin or control-panel screenshots
- Prefer horizontal orientation and even lighting

## How it goes live (no page changes)

1. Copy files into `public/images/real/` using the names above.
2. Optionally adjust slot mappings in `src/lib/images.ts` (`REAL_IMAGES`) if filenames differ.
3. Run `npm run build` — `scripts/prebuild.mjs` scans `public/images/real/` and writes `src/lib/real-images-manifest.json`.
4. Deploy. Each slot uses `pickReal()`: if the file exists in the manifest, the real path is used; otherwise the existing placeholder stays.

There is **no** manual `USE_REAL_IMAGES` toggle. Missing files automatically keep placeholders — safe to deploy incrementally as photos arrive.

## Current status

Until real files are uploaded, `real-images-manifest.json` is `[]` and all pages use existing `/images/card_*`, `/images/hero_*`, and `/images/detail_*` placeholders.
