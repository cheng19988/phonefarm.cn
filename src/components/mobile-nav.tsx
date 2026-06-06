"use client";

import { usePathname } from "next/navigation";
import { MobileContactBar } from "./shared";

export function MobileNav() {
  const pathname = usePathname();
  if (pathname.startsWith("/products/")) return null;
  return <MobileContactBar />;
}
