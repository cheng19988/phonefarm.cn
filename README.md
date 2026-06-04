# 广州手机农场 phonefarm.cn

广州真机手机农场硬件厂家官网 — Next.js 16 + Prisma SQLite + Tailwind CSS。

参考站点：[cxtfactory.com](https://www.cxtfactory.com/)（内容已改写为广州手机农场品牌）

## 功能

- 产品中心（主板盒、32PCS 整机盒、12PCS 阵列、iPhone 农场、网络路由器等）
- 定制方案、FAQ、安装指南、关于我们
- 在线下单 + USDT (TRC20) 支付
- 管理后台（产品库存、订单、咨询）
- SEO：sitemap、robots.txt、llms.txt、结构化数据

## 开发

```bash
npm install
npm run dev
```

默认管理员：`admin@phonefarm.cn` / `admin123456`（首次 seed 后）

## 部署

```bash
npm run build
npm start
```

生产环境请配置 `.env` 中的 `DATABASE_URL`、`JWT_SECRET`、`TRON_API_KEY` 等变量。
