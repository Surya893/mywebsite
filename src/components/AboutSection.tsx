import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 px-6 z-10 relative">
      <div className="max-w-2xl mx-auto">
        <p className="reveal text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
          I'm Surya — an 18-year-old systems builder working at the intersection of hardware, machine learning, and distributed infrastructure. I founded{" "}
          <span className="text-foreground font-medium">Whisperwave</span>, and on an ANC for Open Environments system patented at the age of 15, backed by{" "}
          <span className="text-foreground font-medium">Microsoft</span>,{" "}
          <span className="text-foreground font-medium">AWS</span>,{" "}
          <span className="text-foreground font-medium">Emergent Ventures</span>, and{" "}
          <span className="text-foreground font-medium">1517 Fund</span>.
        </p>
        <p className="reveal reveal-delay-1 mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
          I worked with LLMs at{" "}
          <span className="text-foreground font-medium">Columbia University</span>, advise at{" "}
          <span className="text-foreground font-medium">EVM Capital</span>, and am a resident at{" "}
          <span className="text-foreground font-medium">Lossfunk</span>. Previously, I built at{" "}
          <span className="text-foreground font-medium">Amazon</span>,{" "}
          <span className="text-foreground font-medium">Shell</span>, and{" "}
          <span className="text-foreground font-medium">CIBC</span>, and worked my way up as an alum of{" "}
          <span className="text-foreground font-medium">TKS</span>.
        </p>
        <p className="reveal reveal-delay-2 mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
          Everything I build points toward one thesis: intelligence infrastructure that operates in the physical world — not just in software.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
