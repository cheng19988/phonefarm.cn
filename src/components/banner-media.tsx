import type { BannerFit } from "@/lib/banners";

type BannerMediaProps = {
  src: string;
  fit?: BannerFit;
  focus?: string;
  scale?: number;
  className?: string;
  /** Decorative when page H1 repeats subject; pass title for meaningful alt. */
  alt?: string;
};

/** Native img — zero Next.js processing, pixel-perfect source file */
export function BannerMedia({
  src,
  fit = "cover",
  focus = "center",
  scale = 1,
  className = "",
  alt = "",
}: BannerMediaProps) {
  const isContain = fit === "contain";
  const zoom = !isContain && scale > 1 ? scale : 1;
  const decorative = !alt;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        aria-hidden={decorative ? true : undefined}
        decoding="async"
        fetchPriority="high"
        className={`banner-media h-full w-full ${isContain ? "banner-media--contain" : "banner-media--cover"}`}
        style={{
          objectPosition: focus,
          transform: zoom > 1 ? `scale(${zoom})` : undefined,
          transformOrigin: focus,
        }}
      />
    </div>
  );
}
