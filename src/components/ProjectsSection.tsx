import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
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

const experiments = [
  {
    title: "ANC w/ Matplotlib",
    desc: "Software layer for ANC using AI and Matplotlib visualization.",
    tag: "Software",
    detail: "Built the software layer for an active noise cancellation system, leveraging AI for signal processing and Matplotlib for real-time acoustic visualization and analysis.",
  },
  {
    title: "Product Recommendation using ML",
    desc: "ML-powered product recommendation model.",
    tag: "ML",
    detail: "Developed a machine learning product recommendation model and published related links and resources on GitHub for community use.",
  },
  {
    title: "HDR Using ML",
    desc: "ML model that predicts handwritten numbers.",
    tag: "ML",
    detail: "Built a machine learning model that predicts the value of handwritten numbers and converts them into their respective keyboard versions using deep learning techniques.",
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();
  const [selected, setSelected] = useState<{ list: "main" | "exp"; index: number } | null>(null);

  const selectedProject = selected
    ? selected.list === "main" ? projects[selected.index] : experiments[selected.index]
    : null;

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const Card = ({ p, onClick, i }: { p: typeof projects[0]; onClick: () => void; i: number }) => (
    <div
      className={`reveal reveal-delay-${Math.min(i + 1, 5)} group cursor-pointer`}
      onClick={onClick}
    >
      <div className="p-5 md:p-7 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-foreground/15 hover:shadow-xl hover:shadow-foreground/[0.03] hover:-translate-y-0.5 hover:border-l-accent-foreground/30 hover:border-l-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base md:text-lg font-semibold text-foreground tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {p.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              {p.desc}
            </p>
          </div>
          <span className="text-xs text-muted-foreground/60 font-medium tracking-wider uppercase whitespace-nowrap mt-0.5">
            {p.tag}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" ref={ref} className="py-24 md:py-40 px-6 z-10 relative">
      <div className="max-w-3xl mx-auto">
        <p className="reveal text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-medium text-center mb-12">
          My Work
        </p>
        <div className="space-y-3">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} onClick={() => setSelected({ list: "main", index: i })} />
          ))}
        </div>

        <p className="reveal text-xs tracking-[0.25em] uppercase text-muted-foreground/40 font-medium text-center mt-16 mb-8">
          Experiments
        </p>
        <div className="space-y-3">
          {experiments.map((p, i) => (
            <Card key={p.title} p={p} i={i} onClick={() => setSelected({ list: "exp", index: i })} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-lg w-full bg-card border border-border rounded-2xl p-8 md:p-10 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent text-accent-foreground">
              {selectedProject.tag}
            </span>
            <h3 id="project-title" className="mt-4 text-2xl font-semibold text-foreground tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {selectedProject.title}
            </h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {selectedProject.detail}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
