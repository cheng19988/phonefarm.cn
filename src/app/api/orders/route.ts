import { NextRequest, NextResponse } from "next/server";
import { ensureDatabase } from "@/lib/ensure-db";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { PAYMENT } from "@/lib/config";
import { createPaymentExpiry, initialVerificationStatus, usdToUsdt } from "@/lib/payment";

function orderNumber() {
  return `HC${Date.now().toString(36).toUpperCase()}`;
}

export async function POST(req: NextRequest) {
  await ensureDatabase();
  const form = await req.formData();
  const productSlug = String(form.get("productSlug") || "");
  const action = String(form.get("action") || "buy");

  const session = await getSession();
  if (!session) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", productSlug ? `/products/${productSlug}#buy` : "/products");
    return NextResponse.redirect(loginUrl);
  }

  const product = await prisma.product.findUnique({ where: { slug: productSlug } });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  if (action === "buy") {
    if (product.priceUsd <= 0) {
      return NextResponse.json({ error: "This SKU requires RFQ pricing" }, { status: 400 });
    }
    if (product.stock <= 0) {
      return NextResponse.json({ error: "Out of stock — contact sales" }, { status: 400 });
    }
  }

  const order = await prisma.order.create({
    data: {
      orderNumber: orderNumber(),
      userId: session.id,
      status: action === "buy" ? "Waiting for Payment" : "Pending",
      totalUsd: product.priceUsd,
      items: {
        create: [{ productId: product.id, quantity: 1, unitPrice: product.priceUsd }],
      },
    },
  });

  if (action === "buy") {
    const amount = usdToUsdt(product.priceUsd);
    await prisma.$transaction([
      prisma.payment.create({
        data: {
          orderId: order.id,
          userId: session.id,
          productId: product.id,
          expectedAmount: amount,
          paymentAddress: PAYMENT.address,
          paymentNetwork: PAYMENT.network,
          paymentCurrency: PAYMENT.currency,
          paymentStatus: "pending",
          verificationStatus: initialVerificationStatus(),
          expiresAt: createPaymentExpiry(),
        },
      }),
      prisma.product.update({
        where: { id: product.id },
        data: { stock: { decrement: 1 } },
      }),
    ]);
    return NextResponse.redirect(new URL(`/orders/${order.id}`, req.url));
  }

  return NextResponse.redirect(new URL(`/orders/${order.id}`, req.url));
}
