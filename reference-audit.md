# Reference Site Audit — cxtfactory.com

**Target site:** phonefarm.cn (Chinese Custom Factory Site)  
**Reference URL:** https://www.cxtfactory.com  
**Audit date:** 2026-06-05  
**Reference type:** Custom OEM phone farm hardware manufacturer with technical manual, product specs, ROM customization, and RFQ-driven sales

> Note: Reference brand (Cxtfactory) will NOT be copied. Content rewritten for **广州手机农场 Guangzhou Phone Farm** — Guangzhou real-device hardware manufacturer with OEM/custom production focus.

---

## 1. Page List

| Page | Reference URL | Our Equivalent |
|------|---------------|----------------|
| Homepage | `/` | `/` |
| Mobile Phone Farming (Solutions) | `/mobile-phone-farming` | `/services` + homepage sections |
| User Manual / Setup Guide | `/manual` | `/blog/phone-farm-setup-manual` + `/faq` |
| About Us | `/about-us` (404 on reference) | `/about` (we ADD full page) |
| Contact | Footer RFQ only | `/contact` (full page + form) |
| Products | Homepage product blocks | `/products` + `/products/[slug]` |
| Shop / Pricing | RFQ-driven, no public cart | `/products` with prices + USDT checkout |
| FAQ | Embedded in `/manual` | `/faq` (dedicated, expanded) |
| Blog / Guides | Manual + farming article | `/blog` |
| Login / Account | Not present | `/login`, `/register`, `/account/orders` |
| Privacy / Terms | Not present | `/privacy`, `/terms` |
| Admin | Not present | `/admin` |

---

## 2. Navigation Structure

### Reference Header/Footer
- Persistent RFQ bar: Email + WhatsApp on every page
- Product blocks linked from homepage
- Manual / FAQ sections in footer area
- Legal disclaimer: "development or testing use only"
- Copyright footer

### Our Enhanced Navigation
- **Products** (dropdown: Motherboard Box, Phone Farm Box, Phone Array, Accessories)
- **Custom Solutions** → `/services`
- **Setup Guide** → `/blog`
- **About**
- **FAQ**
- **Contact**
- **Login / Account**
- **Header contact bar:** Phone, WhatsApp, Telegram, Email (always visible)
- **Mobile floating contact bar**

---

## 3. Homepage Modules

| # | Reference Module | Content Summary | Our Implementation |
|---|------------------|-----------------|-------------------|
| 1 | RFQ Banner | Email + WhatsApp for quotes | Header contact bar + hero CTA |
| 2 | Android Motherboard Box | 20-node motherboard chassis, specs, group control | Hero + featured product section |
| 3 | 32PCS Phone Box | High-density box, ROM customization | Product highlight with customization CTA |
| 4 | 12PCS Phone Array | Hot-swappable drawers, built-in PC | Product category card |
| 5 | Equipment Parameters | Carton size 55×38×16cm, ~7KG, 220V, ~100W | Spec tables on products |
| 6 | ROM Customization | Custom ROM, software development inquiry | Services → Custom Hardware |
| 7 | Group Control Software | Click farm software, batch operations | Remote Control Setup service |
| 8 | Connection Modes | USB mode vs OTG/Ethernet LAN | Technical content in products + blog |
| 9 | Legal Disclaimer | Development/testing use only | Footer + terms |
| 10 | Contact Footer | Email + WhatsApp repeated | Full contact CTA + all channels |

**Additional modules we ADD:**
- Guangzhou factory gallery (office, front desk, meeting room, workshop, warehouse)
- Why Choose Us (manufacturer trust)
- Application scenarios (from mobile-phone-farming page)
- FAQ preview
- Blog / setup guide preview
- Stats / since 2017
- Buy Now / Get Quote on products

---

## 4. Product Categories

### Reference Products
- Android Motherboard Box (20 nodes, fixed size)
- 32PCS Phone Box (unified control, ROM customization)
- 12PCS Phone Array (hot-swappable drawers, built-in PC, USB 2.0 HUB)
- Network management router
- Enterprise-level switch

### Our Product Catalog (12 categories — superset)
1. Phone Farm Box
2. Motherboard Box
3. Android Phone Farm
4. iPhone Phone Farm
5. Real Device Phone Farm
6. Empty Box / Chassis
7. USB Hub
8. Power Supply Solution
9. Cooling Solution
10. Network Equipment
11. Custom Cabinet
12. Remote Control Setup

Each maps to reference product types while expanding accessory and infrastructure coverage.

---

## 5. Product Detail Content Structure

### Reference Product Elements
- Product title (H1)
- Short technical description (motherboard removal, chassis integration)
- Capacity: 20 motherboards per box, 1 PC controls 3–5 boxes
- Power: 220V, ~100W under load
- Connectivity: USB mode + OTG/LAN Ethernet dual mode
- Equipment parameters table (carton size, weight)
- ROM customization support note
- RFQ contact CTA (email + WhatsApp)
- Application fields list (from FAQ/manual)

### Our Product Detail (must include all above + expand)
- Product name, images (hero + detail + gallery)
- Price (USD) + stock status badge
- Buy Now / Add to Order / Get Quote buttons
- Contact sales strip (phone, WhatsApp, Telegram, email)
- Introduction paragraph
- Key features list
- Technical specifications table
- Application scenarios
- Included accessories / delivery contents
- Maintenance & warranty notes
- Product-specific FAQ
- JSON-LD Product schema

---

## 6. FAQ Question Directions

Reference FAQ (from `/manual` and `/mobile-phone-farming`):

