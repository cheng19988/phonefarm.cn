# Real Image Replacement Guide

Upload authentic product and factory photos only. Do not use AI-generated or stock images that misrepresent hardware.

## Upload location

```
public/images/real/
```

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

### Factory / workshop

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
- Export as `.webp` when possible for size

## How to go live

1. Copy files into `public/images/real/` using the names above.
2. Open `src/lib/images.ts`.
3. Set `USE_REAL_IMAGES = true` after assets are uploaded.
4. Adjust `REAL_IMAGES` paths if your filenames differ.
5. Run `npm run build` and deploy.

No page structure changes are required. Existing placeholder paths remain the fallback when `USE_REAL_IMAGES` is `false`.
