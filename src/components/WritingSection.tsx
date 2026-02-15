import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const fragments = [
  { text: "The best infrastructure is invisible until it fails.", url: "#" },
  { text: "Conviction is a signal. Doubt is a feature.", url: "#" },
  { text: "Systems outlast strategies.", url: "#" },
  { text: "Build for the constraint, not the consensus.", url: "#" },
];

const WritingSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 z-10 relative">
      <div className="max-w-2xl mx-auto space-y-6">
        {fragments.map((f, i) => (
          <a
            key={i}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`reveal reveal-delay-${Math.min(i + 1, 5)} block group`}
          >
            <div className="flex items-center justify-between gap-4 py-4 border-b border-border/30 transition-colors group-hover:border-foreground/20">
              <p className="text-base md:text-lg text-muted-foreground group-hover:text-foreground transition-colors font-light italic leading-relaxed">
                {f.text}
              </p>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-foreground/60 transition-all shrink-0" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WritingSection;