| Topic | Reference Coverage | Our FAQ |
|-------|-------------------|---------|
| What is box phone farm? | Manual FAQ | Dedicated answer |
| Application fields | 6 use cases listed | Expanded scenarios |
| PC config for 3–5 boxes | E5 2680 V2 recommendation | Dedicated answer |
| Warranty | Chassis 1yr, motherboard 90 days | Dedicated answer |
| What's included in purchase | Hardware + cables + 15-day software | Delivery contents |
| Control all phones at once? | Yes via software | Dedicated answer |
| Customer support | Remote assistance (AnyDesk) | Dedicated answer |
| Screen black after mirroring | Settings fix | Troubleshooting in blog |
| USB insufficient resources | Multi-step fix guide | Blog + FAQ |
| ADB authorization | Keep authorization file | Setup guide |
| Real device vs cloud/emulator | Implied hardware focus | Comparison answers |
| Android vs iPhone farm | Product categories | Dedicated answer |
| Custom hardware / ROM | ROM customization offered | Dedicated answer |
| Overseas shipping | Freight forwarding support | Dedicated answer |
| MOQ / sample / delivery / payment | Partially covered | Full answers |
| Contact sales | Email + WhatsApp | All channels |

---

## 7. Service Content

### Reference Services (implicit)
- Custom-assembled phone farm boxes (no returns after delivery)
- ROM customization and software development inquiry
- Group control software configuration
- Installation guidance until successful deployment
- Remote desktop support (AnyDesk)
- International freight forwarding coordination
- After-sales: 90-day motherboard, 1-year accessories warranty
- WSAPI / automation script API support
- USB mode and OTG/Ethernet setup assistance

### Our Services Page (9 services — superset)
1. Phone Farm Setup
2. Remote Control Configuration
3. Group Control System Configuration
4. Bulk Device Deployment
5. Custom Hardware Solution (ROM + chassis OEM)
6. Enterprise Deployment
7. Maintenance / Support
8. Sample Solution
9. Overseas Delivery

---

## 8. Shop / Price / Button / Order Logic

### Reference Sales Flow
```
Homepage Product Block → RFQ via Email/WhatsApp → Custom quote → Assembly → Freight forwarder shipping
```

- **No public e-commerce** — RFQ-driven
- **Pricing:** Contact for quote (no listed prices)
- **Buttons:** Implicit "Contact" via email/WhatsApp
- **Custom product:** Cannot return after delivery
- **Delivery:** Buyer arranges or seller helps contact freight forwarder
- **Payment:** Not specified on site

### Our Enhanced Order Flow
```
Browse Products → Product Detail → Buy Now / Add to Order / Get Quote
                                              ↓
                                    Register/Login (if Buy Now)
                                              ↓
                                    Order created (Pending)
                                              ↓
                                    USDT TRC20 payment (30 min window)
                                              ↓
                                    Payment verification API (TronGrid placeholder)
                                              ↓
                                    Status: Waiting → Paid → Confirmed
                                    Timeout: Expired / Cancelled
```

**Payment:** USDT Tron TRC20 · Address: TH42KshQyz15iWk5svAwS475RM8oYQjwjW · Min 10 USDT · 30 min expiry

---

## 9. CTA Conversion Paths

| Path | Reference Trigger | Our Implementation |
|------|-------------------|-------------------|
| RFQ Email | Every page header/footer | Contact form + email link |
| WhatsApp | Persistent +852 style number | WhatsApp direct link |
| Custom ROM Inquiry | Product pages | Services → Custom Hardware |
| Setup Help | Manual page | Blog setup guide + support service |
| Software Download | Manual references group control | Remote Control Setup service |
| Product Interest | Homepage product blocks | Product detail → Buy/Quote |
| Automation API | Manual WSAPI section | Blog technical guide |

**Contact channels (all pages):**
- Phone: 13059502618
- Telegram: @huicheng1998
- WhatsApp: +852 6215 5642
- Email: qiuxui646@gmail.com

---

## 10. Content We Can Enhance Beyond Reference

| Area | Reference Gap | Our Enhancement |
|------|---------------|-----------------|
| About page | 404 | Full Guangzhou factory story + photos |
| Contact page | 404 | Full form with quantity/budget fields |
| Dedicated FAQ | Embedded in manual only | Full FAQ page with schema |
| E-commerce | RFQ only | Product prices, stock, USDT checkout |
| iPhone Farm | Mentioned briefly | Full product category |
| Accessories | Limited | USB Hub, Power, Cooling, Network products |
| SEO | Minimal | Full metadata, JSON-LD, sitemap, llms.txt |
| Admin | None | Custom /admin dashboard |
| Factory proof | None | Real office/workshop/warehouse gallery |
| Legal pages | Disclaimer only | Privacy + Terms |
| Blog | 1 manual + 1 article | Multiple guides including setup manual |

---

## Build Checklist

- [x] Homepage: hero + motherboard box + phone array + customization + factory gallery + FAQ + CTA
- [x] Products: 12 categories with specs, prices, stock
- [x] Product detail: full technical content from reference
- [x] Services: 9 offerings including ROM/custom OEM
- [x] About: Guangzhou factory since 2017
- [x] FAQ: all reference questions + expanded set
- [x] Blog: setup manual + farming guide + technical posts
- [x] Contact: full form + all channels
- [x] Auth + orders + USDT payment
- [x] Admin panel
- [x] SEO: sitemap, robots, llms.txt, JSON-LD
- [x] Mobile floating contact bar

---

## Brand Identity for phonefarm.cn

| Field | Value |
|-------|-------|
| Brand Name | 广州手机农场 / Guangzhou Phone Farm |
| Domain | phonefarm.cn |
| Location | 中国广州 |
| Positioning | 中文手机农场厂家站，面向批量采购、企业、代理商及 OEM 定制客户 |
| Since | 2017 |
| Tagline | 真机手机农场设备 · 整机盒 · 主板盒 · 定制方案 |
| Reference | https://www.cxtfactory.com/ |
