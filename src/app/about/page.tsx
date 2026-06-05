import Image from "next/image";
import { ContactCTA } from "@/components/shared";
import { buildMetadata } from "@/lib/seo";
import { IMAGES } from "@/lib/images";
import { SITE, CONTACT } from "@/lib/config";

export const metadata = buildMetadata({
  title: "关于我们 - 广州手机农场厂家",
  description:
    "了解广州手机农场：中国广州真机手机农场硬件厂家，自 2017 年起提供主板盒、整机盒、OEM 定制与企业批量交付，欢迎验厂与商务洽谈。",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-4xl">
        <h1 className="section-title">关于广州手机农场</h1>
        <p className="text-xl text-slate-300 mb-4 leading-relaxed">
          广州手机农场位于{SITE.address}，自 {SITE.since} 年起专注真机手机农场硬件研发、组装与交付。我们服务国内集成商、海外采购商及企业设备实验室，提供从样品评估到批量部署的完整支持。
        </p>
        <p className="text-slate-400 mb-8">{SITE.nameEn} · 工厂直销 · 支持对公合同与 OEM 定制</p>

        <div className="card p-6 mb-12">
          <h2 className="font-bold text-white mb-4">企业信息</h2>
          <dl className="grid sm:grid-cols-2 gap-4 text-sm">
            <div><dt className="text-slate-500">品牌名称</dt><dd className="text-white">{SITE.name}</dd></div>
            <div><dt className="text-slate-500">所在地</dt><dd className="text-white">{SITE.address}</dd></div>
            <div><dt className="text-slate-500">业务方向</dt><dd className="text-white">真机手机农场硬件 · OEM 定制 · 批量交付</dd></div>
            <div><dt className="text-slate-500">销售联系</dt><dd className="text-white">{CONTACT.phone} · {CONTACT.email}</dd></div>
          </dl>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "真机硬件环境", desc: "产品基于物理手机或主板运行，适用于应用测试、兼容性验证与企业级设备实验室，非云手机或模拟器方案。" },
            { title: "稳定批量部署", desc: "220V 集中供电、散热与 QC 老化测试，单盒 20–32 节点，单 PC 可管理多盒，适合规模化部署。" },
            { title: "OEM 定制生产", desc: "支持定制机箱规格、节点数量、ROM 功能与机柜集成，按项目出具配置清单与报价。" },
            { title: "交付与售后", desc: "现货 3–5 个工作日发货，定制 7–15 天；提供远程安装指导、AnyDesk 协助及质保期内技术支持。" },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <h2 className="font-bold text-white mb-2">{item.title}</h2>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">工厂实景</h2>
        <p className="text-slate-400 text-sm mb-4">以下为广州办公与生产环境实拍，欢迎预约商务洽谈与验厂。</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {[
            { src: IMAGES.companyFront, label: "前台" },
            { src: IMAGES.companyOffice, label: "办公室" },
            { src: IMAGES.companyMeeting, label: "会议室" },
            { src: IMAGES.companyWorkshop, label: "生产车间" },
            { src: IMAGES.companyWarehouse, label: "仓库" },
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
