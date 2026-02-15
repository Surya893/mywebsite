import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  text: string;
}

const PhilosophyInterjection = ({ text }: Props) => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 z-10 relative">
      <p className="reveal text-2xl sm:text-3xl md:text-4xl font-light text-center text-muted-foreground/70 italic tracking-tight max-w-2xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        "{text}"
      </p>
    </section>
  );
};

export default PhilosophyInterjection;
