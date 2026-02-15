import { useScrollReveal } from "@/hooks/useScrollReveal";

const TrajectoryBridge = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 z-10 relative">
      <p className="reveal text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-foreground tracking-tight max-w-2xl mx-auto leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        The next system will be larger.
      </p>
    </section>
  );
};

export default TrajectoryBridge;
