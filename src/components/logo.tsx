import Link from "next/link";
import { SITE } from "@/lib/config";

type SiteLogoProps = {
  showWordmark?: boolean;
  size?: "sm" | "md";
  asLink?: boolean;
  className?: string;
};

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="pf-logo-bg" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#67e8f9" />
          <stop offset="0.45" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="pf-logo-slot" x1="12" y1="14" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e0f2fe" />
          <stop offset="1" stopColor="#7dd3fc" />
        </linearGradient>
        <filter id="pf-logo-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#22d3ee" floodOpacity="0.45" />
        </filter>
      </defs>
      <rect x="4" y="4" width="40" height="40" rx="11" fill="url(#pf-logo-bg)" filter="url(#pf-logo-glow)" />
      {/* chassis frame */}
      <rect x="11" y="13" width="26" height="22" rx="2.5" stroke="#0f172a" strokeWidth="1.5" strokeOpacity="0.35" fill="#0f1a30" fillOpacity="0.55" />
      {/* phone-farm slot grid */}
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={14 + col * 7}
            y={16 + row * 4.5}
            width="5"
            height="3"
            rx="0.6"
            fill="url(#pf-logo-slot)"
            fillOpacity={0.92 - row * 0.06}
          />
        ))
      )}
      {/* status LEDs */}
      <circle cx="33.5" cy="16" r="1.2" fill="#22d3ee" />
      <circle cx="36.5" cy="16" r="1.2" fill="#34d399" />
      {/* network port hint */}
      <rect x="13" y="31" width="4" height="2" rx="0.5" fill="#94a3b8" fillOpacity="0.9" />
      <rect x="18.5" y="31" width="4" height="2" rx="0.5" fill="#94a3b8" fillOpacity="0.7" />
    </svg>
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
          <div className={`logo-wordmark-zh ${size === "sm" ? "text-[10px]" : "text-xs"}`}>{SITE.name}</div>
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
