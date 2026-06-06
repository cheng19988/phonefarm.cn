import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminContactTable } from "@/components/admin-contact-table";
import { AdminProductRow } from "@/components/admin-product-row";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "管理后台",
  description: "广州手机农场管理面板",
  path: "/admin",
  noIndex: true,
});

export default async function AdminPage() {
  const admin = await requireAdmin();
  if (!admin) redirect("/login");

  const [users, orders, contacts, products] = await Promise.all([
    prisma.user.count(),
    prisma.order.count(),
    prisma.contactSubmission.count(),
    prisma.product.count(),
  ]);

  const recentOrders = await prisma.order.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
    include: { user: { select: { email: true } }, payment: true, items: { include: { product: { select: { name: true } } } } },
  });

  const recentContacts = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  const allProducts = await prisma.product.findMany({ orderBy: { name: "asc" } });

  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">管理后台</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "用户", value: users },
            { label: "订单", value: orders },
            { label: "咨询", value: contacts },
            { label: "产品", value: products },
          ].map((s) => (
            <div key={s.label} className="card p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">最近订单</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {recentOrders.map((o) => (
              <div key={o.id} className="card p-4 text-sm">
                <div className="flex justify-between">
                  <Link href={`/orders/${o.id}`} className="text-emerald-400">{o.orderNumber}</Link>
                  <span className="text-white">{o.status}</span>
                </div>
                <p className="text-slate-400 mt-1">{o.user.email} | ${o.totalUsd}</p>
                {o.payment && (
                  <p className="text-slate-500 mt-1">支付：{o.payment.paymentStatus} / {o.payment.verificationStatus}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <AdminContactTable
            contacts={recentContacts.map((c) => ({
              id: c.id,
              name: c.name,
              email: c.email,
              country: c.country,
              productInterest: c.productInterest,
              deviceQuantity: c.deviceQuantity,
              connectionMode: c.connectionMode,
              status: c.status,
              createdAt: c.createdAt.toISOString(),
              message: c.message,
            }))}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">产品库存</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="text-left py-2">产品</th>
                  <th className="text-left py-2">价格</th>
                  <th className="text-left py-2">库存</th>
                  <th className="text-left py-2">操作</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((p) => (
                  <AdminProductRow key={p.id} id={p.id} name={p.name} priceUsd={p.priceUsd} stock={p.stock} />
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4">使用 Prisma Studio 或 API 更新价格与库存：npx prisma studio</p>
        </section>
      </div>
    </div>
  );
}
