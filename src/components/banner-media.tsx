import Image from "next/image";
import type { BannerFit } from "@/lib/banners";

type BannerMediaProps = {
  src: string;
  fit?: BannerFit;
  focus?: string;
  scale?: number;
  priority?: boolean;
  className?: string;
};

/** Sharp full-width banner layer — native PNG, no lossy recompression */
export function BannerMedia({
  src,
  fit = "cover",
  focus = "center",
  scale = 1,
  priority = true,
  className = "",
}: BannerMediaProps) {
  const isContain = fit === "contain";
  const zoom = !isContain && scale > 1 ? scale : 1;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        unoptimized
        sizes="100vw"
        className={isContain ? "banner-media--contain" : "banner-media--cover"}
        style={{
          objectPosition: focus,
          transform: zoom > 1 ? `scale(${zoom})` : undefined,
          transformOrigin: focus,
        }}
      />
    </div>
  );
}
