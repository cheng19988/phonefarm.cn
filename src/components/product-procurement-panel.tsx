import { getProductProcurement } from "@/data/buyer-checklist";

type Props = { slug: string };

/** Server-rendered procurement block for product detail pages (Google / buyer crawl). */
export function ProductProcurementPanel({ slug }: Props) {
  const p = getProductProcurement(slug);

  const rows: { label: string; value: string }[] = [
    { label: "MOQ", value: p.moq },
    { label: "Lead time", value: p.leadTime },
    { label: "Packing size", value: p.packingSize },
    { label: "Gross weight", value: p.grossWeight },
    { label: "Voltage", value: p.voltage },
    { label: "Warranty", value: p.warranty },
    { label: "Shipping method", value: p.shippingMethod },
    { label: "Payment process", value: p.paymentProcess },
  ];

  return (
    <section className="card-flat" aria-labelledby="procurement-heading">
      <h2 id="procurement-heading" className="text-xl font-bold text-white mb-4">
        Procurement & export terms
      </h2>
      <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="text-slate-500 mb-0.5">{row.label}</dt>
            <dd className="text-slate-200 leading-relaxed">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
