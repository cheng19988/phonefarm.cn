import Link from "next/link";

/** Shown on product pages with online USDT checkout. */
export function CheckoutStepsNote() {
  return (
    <div className="text-xs text-slate-500 space-y-2 mt-3 max-w-lg border-t border-slate-800 pt-3">
      <p className="text-slate-400 font-medium">Online checkout (3 standard SKUs only)</p>
      <ol className="list-decimal list-inside space-y-1 leading-relaxed">
        <li>Click Checkout — sign in or register (free account).</li>
        <li>Send exactly the USDT amount shown at checkout (1:1 with USD list price) on Tron TRC20 within 30 minutes.</li>
        <li>Automatic on-chain verification when enabled; otherwise manual confirmation by sales (include order number + tx hash).</li>
      </ol>
      <p>
        Bulk, OEM or custom ROM?{" "}
        <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">
          Submit RFQ
        </Link>{" "}
        instead — most SKUs are quote-based.
      </p>
    </div>
  );
}
