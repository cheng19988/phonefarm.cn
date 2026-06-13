/** Chinese (zh-CN) content for domestic / Baidu SEO — 手机农场 keyword hub. */

export const ZH_HERO = {
  title: "广州手机农场 — 专业手机农场硬件厂家",
  subtitle:
    "真机手机农场设备直销：安卓主板盒(20节点)、32PCS整机盒、12PCS热插拔阵列、iPhone农场盒。工厂组装、QC老化、出口打包、ROM定制、AnyDesk远程安装。",
  eyebrow: "手机农场 · Phone Farm Hardware · 广州 · 自2017年",
};

export const ZH_INTRO = {
  heading: "什么是手机农场？",
  paragraphs: [
    "手机农场(Phone Farm)是将多台真机智能手机或Android手机主板集中安装在专用机箱内，由统一电源供电、联网，并通过群控软件在一台电脑上批量操控的硬件系统。",
    "与云手机、模拟器不同，真机手机农场使用物理设备，具备真实IMEI、传感器、GPU与网络栈，适合应用兼容性测试、游戏QA、多设备自动化与企业设备运维等合法场景。",
    "广州手机农场位于广东广州，工厂直销手机农场盒子与配套网络设备，服务国内外集成商、代理商、测试实验室与企业客户。",
  ],
};

export const ZH_PRODUCTS = [
  {
    name: "安卓主板盒 — 20节点手机农场机箱",
    slug: "motherboard-box",
    desc: "20块手机主板集成于金属机箱，无外屏/电池/摄像头，单盒约100W，尺寸55×38×16cm，约7kg。一台PC可控制3-5盒(60-100节点)。支持USB与OTG/LAN双模式。",
    params: ["20节点/盒", "220V ~100W", "USB + OTG/LAN", "1 PC控3-5盒"],
  },
  {
    name: "32PCS手机农场整机盒 — 高密度群控",
    slug: "phone-farm-box",
    desc: "32台设备统一机箱，三风扇散热，支持ROM定制(自动开机、ADB持久化)。适合中型测试实验室与批量QA团队。",
    params: ["32节点/盒", "三风扇散热", "ROM定制", "USB + OTG/LAN"],
  },
  {
    name: "12PCS手机阵列 — 热插拔抽屉评估款",
    slug: "phone-array-12pcs",
    desc: "12个热插拔抽屉，可装完整手机或主板，便于样品评估与频繁换机测试。可选内置PC与USB 2.0 HUB。",
    params: ["12抽屉", "热插拔", "整机或主板", "样品3-5天发货"],
  },
];

export const ZH_APPLICATIONS = [
  "移动应用与游戏兼容性测试",
  "Android/iOS开发与CI设备农场",
  "多设备自动化与QA工作流",
  "企业级设备运维与监控",
  "软件压力测试与回归验证",
  "OEM批量Provisioning与ROM验证",
  "社交媒体/营销工作流测试(合法用途)",
  "集成商与代理商批量硬件供应",
];

export const ZH_FACTORY = {
  heading: "广州工厂能力",
  items: [
    "主板盒组装与插槽级老化测试",
    "USB/OTG-LAN布线与端口标识",
    "ROM定制协调(自动开机、ADB持久化)",
    "出口泡沫包装与商业发票",
    "AnyDesk远程安装与群控软件对接",
    "OEM机柜与混合Android/iOS实验室定制",
  ],
};

