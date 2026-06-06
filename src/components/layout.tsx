import Link from "next/link";
import { CONTACT, NAV, SITE, PRODUCT_NAV } from "@/lib/config";
import { ContactBar } from "./shared";
import { getSession } from "@/lib/auth";

export async function Header() {
  const session = await getSession();
  const isAdmin = session?.role === "admin";

  return (
    <header className="sticky top-0 z-40 bg-[#0f1419] border-b border-[var(--border)]">
      <div className="rfq-bar hidden md:block">
        <div className="container-wide flex flex-wrap justify-between items-center gap-2">
          <span className="text-slate-400">
            {SITE.nameEn} | {SITE.locationEn} | Phone Farm Hardware Manufacturer
          </span>
          <ContactBar compact />
        </div>
      </div>
      <div className="container-wide py-3 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <div className="font-semibold text-white leading-tight">{SITE.nameEn}</div>
          <div className="text-[11px] text-slate-500 leading-tight">PhoneFarm.cn | {SITE.name}</div>
        </Link>
        <nav className="hidden lg:flex items-center gap-5">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden sm:inline-flex btn-primary text-sm py-1.5 px-3">
            Get Quote
          </Link>
          {isAdmin && (
            <Link href="/admin" className="text-xs text-slate-500 hover:text-slate-300">
              Admin
            </Link>
          )}
        </div>
      </div>
      <nav className="lg:hidden container-wide pb-2 flex gap-3 overflow-x-auto text-xs border-t border-[var(--border)] pt-2">
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
    <footer className="bg-[#0a0e14] border-t border-[var(--border)] mt-auto">
      <div className="container-wide py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold text-white mb-1">{SITE.nameEn}</div>
          <div className="text-sm text-slate-500 mb-3">{SITE.name} | {SITE.locationEn}</div>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">{SITE.descriptionEn}</p>
          <ContactBar />
          <p className="text-xs text-slate-600 mt-4">
            Hardware for development, testing and legitimate device operations only.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-white text-sm mb-3">Products</h3>
          <ul className="space-y-1.5 text-sm text-slate-400">
            {PRODUCT_NAV.map((item) => (
              <li key={item.href}><Link href={item.href} className="hover:text-white">{item.label}</Link></li>
            ))}
            <li><Link href="/products" className="hover:text-blue-400">All Products</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-white text-sm mb-3">Resources</h3>
          <ul className="space-y-1.5 text-sm text-slate-400">
            <li><Link href="/manual" className="hover:text-white">Installation Manual</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact / RFQ</Link></li>
            <li><Link href="/blog" className="hover:text-white">Technical Articles</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
          </ul>
          <p className="text-xs text-slate-600 mt-4">
            RFQ: {CONTACT.email} | {CONTACT.whatsapp}
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-3 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {SITE.nameEn} | {CONTACT.email}
      </div>
    </footer>
  );
}
