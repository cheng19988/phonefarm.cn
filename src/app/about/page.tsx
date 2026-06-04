import Image from "next/image";
import { ContactCTA } from "@/components/shared";
import { buildMetadata } from "@/lib/seo";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "关于我们 - 广州手机农场厂家",
  description: SITE.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-4xl">
        <h1 className="section-title">关于广州手机农场</h1>
        <p className="text-xl text-slate-300 mb-4 leading-relaxed">{SITE.description}</p>
        <p className="text-slate-400 mb-8">{SITE.nameEn} · {SITE.location} · 自 {SITE.since} 年起服务国内外客户</p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "真机硬件环境", desc: "所有产品使用物理手机或主板，非云手机、非模拟器，保障设备真实性与平台兼容性。" },
            { title: "稳定批量部署", desc: "集中 220V 供电、多风扇散热、工厂 QC 老化测试，保障 7x24 连续运行。" },
            { title: "OEM 定制生产", desc: "定制机箱、ROM、节点数量、机柜规格，满足企业与代理商差异化需求。" },
            { title: "企业对公合作", desc: "支持商务合同、对公转账、批量采购流程及长期售后技术支持。" },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <h2 className="font-bold text-white mb-2">{item.title}</h2>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">广州工厂实景</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {[
            { src: IMAGES.companyFront, label: "前台" },
            { src: IMAGES.companyOffice, label: "办公室" },
            { src: IMAGES.companyMeeting, label: "会议室" },
            { src: IMAGES.companyWorkshop, label: "生产车间" },
            { src: IMAGES.companyWarehouse, label: "仓库" },
            { src: IMAGES.workshop, label: "组装测试" },
          ].map((img) => (
            <div key={img.label} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src={img.src} alt={img.label} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-3">
                <span className="text-white text-sm">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        <ContactCTA title="欢迎商务洽谈与验厂" />
      </div>
    </div>
  );
}
