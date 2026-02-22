import { useScrollReveal } from "@/hooks/useScrollReveal";

const fragments = [
  { text: "The best infrastructure is invisible until it fails." },
  { text: "Conviction is a signal. Doubt is a feature." },
  { text: "Systems outlast strategies." },
  { text: "Build for the constraint, not the consensus." },
];

const WritingSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="writing" ref={ref} className="py-24 md:py-40 px-6 z-10 relative">
      <div className="max-w-2xl mx-auto">
        <p className="reveal text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-medium text-center mb-12">
          Surya's Sonnets
        </p>
        <div className="space-y-1">
          {fragments.map((f, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} block`}
            >
              <div className="flex items-center gap-4 py-4 border-b border-border/30">
                <p className="text-base md:text-lg text-muted-foreground font-light italic leading-relaxed">
                  "{f.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
