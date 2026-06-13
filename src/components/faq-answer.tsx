import Link from "next/link";

/** Site paths like /manual — not slashes inside words (OTG/LAN, photo/video, USB/OTG). */
const PATH_RE = /(?<![a-zA-Z0-9])(\/[a-z][a-z0-9-]*(?:\/[a-z0-9-]+)?)/gi;

/** Turn inline paths like /manual into internal links in FAQ answers. */
export function FaqAnswer({ text }: { text: string }) {
  const parts = text.split(PATH_RE);
  return (
    <p className="mt-5 text-slate-400 text-base md:text-lg leading-relaxed pb-2">
      {parts.map((part, i) =>
        part.startsWith("/") ? (
          <Link key={`${part}-${i}`} href={part} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
            {part}
          </Link>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}
