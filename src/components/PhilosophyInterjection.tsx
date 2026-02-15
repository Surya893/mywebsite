import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  text: string;
}

const PhilosophyInterjection = ({ text }: Props) => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 z-10 relative">
      <p className="reveal text-xl sm:text-2xl md:text-3xl font-light text-center text-muted-foreground/60 italic tracking-tight max-w-2xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        "{text}"
      </p>
    </section>
  );
};

export default PhilosophyInterjection;
