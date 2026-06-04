import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "隐私政策",
  description: `${SITE.name}隐私政策 - 我们如何收集、使用和保护您的个人信息。`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-3xl prose-content">
        <h1 className="section-title">隐私政策</h1>
        <p>最后更新: 2026 年 6 月</p>
        <h2>我们收集的信息</h2>
        <p>当您联系我们或下单时,我们会收集姓名、邮箱、电话、国家及咨询详情。支付信息仅包含 USDT 交易哈希,我们不存储信用卡数据。</p>
        <h2>信息使用方式</h2>
        <p>我们使用您的信息处理订单、提供客户支持并改进产品与服务。我们不会向第三方出售您的个人数据。</p>
        <h2>数据安全</h2>
        <p>我们采用行业标准安全措施保护您的数据。订单与支付记录安全存储于数据库中。</p>
        <h2>联系我们</h2>
        <p>隐私相关咨询请发送邮件至 qiuxui646@gmail.com。</p>
      </div>
    </div>
  );
}
