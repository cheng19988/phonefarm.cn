import Link from "next/link";
import {
  ANDROID_MODEL_GUIDANCE,
  BUYER_ESSENTIALS,
  PHYSICAL_SPECS,
  getBuyerEssentialsForProduct,
  getPhysicalSpec,
} from "@/data/buyer-checklist";
import { FAQAccordion } from "@/components/commerce";

type Props = {
  /** When set, highlights SKU-specific dimensions/weight/power in intro table. */
  productSlug?: string;
  /** compact = accordion only; full = table + model guidance + accordion */
  variant?: "compact" | "full";
};

export function BuyerEssentials({ productSlug, variant = "full" }: Props) {
  const items = productSlug ? getBuyerEssentialsForProduct(productSlug) : BUYER_ESSENTIALS;
  const highlight = productSlug ? getPhysicalSpec(productSlug) : undefined;

  return (
    <div className="space-y-8">
      {variant === "full" && (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[var(--border)] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[var(--surface)] text-left">
                  <th className="px-4 py-3 text-slate-400 font-medium">SKU</th>
                  <th className="px-4 py-3 text-slate-400 font-medium">Carton size</th>
                  <th className="px-4 py-3 text-slate-400 font-medium">Weight</th>
                  <th className="px-4 py-3 text-slate-400 font-medium">Power (220V)</th>
                  <th className="px-4 py-3 text-slate-400 font-medium">1 PC control</th>
                </tr>
              </thead>
              <tbody>
                {PHYSICAL_SPECS.map((row) => (
                  <tr
                    key={row.slug}
                    className={`border-t border-[var(--border)] ${highlight?.slug === row.slug ? "bg-cyan-500/10" : ""}`}
                  >
                    <td className="px-4 py-3 text-white font-medium">
                      <Link href={`/products/${row.slug}`} className="hover:text-cyan-400">
                        {row.name.split(" (")[0]}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-slate-300">{row.cartonSize}</td>
                    <td className="px-4 py-3 text-slate-300">{row.weight}</td>
                    <td className="px-4 py-3 text-slate-300">{row.power}</td>
                    <td className="px-4 py-3 text-slate-300">{row.pcControl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-flat">
            <h3 className="font-bold text-white mb-3">Supported phone models (Android & iOS)</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">{ANDROID_MODEL_GUIDANCE.summary}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">{ANDROID_MODEL_GUIDANCE.typical}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{ANDROID_MODEL_GUIDANCE.howToSpecify}</p>
            <p className="text-slate-500 text-xs mt-3">{ANDROID_MODEL_GUIDANCE.iphoneNote}</p>
          </div>
        </>
      )}

      <FAQAccordion
        items={items.map((item) => ({ question: item.question, answer: item.answer }))}
      />
    </div>
  );
}
