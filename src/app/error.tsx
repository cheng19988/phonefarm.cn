"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CONTACT } from "@/lib/config";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="section">
      <div className="container-wide max-w-lg text-center space-y-6">
        <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          The page could not load — often a temporary server cold-start on product or order pages. Try again, or contact sales directly.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button type="button" onClick={reset} className="btn-primary">
            Try again
          </button>
          <Link href="/" className="btn-outline">Home</Link>
          <Link href="/contact" className="btn-outline">Contact RFQ</Link>
        </div>
        <p className="text-xs text-slate-500">
          {CONTACT.email} · WhatsApp {CONTACT.whatsapp}
        </p>
      </div>
    </div>
  );
}
