import { formatListPrice } from "@/lib/product-pricing";

type ProductBuyFormProps = {
  slug: string;
  priceUsd: number;
  stock: number;
};

/** POST to /api/orders — requires login; creates USDT payment window. */
export function ProductBuyForm({ slug, priceUsd, stock }: ProductBuyFormProps) {
  if (priceUsd <= 0 || stock <= 0) return null;

  return (
    <form action="/api/orders" method="POST" className="inline-flex">
      <input type="hidden" name="productSlug" value={slug} />
      <input type="hidden" name="action" value="buy" />
      <button type="submit" className="btn-secondary min-h-[48px]">
        Buy Now · {formatListPrice(priceUsd)} USDT
      </button>
    </form>
  );
}
