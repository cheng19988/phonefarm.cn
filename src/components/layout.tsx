import Link from "next/link";
import { CONTACT, NAV, SITE, PRODUCT_NAV } from "@/lib/config";
import { ContactBar } from "./shared";
import { getSession } from "@/lib/auth";

export async function Header() {
  const session = await getSession();

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <div className="hidden md:block bg-slate-900/80 border-b border-slate-800">
        <div className="container-wide py-2 flex justify-between items-center text-xs text-slate-400">
          <span>{SITE.location} · {SITE.nameEn} · 工厂直销</span>
          <ContactBar compact />
        </div>
      </div>
      <div className="container-wide py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
            广
          </div>
          <div>
            <div className="font-bold text-white leading-tight">{SITE.name}</div>
            <div className="text-[10px] text-emerald-400 leading-tight hidden sm:block">{SITE.tagline}</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/products" className="hidden sm:inline-flex btn-primary text-sm py-2 px-4">
            产品中心
          </Link>
          {session ? (
            <Link href={session.role === "admin" ? "/admin" : "/account/orders"} className="text-sm text-slate-300 hover:text-white">
              账户
            </Link>
          ) : (
            <Link href="/login" className="text-sm text-slate-300 hover:text-white">
              登录
            </Link>
          )}
        </div>
      </div>
      <nav className="lg:hidden container-wide pb-3 flex gap-4 overflow-x-auto text-sm">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="text-slate-400 hover:text-white whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
      <div className="container-wide py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="font-bold text-white text-lg mb-1">{SITE.name}</div>
          <div className="text-emerald-400 text-sm mb-3">{SITE.nameEn}</div>
          <p className="text-slate-400 text-sm mb-4 max-w-md">{SITE.description}</p>
          <ContactBar />
          <p className="text-xs text-slate-500 mt-4">硬件仅供开发测试合法用途。</p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">产品分类</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {PRODUCT_NAV.map((item) => (
              <li key={item.href}><Link href={item.href} className="hover:text-white">{item.label}</Link></li>
            ))}
            <li><Link href="/products" className="hover:text-emerald-400">全部产品</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">公司信息</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/about" className="hover:text-white">关于我们</Link></li>
            <li><Link href="/services" className="hover:text-white">定制方案</Link></li>
            <li><Link href="/faq" className="hover:text-white">常见问题</Link></li>
            <li><Link href="/blog" className="hover:text-white">安装指南</Link></li>
            <li><Link href="/contact" className="hover:text-white">联系我们</Link></li>
            <li><Link href="/privacy" className="hover:text-white">隐私政策</Link></li>
            <li><Link href="/terms" className="hover:text-white">使用条款</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        {new Date().getFullYear()} {SITE.name} · {SITE.location} · {CONTACT.email}
      </div>
    </footer>
  );
}
