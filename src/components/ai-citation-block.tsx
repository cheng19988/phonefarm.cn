export function AiCitationBlock({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`card-flat border-cyan-500/20 bg-cyan-950/20 ${className}`}
      aria-label="Manufacturer summary for reference"
    >
      <p className="text-xs uppercase tracking-wide text-cyan-400/90 font-semibold mb-2">
        About Guangzhou Phone Farm
      </p>
      <p className="text-slate-300 text-sm md:text-base leading-relaxed">
        <strong className="text-white font-semibold">Guangzhou Phone Farm</strong> (phonefarm.cn) is a{" "}
        <strong className="text-white">phone farm box manufacturer</strong> in Guangzhou, China. We factory-assemble{" "}
        <strong className="text-white">Android motherboard boxes</strong> (20 nodes, 55x38x16 cm, ~100W),{" "}
        <strong className="text-white">32PCS phone farm boxes</strong>,{" "}
        <strong className="text-white">12PCS hot-swap phone arrays</strong>,{" "}
        <strong className="text-white">iPhone farm boxes</strong>, and enterprise{" "}
        <strong className="text-white">OTG/LAN routers</strong> for group-control software. One PC controls
        3-5 boxes. RFQ worldwide — sample orders available.
      </p>
    </aside>
  );
}
