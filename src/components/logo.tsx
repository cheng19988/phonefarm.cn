import Link from "next/link";
import { SITE } from "@/lib/config";

type SiteLogoProps = {
  showWordmark?: boolean;
  size?: "sm" | "md";
  asLink?: boolean;
  className?: string;
};

/** Same asset as /icon.svg — header logo and browser favicon stay in sync. */
function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={`/icon.svg?v=${SITE.iconVersion}`}
      alt=""
      width={48}
      height={48}
      className={className}
      decoding="async"
    />
  );
}

export function SiteLogo({ showWordmark = true, size = "md", asLink = true, className = "" }: SiteLogoProps) {
  const iconSize = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const inner = (
    <>
      <div className={`${iconSize} shrink-0 drop-shadow-lg drop-shadow-cyan-500/30`}>
        <LogoMark className="h-full w-full" />
      </div>
      {showWordmark && (
        <div className="min-w-0">
          <div className={`logo-wordmark-en ${size === "sm" ? "text-sm" : "text-base"}`}>{SITE.nameEn}</div>
          <div className={`logo-wordmark-sub ${size === "sm" ? "text-[10px]" : "text-xs"}`}>{SITE.locationEn}</div>
        </div>
      )}
    </>
  );

  const wrapClass = `site-logo group flex items-center gap-3 ${className}`;

  if (asLink) {
    return (
      <Link href="/" className={`${wrapClass} shrink-0`}>
        {inner}
      </Link>
    );
  }

  return <div className={wrapClass}>{inner}</div>;
}
