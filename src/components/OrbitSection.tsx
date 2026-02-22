import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const nodes = [
  { label: "AI Infrastructure", tooltip: "Foundation models adapted for physical-world sensor data." },
  { label: "Applied Systems", tooltip: "Hardware-software integration for real-environment deployment." },
  { label: "Venture Architecture", tooltip: "Structuring capital around deep-tech conviction bets." },
  { label: "Long-Term Thinking", tooltip: "Compounding decisions over decades, not quarters." },
  { label: "Writing", tooltip: "Sharpening conviction through public reasoning." },
];

const OrbitSection = () => {
  const ref = useScrollReveal();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="orbit" ref={ref} className="relative py-24 md:py-40 px-6 z-10">
      <div className="max-w-4xl mx-auto">
        <p className="reveal text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-medium text-center mb-12">
          Focus Areas
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {nodes.map((node, i) => (
            <div
              key={node.label}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} orbit-node relative`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={`px-5 py-3 md:px-7 md:py-4 rounded-full border border-border/60 bg-card/50 backdrop-blur-sm transition-all duration-300 cursor-default ${hovered === i ? "border-accent-foreground/20 shadow-lg shadow-accent/10" : ""}`}>
                <span className="text-sm md:text-base font-medium tracking-wide text-foreground/80">
                  {node.label}
                </span>
              </div>
              {/* Tooltip */}
              <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 px-4 py-2.5 rounded-lg bg-card border border-border text-xs text-muted-foreground leading-relaxed max-w-[220px] text-center transition-all duration-200 pointer-events-none z-20 ${hovered === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
                {node.tooltip}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrbitSection;
