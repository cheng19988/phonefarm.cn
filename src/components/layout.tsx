import Link from "next/link";
import { CONTACT, NAV, SITE, PRODUCT_NAV } from "@/lib/config";
import { ContactBar } from "./shared";
import { SiteLogo } from "./logo";
import { getSession } from "@/lib/auth";

export async function Header() {
  const session = await getSession();
  const isAdmin = session?.role === "admin";

  return (
    <header className="header-shell sticky top-0 z-50 backdrop-blur-xl border-b border-sky-400/20 shadow-lg shadow-sky-950/20">
      <div className="rfq-bar hidden md:block">
        <div className="container-wide flex flex-wrap justify-between items-center gap-2">
          <span className="rfq-bar-tagline">
            {SITE.nameEn} · {SITE.locationEn} · Factory-direct phone farm hardware
          </span>
          <ContactBar compact />
        </div>
      </div>
      <div className="container-wide py-4 flex items-center justify-between gap-4">
        <SiteLogo />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/pricing" className="hidden md:inline-flex nav-link-muted text-sm">
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
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-chip"
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
    <footer className="footer-shell relative border-t border-sky-400/15 mt-auto">
      <div className="tech-grid-bg absolute inset-x-0 h-48 opacity-30 pointer-events-none" aria-hidden />
      <div className="container-wide py-14 md:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
        <div className="lg:col-span-2">
          <div className="mb-4">
            <SiteLogo size="sm" />
          </div>
          <p className="text-slate-300 text-sm md:text-base mb-6 max-w-md leading-relaxed">{SITE.descriptionEn}</p>
          <ContactBar />
          <p className="text-xs text-slate-600 mt-6">
            Hardware for development, testing and legitimate device operations only.
          </p>
        </div>
        <div>
          <h3 className="footer-heading">Products</h3>
          <ul className="space-y-2.5 text-sm text-slate-300">
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
          <h3 className="footer-heading">Company</h3>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><Link href="/pricing" className="hover:text-cyan-300 transition-colors">Pricing & MOQ</Link></li>
            <li><Link href="/services" className="hover:text-cyan-300 transition-colors">Services</Link></li>
            <li><Link href="/manual" className="hover:text-cyan-300 transition-colors">Installation Manual</Link></li>
            <li><Link href="/faq" className="hover:text-cyan-300 transition-colors">FAQ</Link></li>
            <li><Link href="/about" className="hover:text-cyan-300 transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-300 transition-colors">Contact / RFQ</Link></li>
            <li><Link href="/blog" className="hover:text-cyan-300 transition-colors">Technical Articles</Link></li>
            <li><Link href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-cyan-300 transition-colors">Terms</Link></li>
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
