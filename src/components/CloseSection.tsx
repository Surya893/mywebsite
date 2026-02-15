import { useScrollReveal } from "@/hooks/useScrollReveal";

const socials = [
  { label: "LinkedIn", url: "https://linkedin.com/in/suryaseshamaddula", icon: "Li" },
  { label: "X", url: "https://x.com/suryamaddula_", icon: "X" },
  { label: "GitHub", url: "https://github.com/suryamaddula", icon: "Gh" },
  { label: "Medium", url: "https://suryamaddula.medium.com", icon: "Md" },
  { label: "Substack", url: "https://suryamaddula.substack.com", icon: "Ss" },
  { label: "Patents", url: "https://patents.google.com/?inventor=surya+maddula", icon: "Pt" },
];

const CloseSection = () => {
  const ref = useScrollReveal();

  return (
    <footer ref={ref} className="py-24 md:py-40 px-6 z-10 relative">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Built for long-term alignment.
        </h2>

        <a
          href="mailto:me@suryamaddula.com"
          className="reveal reveal-delay-2 inline-block mt-10 text-base text-muted-foreground hover:text-foreground transition-colors tracking-wide group"
        >
          <span className="border-b border-muted-foreground/30 group-hover:border-foreground/50 pb-0.5 transition-colors">
            me@suryamaddula.com
          </span>
        </a>

        <div className="reveal reveal-delay-3 flex items-center justify-center gap-5 mt-10">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-muted-foreground/50 hover:text-foreground transition-all duration-300 tracking-wider uppercase"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="reveal reveal-delay-4 mt-16 text-xs text-muted-foreground/30 tracking-wide">
          Building deliberately. Access is selective.
        </p>
      </div>
    </footer>
  );
};

export default CloseSection;
