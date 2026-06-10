import Link from "next/link";
import { CONTACT, NAV, SITE, PRODUCT_NAV } from "@/lib/config";
import { ContactBar } from "./shared";
import { getSession } from "@/lib/auth";

export async function Header() {
  const session = await getSession();
  const isAdmin = session?.role === "admin";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-sky-400/20 shadow-lg shadow-sky-950/20" style={{ background: "rgba(21, 34, 56, 0.75)" }}>
      <div className="rfq-bar hidden md:block">
        <div className="container-wide flex flex-wrap justify-between items-center gap-2">
          <span className="text-slate-400 text-xs md:text-sm">
            {SITE.nameEn} · {SITE.locationEn} · Factory-direct phone farm hardware
          </span>
          <ContactBar compact />
        </div>
      </div>
      <div className="container-wide py-4 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0 flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 ring-2 ring-cyan-400/25">
            <span className="text-slate-950 font-black text-sm">PF</span>
          </div>
          <div>
            <div className="font-bold text-white leading-tight group-hover:text-cyan-100 transition-colors">{SITE.nameEn}</div>
            <div className="text-[11px] text-slate-500 leading-tight">{SITE.name}</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-xl transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/faq" className="px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-xl transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/pricing" className="hidden md:inline-flex btn-ghost text-sm">
            Pricing
          </Link>
          <Link href="/contact" className="btn-primary text-sm py-2 px-4 min-h-[40px]">
            Get Quote
          </Link>
          {isAdmin && (
            <Link href="/admin" className="text-xs text-slate-500 hover:text-slate-300 px-2">
              Admin
            </Link>
          )}
        </div>
      </div>
      <nav className="lg:hidden container-wide pb-3 flex gap-2 overflow-x-auto text-sm border-t border-[var(--border-subtle)] pt-3">
        {[...NAV, { href: "/faq", label: "FAQ" }].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap px-3 py-1.5 rounded-full border border-cyan-500/20 text-slate-400 hover:text-cyan-200 hover:border-cyan-400/40"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-sky-400/15 mt-auto" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(15,26,48,0.6) 100%)" }}>
      <div className="tech-grid-bg absolute inset-x-0 h-48 opacity-30 pointer-events-none" aria-hidden />
      <div className="container-wide py-14 md:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center">
              <span className="text-slate-950 font-black text-xs">PF</span>
            </div>
            <div>
              <div className="font-bold text-white">{SITE.nameEn}</div>
              <div className="text-sm text-slate-500">{SITE.locationEn}</div>
            </div>
          </div>
          <p className="text-slate-400 text-sm md:text-base mb-6 max-w-md leading-relaxed">{SITE.descriptionEn}</p>
          <ContactBar />
          <p className="text-xs text-slate-600 mt-6">
            Hardware for development, testing and legitimate device operations only.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wide">Products</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {PRODUCT_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cyan-300 transition-colors">{item.label}</Link>
              </li>
            ))}
            <li><Link href="/packages" className="hover:text-cyan-300">Solution Packages</Link></li>
            <li><Link href="/products" className="hover:text-cyan-300">Full Catalog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wide">Company</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/pricing" className="hover:text-white">Pricing & MOQ</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/manual" className="hover:text-white">Installation Manual</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact / RFQ</Link></li>
            <li><Link href="/blog" className="hover:text-white">Technical Articles</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
          </ul>
          <p className="text-xs text-slate-600 mt-6">
            RFQ: {CONTACT.email}
          </p>
        </div>
      </div>
      <div className="border-t border-cyan-500/10 py-4 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {SITE.nameEn} · {CONTACT.email}
      </div>
    </footer>
  );
}
