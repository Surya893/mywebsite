import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Linkedin, Github, BookOpen, FileText } from "lucide-react";

const socials = [
  { label: "LinkedIn", url: "https://linkedin.com/in/suryaseshamaddula", icon: <Linkedin className="w-5 h-5" /> },
  { label: "X", url: "https://x.com/suryamaddula_", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "GitHub", url: "https://github.com/suryamaddula", icon: <Github className="w-5 h-5" /> },
  { label: "Medium", url: "https://suryamaddula.medium.com", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Substack", url: "https://suryamaddula.substack.com", icon: <FileText className="w-5 h-5" /> },
  { label: "Patents", url: "https://patents.google.com/patent/WO2024176209A2/en?q=(surya+maddula)&oq=surya+maddula", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
];

const CloseSection = () => {
  const ref = useScrollReveal();

  return (
    <footer id="close" ref={ref} className="py-20 md:py-32 px-6 z-10 relative">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Built for long-term alignment.
        </h2>

        <a
          href="mailto:me@suryamaddula.com"
          className="reveal reveal-delay-2 inline-block mt-8 text-base text-muted-foreground hover:text-foreground transition-colors tracking-wide group"
        >
          <span className="border-b border-muted-foreground/30 group-hover:border-foreground/50 pb-0.5 transition-colors">
            me@suryamaddula.com
          </span>
        </a>

        <div className="reveal reveal-delay-3 flex items-center justify-center gap-6 mt-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-foreground transition-all duration-300"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default CloseSection;
