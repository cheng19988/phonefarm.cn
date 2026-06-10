import type { BannerFit } from "@/lib/banners";

type BannerMediaProps = {
  src: string;
  fit?: BannerFit;
  focus?: string;
  scale?: number;
  className?: string;
};

/** Native img — zero Next.js processing, pixel-perfect source file */
export function BannerMedia({
  src,
  fit = "cover",
  focus = "center",
  scale = 1,
  className = "",
}: BannerMediaProps) {
  const isContain = fit === "contain";
  const zoom = !isContain && scale > 1 ? scale : 1;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
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
