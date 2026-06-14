import Link from "next/link";
import { headers } from "next/headers";
import { localeFromPath, localeSwitchHref } from "@/lib/i18n";

export async function LanguageSwitcher() {
  const pathname = (await headers()).get("x-pathname") ?? "/";
  const current = localeFromPath(pathname);
  const enHref = localeSwitchHref(pathname, "en");
  const zhHref = localeSwitchHref(pathname, "zh-CN");

  return (
    <div
      className="flex items-center rounded-lg border border-sky-400/25 bg-slate-900/40 text-xs font-semibold overflow-hidden"
      role="navigation"
      aria-label="Language"
    >
      <Link
        href={enHref}
        hrefLang="en"
        className={`px-2.5 py-1.5 transition-colors ${current === "en" ? "bg-cyan-500/20 text-cyan-300" : "text-slate-400 hover:text-slate-200"}`}
        aria-current={current === "en" ? "page" : undefined}
      >
        EN
      </Link>
      <Link
        href={zhHref}
        hrefLang="zh-CN"
        className={`px-2.5 py-1.5 transition-colors ${current === "zh-CN" ? "bg-cyan-500/20 text-cyan-300" : "text-slate-400 hover:text-slate-200"}`}
        aria-current={current === "zh-CN" ? "page" : undefined}
      >
        中文
      </Link>
    </div>
  );
}
