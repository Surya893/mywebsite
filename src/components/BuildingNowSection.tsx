import { useScrollReveal } from "@/hooks/useScrollReveal";

const signals = [
  { label: "Now", text: "Building open-environment acoustic control infrastructure at Whisperwave." },
  { label: null, text: "Targeting industrial and transit environments." },
  { label: null, text: "Designing v2 system architecture." },
  { label: null, text: "Researching LLMs at Columbia." },
  { label: null, text: "Advising at EVM Capital." },
  { label: null, text: "Partnering where alignment compounds." },
];

const BuildingNowSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="now" ref={ref} className="py-24 md:py-40 px-6 z-10 relative">
      <div className="max-w-2xl mx-auto">
        <p className="reveal text-xs tracking-[0.25em] uppercase text-muted-foreground/50 font-medium text-center mb-12">
          What I'm Building
        </p>
        <div className="space-y-4">
          {signals.map((s, i) => (
            <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex items-start gap-4`}>
              {s.label ? (
                <span className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-foreground/60 mt-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 pulse-dot inline-block" />
                  {s.label}
                </span>
              ) : (
                <span className="w-10 shrink-0" />
              )}
              <p className={`text-base md:text-lg leading-relaxed ${i === 0 ? "text-foreground font-medium" : "text-muted-foreground font-light"}`}>
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildingNowSection;
