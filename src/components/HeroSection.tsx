import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 z-10"
    >
      <div className="max-w-3xl text-center">
        <h1 className="reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Building physical-world intelligence infrastructure.
        </h1>
        <p className="reveal reveal-delay-2 mt-6 text-base sm:text-lg text-muted-foreground tracking-wide font-light">
          Built across hardware, ML, and distributed systems.
        </p>
      </div>
      <div className="absolute bottom-12 breathe">
        <ChevronDown className="w-5 h-5 text-muted-foreground/50" />
      </div>
    </section>
  );
};

export default HeroSection;
