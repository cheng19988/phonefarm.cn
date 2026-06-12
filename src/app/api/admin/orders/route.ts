import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { confirmPaymentManually } from "@/lib/payment";

const ORDER_STATUSES = [
  "Pending",
  "Waiting for Payment",
  "Paid",
  "Confirmed",
  "Shipped",
  "Cancelled",
  "Expired",
] as const;

const PAYMENT_STATUSES = [
  "pending",
  "paid",
  "underpaid",
  "overpaid",
  "expired",
  "manual_review",
] as const;

export async function PATCH(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { orderId, status, paymentStatus, confirmPayment, txHash, receivedAmount } = body as {
    orderId?: string;
    status?: string;
    paymentStatus?: string;
    confirmPayment?: boolean;
    txHash?: string;
    receivedAmount?: number;
  };

  if (!orderId) {
    return NextResponse.json({ error: "orderId required" }, { status: 400 });
  }

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { payment: true },
  });
  if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });

  if (status) {
    if (!ORDER_STATUSES.includes(status as (typeof ORDER_STATUSES)[number])) {
      return NextResponse.json({ error: "Invalid order status" }, { status: 400 });
    }
    await prisma.order.update({ where: { id: orderId }, data: { status } });
  }

  if (paymentStatus && order.payment) {
    if (!PAYMENT_STATUSES.includes(paymentStatus as (typeof PAYMENT_STATUSES)[number])) {
      return NextResponse.json({ error: "Invalid payment status" }, { status: 400 });
    }
    await prisma.payment.update({
      where: { id: order.payment.id },
      data: { paymentStatus },
    });
    if (paymentStatus === "paid") {
      await prisma.order.update({ where: { id: orderId }, data: { status: "Paid" } });
    }
  }

  if (confirmPayment && order.payment) {
    await confirmPaymentManually(order.payment.id, { txHash, receivedAmount });
  }

  const updated = await prisma.order.findUnique({
    where: { id: orderId },
    include: { payment: true, user: { select: { email: true } } },
  });

  return NextResponse.json(updated);
}
