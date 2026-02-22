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
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="relative max-w-3xl text-center">
        <p className="reveal text-sm sm:text-base tracking-[0.35em] uppercase text-muted-foreground/50 font-medium mb-10">
          Surya Maddula
        </p>
        <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Building physical-world intelligence infrastructure.
        </h1>
      </div>
      <div className="absolute bottom-14 breathe">
        <ChevronDown className="w-5 h-5 text-muted-foreground/40" />
      </div>
    </section>
  );
};

export default HeroSection;
