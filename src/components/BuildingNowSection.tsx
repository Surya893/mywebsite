import { useScrollReveal } from "@/hooks/useScrollReveal";

const signals = [
  { label: "Now", text: "Building open-environment acoustic control infrastructure." },
  { label: null, text: "Targeting industrial and transit environments." },
  { label: null, text: "Designing v2 system architecture." },
  { label: null, text: "Partnering where alignment compounds." },
  { label: null, text: "Scaling deliberately." },
];

const BuildingNowSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 z-10 relative">
      <div className="max-w-2xl mx-auto space-y-5">
        {signals.map((s, i) => (
          <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex items-start gap-4`}>
            {s.label ? (
              <span className="text-xs font-semibold tracking-wider uppercase text-foreground/60 mt-0.5 w-10 shrink-0">
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
    </section>
  );
};

export default BuildingNowSection;
