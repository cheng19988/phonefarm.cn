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

## Vercel 部署

在 Vercel 项目 **Settings → Environment Variables** 中添加：

| 变量 | 值 |
|------|-----|
| `DATABASE_URL` | `file:/tmp/phonefarm.db` |
| `JWT_SECRET` | 随机长字符串 |
| `ADMIN_EMAIL` | `admin@phonefarm.cn` |
| `ADMIN_PASSWORD` | 管理员密码 |

构建时若检测到 `DATABASE_URL`，会自动执行 `db push` 与 seed；未设置时跳过数据库步骤（避免构建失败）。

Vercel Serverless 每次冷启动 `/tmp` 数据库为空，应用会在**首次请求时自动建表并 seed**（无需手动操作）。

> SQLite 在 Serverless 上为临时存储，重启后数据可能丢失。长期生产建议改用 Turso 或 PostgreSQL。
