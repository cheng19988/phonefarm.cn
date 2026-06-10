"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const unique = [...new Set(images.filter(Boolean))];
  const [active, setActive] = useState(0);
  const main = unique[active] ?? unique[0];
  if (!main) return null;

  return (
    <div className="space-y-4">
      <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface-elevated)] shadow-2xl">
        <Image src={main} alt={alt} fill className="object-cover" priority sizes="(max-width:1024px) 100vw, 50vw" />
      </div>
      {unique.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1 snap-x">
          {unique.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 snap-start transition-all ${
                i === active ? "border-cyan-500 ring-2 ring-cyan-500/30" : "border-[var(--border)] opacity-80 hover:opacity-100"
              }`}
              aria-label={`Image ${i + 1}`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="96px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
