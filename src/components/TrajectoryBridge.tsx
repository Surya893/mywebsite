import { useScrollReveal } from "@/hooks/useScrollReveal";

const TrajectoryBridge = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-32 md:py-52 px-6 z-10 relative">
      <p className="reveal text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-foreground tracking-tight max-w-2xl mx-auto leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        The next system will be larger.
      </p>
    </section>
  );
};

export default TrajectoryBridge;
