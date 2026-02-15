import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 z-10"
    >
      <div className="max-w-3xl text-center">
        <p className="reveal text-sm sm:text-base tracking-[0.3em] uppercase text-muted-foreground/60 font-medium mb-8">
          Surya Maddula
        </p>
        <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Building physical-world intelligence infrastructure.
        </h1>
        <p className="reveal reveal-delay-2 mt-6 text-base sm:text-lg text-muted-foreground tracking-wide font-light max-w-xl mx-auto">
          18 · Founder of WhisperWave · 1x Patent · LLMs @ Columbia · Backed by Emergent Ventures & 1517 Fund
        </p>
      </div>
      <div className="absolute bottom-12 breathe">
        <ChevronDown className="w-5 h-5 text-muted-foreground/50" />
      </div>
    </section>
  );
};

export default HeroSection;
