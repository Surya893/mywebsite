import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const nodes = [
  { label: "AI Infrastructure", desc: "Systems that process physical-world signals at scale." },
  { label: "Applied Systems", desc: "Hardware-software integration for real environments." },
  { label: "Venture Architecture", desc: "Structuring technology for enterprise distribution." },
  { label: "Long-Term Thinking", desc: "Infrastructure decisions that compound over decades." },
  { label: "Writing", desc: "Articulating conviction through structured thought." },
];

const OrbitSection = () => {
  const ref = useScrollReveal();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {nodes.map((node, i) => (
            <div
              key={node.label}
              className={`reveal reveal-delay-${i + 1} orbit-node relative group cursor-default`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="px-5 py-3 md:px-7 md:py-4 rounded-full border border-border/60 bg-card/50 backdrop-blur-sm transition-all duration-500 group-hover:border-foreground/20 group-hover:shadow-lg group-hover:shadow-foreground/5">
                <span className="text-sm md:text-base font-medium tracking-wide text-foreground/80 group-hover:text-foreground transition-colors">
                  {node.label}
                </span>
              </div>
              {/* Tooltip */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 px-4 py-2.5 rounded-lg bg-card border border-border shadow-lg max-w-[240px] text-center transition-all duration-300 pointer-events-none ${
                  hovered === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                }`}
              >
                <p className="text-xs text-muted-foreground leading-relaxed">{node.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrbitSection;
