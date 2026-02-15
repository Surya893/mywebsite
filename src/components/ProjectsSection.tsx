import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { X } from "lucide-react";

const projects = [
  {
    title: "Open Air ANC",
    desc: "Open-environment noise cancellation system. Filed patent.",
    tag: "Patent",
    detail: "Designed and prototyped an active noise cancellation system that operates in open environments — where traditional ANC fails. Patent filed for the core acoustic control architecture.",
  },
  {
    title: "Digital MRV",
    desc: "Satellite-to-soil verification system for carbon restoration.",
    tag: "Shell",
    detail: "Built a measurement, reporting, and verification system that connects satellite imagery to ground-truth soil data, enabling transparent carbon credit validation at scale.",
  },
  {
    title: "Ecoligna",
    desc: "Transparent wood replacing glass. 70% energy reduction.",
    tag: "TKS Moonshot",
    detail: "Developed a transparent wood composite material that replaces glass in building facades, achieving 70% energy reduction through superior insulation and light transmission properties.",
  },
  {
    title: "Future of Alexa",
    desc: "Gen Z product strategy for Amazon's voice platform.",
    tag: "Amazon",
    detail: "Led product strategy research for Amazon's voice platform, identifying engagement patterns and proposing a Gen Z acquisition strategy for the Alexa ecosystem.",
  },
  {
    title: "Future of Banking",
    desc: "Redesigned CIBC for a generation that won't visit branches.",
    tag: "CIBC",
    detail: "Redesigned CIBC's digital banking experience for next-generation users, rethinking branch interactions, financial literacy integration, and mobile-first engagement.",
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 z-10 relative">
      <div className="max-w-3xl mx-auto space-y-4">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`reveal reveal-delay-${Math.min(i + 1, 5)} group cursor-pointer`}
            onClick={() => setSelected(i)}
          >
            <div className="p-6 md:p-8 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-foreground/15 hover:shadow-xl hover:shadow-foreground/[0.03] hover:-translate-y-0.5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground/60 font-medium tracking-wider uppercase whitespace-nowrap mt-1">
                  {p.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-lg w-full bg-card border border-border rounded-2xl p-8 md:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="text-xs text-muted-foreground/60 font-medium tracking-wider uppercase">
              {projects[selected].tag}
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-foreground tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {projects[selected].title}
            </h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {projects[selected].detail}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
