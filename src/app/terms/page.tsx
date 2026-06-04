import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "使用条款",
  description: `${SITE.name}网站使用条款、产品购买及 USDT 支付政策。`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-3xl prose-content">
        <h1 className="section-title">使用条款</h1>
        <p>最后更新: 2026 年 6 月</p>
        <h2>产品与订单</h2>
        <p>所有产品均为{SITE.name}在中国广州生产的真机手机农场硬件。价格以 USD 展示。订单受库存影响,定制组装产品发货后进入售后阶段。</p>
        <h2>付款</h2>
        <p>在线订单接受 Tron TRC20 网络 USDT 支付,最低 10 USDT。订单 30 分钟内未到账将自动过期。未经区块链验证不会自动确认付款。</p>
        <h2>物流</h2>
        <p>支持全球发货。快递 3-7 天,海运 15-30 天。进口关税由买方承担。我们可协助联系国际货代。</p>
        <h2>质保</h2>
        <p>机箱 12 个月质保,主板 90 天质保。误用、私自改装及正常损耗不在保修范围内。质保期内提供免费远程协助。</p>
        <h2>合法用途</h2>
        <p>硬件仅供开发测试等合法用途。用户须遵守当地法律法规,{SITE.name}不对违规使用承担责任。</p>
        <h2>联系我们</h2>
        <p>条款相关问题: qiuxui646@gmail.com</p>
      </div>
    </div>
  );
}