export const ZH_FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "什么是手机农场?",
    answer:
      "手机农场(Phone Farm)是将多台真机智能手机集中供电、联网、统一管理的硬件系统。通过群控软件,一台电脑可同时操控数十台甚至上百台设备,适用于应用兼容性测试、批量自动化测试、企业设备运维等合法业务场景。广州手机农场提供整机盒、主板盒及配套硬件方案。",
  },
  {
    question: "什么是真机手机农场?",
    answer:
      "真机手机农场使用物理智能手机或手机主板运行,具备真实 IMEI、传感器、GPS 和硬件指纹,而非云手机虚拟实例或软件模拟器。广州手机农场所有产品均为真机硬件,工厂直销,适合对设备真实性和稳定性要求较高的企业客户。",
  },
  {
    question: "手机农场和云手机有什么区别?",
    answer:
      "云手机是在共享服务器上运行的虚拟 Android 实例,多用户共用底层基础设施。真机手机农场使用独立物理设备,每台设备拥有独立硬件特征,在传感器精度、GPU行为与长期稳定运行方面更具优势。",
  },
  {
    question: "手机农场和模拟器有什么区别?",
    answer:
      "模拟器在电脑上通过软件模拟 Android/iOS 环境,平台可检测到虚拟环境特征。真机手机农场使用真实硬件,传感器与系统行为更接近真实用户设备,在应用测试与兼容性验证方面更具优势。",
  },
  {
    question: "支持安卓手机农场吗?",
    answer:
      "支持。我们提供安卓主板盒(20节点)、32PCS整机盒、12PCS手机阵列等多种规格,兼容 Samsung 等主流主板,支持 ADB 调试、群控软件和 ROM 定制。一台 PC 可控制 3-5 个盒子,轻松扩展至数百台设备。",
  },
  {
    question: "支持 iPhone 手机农场吗?",
    answer:
      "支持。我们提供 iPhone 手机农场整机盒方案,采用热插拔抽屉设计,适用于 iOS 应用测试、TestFlight 验证及企业级多设备管理。详情请联系销售获取配置方案。",
  },
  {
    question: "可以定制数量和配置吗?",
    answer:
      "可以。我们支持定制节点数量、机箱尺寸、电源方案、散热布局、机柜规格及 ROM 功能。企业客户可提供设备型号、目标数量和业务场景,工程团队将出具 OEM 定制方案和报价。",
  },
  {
    question: "是否支持远程控制与群控配置?",
    answer:
      "支持。包括屏幕镜像、批量 APK 安装、ADB 命令、设备分组管理,以及 USB 模式与 OTG/LAN 以太网模式。购买硬件后可获得 AnyDesk 远程安装指导直至成功部署。",
  },
  {
    question: "是否支持样品?最小起订量是多少?",
    answer:
      "支持样品订单,通常 3-5 个工作日发货。标准产品 MOQ 为 1 台(样品);批量采购 5 台起享优惠,企业机柜部署通常 10 台以上配备专属项目经理。",
  },
  {
    question: "如何付款?",
    answer:
      "三款标准SKU支持在线 USDT(Tron TRC20,最低 10 USDT)结账。批量采购支持银行转账(T/T)、Wise、PayPal 及合同开票。请联系销售获取对公账户与合同模板。",
  },
  {
    question: "交付周期多久?",
    answer:
      "现货标准款 3-5 个工作日发货。定制 ROM 或 OEM 配置 7-15 个工作日。国内快递 1-3 天;国际快递 3-7 天;海运 15-30 天。",
  },
  {
    question: "如何联系广州手机农场?",
    answer:
      "WhatsApp: +852 6215 5642 · Telegram: @huicheng1998 · 邮箱: qiuxui646@gmail.com · 地址: 中国广州。工作日 24 小时内回复,欢迎批量采购与定制咨询。联系页: /contact",
  },
  {
    question: "手机农场有哪些应用场景?",
    answer:
      "常见合法场景包括:软件兼容性测试、Android/iOS 应用开发调试、企业级设备实验室、自动化回归测试、游戏兼容性验证、OEM 批量 provisioning 等。硬件仅供开发测试等合法用途。",
  },
  {
    question: "控制 3-5 个盒子需要什么电脑配置?",
    answer:
      "推荐多核 CPU(如 E5-2680 V2 级别及以上)、32GB 内存、Windows 10/11、充足 USB 2.0 接口。20 台以上设备建议搭配企业软路由,避免普通路由器性能不足。详见安装手册 /manual",
  },
  {
    question: "质保与售后政策是什么?",
    answer:
      "机箱质保 12 个月,手机主板质保 90 天。质保期内硬件问题可免费更换(买家承担双向运费)。提供免费远程协助(AnyDesk),指导连接部署直至正常使用。",
  },
  {
    question: "电脑提示 USB 资源不足怎么办?",
    answer:
      "使用 Windows 10/11;数据线接 USB 2.0 口;使用带独立供电的 USB 2.0 扩展卡;或迁移至 OTG/LAN 模式。详见 /blog/usb-mode-vs-otg-lan-mode",
  },
];

export const ZH_ARTICLE_LINKS = [
  { title: "手机农场部署指南(英文)", href: "/phone-farming" },
  { title: "USB模式 vs OTG/LAN模式", href: "/blog/usb-mode-vs-otg-lan-mode" },
  { title: "主板盒 vs 32PCS整机盒选型", href: "/blog/when-choose-20-node-motherboard-vs-32pcs-chassis" },
  { title: "手机农场散热与功耗", href: "/blog/phone-farm-cooling-power-chassis-vs-open-racks" },
  { title: "手机农场批发与批量订单", href: "/blog/phone-farm-wholesale-bulk-order" },
  { title: "安装手册(英文)", href: "/manual" },
];
