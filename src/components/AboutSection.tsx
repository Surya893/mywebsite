import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="py-24 md:py-36 px-6 z-10 relative">
      <div className="max-w-2xl mx-auto">
        <p className="reveal text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
          I'm Surya — an 18-year-old systems builder. I founded{" "}
          <span className="text-foreground font-medium">Whisperwave</span> and patented an open-environment acoustic control system at 15. Backed by{" "}
          <span className="text-foreground font-medium">Emergent Ventures</span>,{" "}
          <span className="text-foreground font-medium">1517 Fund</span>,{" "}
          <span className="text-foreground font-medium">Microsoft</span>, and{" "}
          <span className="text-foreground font-medium">AWS</span>. Research at{" "}
          <span className="text-foreground font-medium">Columbia</span>, advising at{" "}
          <span className="text-foreground font-medium">EVM Capital</span>, resident at{" "}
          <span className="text-foreground font-medium">Lossfunk</span>. Previously{" "}
          <span className="text-foreground font-medium">Amazon</span>,{" "}
          <span className="text-foreground font-medium">Shell</span>,{" "}
          <span className="text-foreground font-medium">CIBC</span>.
        </p>
        <p className="reveal reveal-delay-1 mt-8 text-lg md:text-xl text-foreground/90 leading-relaxed font-medium italic" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Intelligence infrastructure that operates in the physical world — not just in software.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
