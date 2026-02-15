import { useScrollReveal } from "@/hooks/useScrollReveal";

const nodes = [
  { label: "AI Infrastructure" },
  { label: "Applied Systems" },
  { label: "Venture Architecture" },
  { label: "Long-Term Thinking" },
  { label: "Writing" },
];

const OrbitSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="orbit" ref={ref} className="relative py-20 md:py-32 px-6 z-10">
      <div className="max-w-4xl mx-auto">
        <p className="reveal text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-medium text-center mb-10">
          Focus Areas
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {nodes.map((node, i) => (
            <div
              key={node.label}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} orbit-node`}
            >
              <div className="px-5 py-3 md:px-7 md:py-4 rounded-full border border-border/60 bg-card/50 backdrop-blur-sm">
                <span className="text-sm md:text-base font-medium tracking-wide text-foreground/80">
                  {node.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrbitSection;
