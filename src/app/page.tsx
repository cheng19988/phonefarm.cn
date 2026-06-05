import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { ProductCard, FAQAccordion } from "@/components/commerce";
import { ContactCTA } from "@/components/shared";
import { buildMetadata } from "@/lib/seo";
import { FAQ_ITEMS } from "@/data/faq";
import { BLOG_POSTS } from "@/data/blog";
import { BULK_PROCESS } from "@/data/services";
import { IMAGES } from "@/lib/images";
import { SITE, CONTACT, PRODUCT_NAV } from "@/lib/config";

export const metadata = buildMetadata({
  title: "广州手机农场厂家｜真机手机农场设备",
  description:
    "广州手机农场 — 中国广州真机手机农场硬件厂家。主板盒、32PCS 整机盒、12PCS 阵列、iPhone 农场盒及网络设备，支持 OEM 定制与批量交付。",
  path: "/",
});

export default async function HomePage() {
  const products = await prisma.product.findMany({
    where: { published: true },
    orderBy: { priceUsd: "asc" },
    take: 8,
  });

  const previewFaq = FAQ_ITEMS.slice(0, 6);

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <Image src={IMAGES.homeHero} alt="广州手机农场真机设备" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        <div className="container-wide relative py-20">
          <p className="text-emerald-400 font-medium mb-3">{SITE.location} · 工厂直销 · 自 {SITE.since} 年服务客户</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight mb-4">
            真机手机农场硬件厂家 · 整机盒与主板盒定制
          </h1>
          <p className="text-lg text-slate-400 mb-2">{SITE.nameEn}</p>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">{SITE.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="btn-primary text-lg px-8 py-3">查看产品中心</Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-3">获取定制报价</Link>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950/40 border-y border-emerald-900/50 py-4">
        <div className="container-wide flex flex-wrap items-center justify-between gap-4 text-sm">
          <span className="text-emerald-300 font-medium">工厂直销询价 · 批量采购 · 代理商合作 · ROM 定制</span>
          <div className="flex flex-wrap gap-4 text-slate-300">
            <a href={`tel:${CONTACT.phone}`} className="hover:text-emerald-400">电话 {CONTACT.phone}</a>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">WhatsApp</a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-emerald-400">{CONTACT.email}</a>
          </div>
        </div>
      </section>

      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <h2 className="section-title">核心产品 · 工厂直销</h2>
          <p className="section-subtitle">主板盒、32PCS 整机盒、12PCS 手机阵列、iPhone 农场盒、网络路由器及配套电源散热方案 — 面向企业与代理商批量交付。</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "安卓主板盒 Motherboard Box",
                desc: "20 节点主板集成，外箱 55x38x16cm，约 7KG。220V 约 100W。USB + OTG/LAN 双模式。1 PC 控 3-5 盒。",
                href: "/products/motherboard-box",
                img: IMAGES.motherboardBox.hero,
              },
              {
                title: "32PCS 手机农场整机盒",
                desc: "统一群控，支持 ROM 定制。3 风扇散热，Mod ROM 自动开机与 ADB 识别，兼容主流群控软件。",
                href: "/products/phone-farm-box",
                img: IMAGES.phoneFarmBox.hero,
              },
              {
                title: "12PCS 手机阵列 Phone Array",
                desc: "12 热插拔抽屉，可放完整手机或主板，内置 PC，USB 2.0 HUB 集成。",
                href: "/products/phone-array-12pcs",
                img: IMAGES.realDevice.hero,
              },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="card overflow-hidden group hover:border-emerald-800 transition-colors">
                <div className="relative aspect-video">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {PRODUCT_NAV.map((item) => (
              <Link key={item.href} href={item.href} className="px-3 py-1 rounded-full text-sm border border-slate-700 text-slate-300 hover:border-emerald-600 hover:text-emerald-400">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide grid md:grid-cols-3 gap-8">
          {[
            { title: "广州工厂直销", desc: "中国广州真机硬件厂家，无中间商。工程师团队根据您的设备型号与业务场景定制方案，非模板化交付。" },
            { title: "群控就绪", desc: "预配置 USB 与 OTG/LAN 模式，一名操作员可同时管理 20+ 台设备，支持批量任务与独立操作。" },
            { title: "远程部署支持", desc: "从连接到成功运行全程指导，AnyDesk 远程协助、ADB 授权及网络分段配置均含在内。" },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <h2 className="text-xl font-bold text-white mb-3">{item.title}</h2>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <h2 className="section-title">产品中心 · 价格与库存</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} slug={p.slug} name={p.name} shortDesc={p.shortDesc} priceUsd={p.priceUsd} stock={p.stock} imageCard={p.imageCard} category={p.category} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn-outline">查看全部产品</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <h2 className="section-title">合作流程概览</h2>
          <p className="section-subtitle">面向企业客户与代理商的标准商务路径，支持对公合同与样品评估。</p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {BULK_PROCESS.slice(0, 3).map((step) => (
              <div key={step.step} className="card p-6">
                <span className="text-emerald-400 font-bold text-2xl">{step.step}</span>
                <h3 className="font-bold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-outline">查看完整合作流程</Link>
          </div>
        </div>
      </section>

      <section className="section bg-slate-900/50">
        <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image src={IMAGES.remoteControl.hero} alt="群控与远程控制" fill className="object-cover" />
          </div>
          <div>
            <h2 className="section-title">ROM 定制 · 群控 · 自动化 API</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              支持定制 ROM、软件功能开发及 WebSocket API 自动化对接，兼容 Python、Node.js 等语言，满足企业级自动化需求。
            </p>
            <ul className="space-y-2 text-slate-400 mb-6 text-sm">
              <li>蓝灯 USB 模式（WiFi）/ 绿灯 OTG 模式（以太网）</li>
              <li>WSAPI 批量设备控制与脚本自动化</li>
              <li>网络路由器 / 软路由推荐方案</li>
            </ul>
            <Link href="/contact?service=custom-hardware-solution" className="btn-primary">咨询 OEM 定制</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <h2 className="section-title">广州工厂实景</h2>
          <p className="section-subtitle">前台、办公室、会议室、生产车间、仓库 — 真实厂家环境，欢迎商务洽谈与验厂。</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { src: IMAGES.companyFront, label: "前台" },
              { src: IMAGES.companyOffice, label: "办公室" },
              { src: IMAGES.companyMeeting, label: "会议室" },
              { src: IMAGES.companyWorkshop, label: "生产车间" },
              { src: IMAGES.companyWarehouse, label: "仓库" },
            ].map((img) => (
              <div key={img.label} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.label} fill className="object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-3">
                  <span className="text-white text-sm font-medium">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-900/50">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title text-center">常见问题</h2>
          <FAQAccordion items={previewFaq} />
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-outline">查看全部 FAQ</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <h2 className="section-title">安装指南与技术文档</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 hover:border-emerald-800 transition-colors group">
                <span className="text-xs text-emerald-400">{post.category}</span>
                <h3 className="font-bold text-white mt-2 group-hover:text-emerald-400 transition-colors">{post.title}</h3>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <ContactCTA title="联系广州手机农场 · 获取报价" />
        </div>
      </section>
    </>
  );
}
