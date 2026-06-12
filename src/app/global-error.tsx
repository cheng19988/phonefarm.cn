"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#152238", color: "#f0f9ff" }}>
        <div style={{ maxWidth: 480, margin: "4rem auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Site error</h1>
          <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Something failed while loading this page. Refresh or contact sales if checkout or RFQ is urgent.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            <button
              type="button"
              onClick={reset}
              style={{
                padding: "0.625rem 1.25rem",
                background: "#06b6d4",
                color: "#0f172a",
                border: "none",
                borderRadius: 8,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <Link href="/" style={{ padding: "0.625rem 1.25rem", color: "#22d3ee", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/contact" style={{ padding: "0.625rem 1.25rem", color: "#22d3ee", textDecoration: "none" }}>
              Contact RFQ
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
