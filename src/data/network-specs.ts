/** Enterprise router / switch reference specs for OTG-LAN phone farm deployments. */

export type SpecTableData = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export const ENTERPRISE_ROUTER_TABLE: SpecTableData = {
  caption: "Enterprise managed routers for mobile phone farms (300–10,000 devices)",
  headers: [
    "Model",
    "Ethernet",
    "SFP",
    "RAM",
    "Flash",
    "USB",
    "Size",
    "Power",
    "Draw",
    "Manageable APs",
    "Farm capacity",
  ],
  rows: [
    ["IK-MSG100", "6×2500Mbps", "—", "4G", "16G", "2×USB2.0", "440×250×44mm 1U", "AC 100–240V", "25W", "512", "300"],
    ["IK-MSG200", "6×2500Mbps", "—", "4G", "16G", "2×USB2.0", "1U", "AC", "25W", "1024", "500"],
    ["IK-MSG260", "6×2500Mbps", "—", "4G", "16G", "2×USB3.0", "1U", "AC", "30W", "512", "800"],
    ["IK-MSG300", "6×2500Mbps", "—", "4G", "16G", "2×USB3.0", "1U", "AC", "70W", "2048", "1500"],
    ["IK-MSG400", "6×2500Mbps", "—", "8G", "32G", "2×USB3.0", "1U", "AC", "30W", "2048", "1500"],
    ["IK-MSG500", "6×2500Mbps", "—", "16G", "32G", "2×USB3.0", "1U", "AC", "35W", "2048", "2500"],
    ["IK-MSG460X", "6×2500Mbps", "2×10G SFP", "8G", "32G", "2×USB3.0", "435×435×88mm 2U", "AC", "60W", "2048", "2000"],
    ["IK-MSG560X", "6×2500Mbps", "2×10G SFP", "16G", "32G", "2×USB3.0", "2U", "AC", "60W", "2048", "5000"],
    ["IK-MSG600X", "6×2500Mbps", "2×10G SFP", "32G", "32G", "2×USB3.0", "2U", "AC", "80W", "2048", "10000"],
  ],
};

export const STANDARD_SWITCH_TABLE: SpecTableData = {
  caption: "Standard enterprise switches (pair with soft router gateway)",
  headers: ["Model", "Tier", "Ports", "SFP", "Backplane", "MAC", "PPS", "Size", "Power"],
  rows: [
    ["IK-J7028", "L2", "24×10/100/1000M", "4×1G SFP", "56Gbps", "8K", "41.66Mbps", "440×208×44mm", "36W"],
    ["IK-J7028E", "L3", "24×10/100/1000M", "4×1G/10G SFP", "336Gbps", "8K", "95.2Mpps", "440×330×44.5mm", "24W"],
    ["IK-J7028ES", "L3", "24×10/100/1000M", "4×1G/10G SFP + 8 multiplex RJ45", "336Gbps", "16K", "95.23Mpps", "440×205×44mm", "39W"],
    ["IK-J7052", "L3", "48×10/100/1000M", "4×1G/10G SFP+", "336Gbps", "16K", "131Mpps", "440×330×44mm", "72W"],
  ],
};

export const POE_SWITCH_TABLE: SpecTableData = {
  caption: "PoE enterprise switches",
  headers: ["Model", "Ports", "SFP", "Size", "Power", "PoE budget", "Backplane", "PPS"],
  rows: [
    ["IK-J3126", "24×G", "2×1G", "410×185×50mm", "280W", "300W", "52Gbps", "38.7Mpps"],
    ["IK-J3126H", "24×G", "2×1G", "410×185×50mm", "400W", "380W", "52Gbps", "38.7Mpps"],
    ["IK-J7110", "8×G", "2×1G", "270×180×45mm", "96W", "120W", "20Gbps", "14.88Mpps"],
    ["IK-J7120", "16×G", "4×1G", "440×204×44mm", "300W", "280W", "40Gbps", "29.76Mpps"],
    ["IK-J7128", "24×G", "4×1G", "445×285×44mm", "400W", "270W", "56Gbps", "41.66Mbps"],
  ],
};
