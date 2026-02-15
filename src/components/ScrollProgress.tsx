import { useEffect, useState } from "react";

const sections = [
  "hero", "orbit", "work", "writing", "now", "close"
];

const ScrollProgress = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      setActive(Math.min(sections.length - 1, Math.floor(progress * sections.length)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 hidden md:flex"
      aria-label="Scroll progress"
    >
      {sections.map((_, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
            i === active
              ? "bg-foreground scale-150"
              : "bg-muted-foreground/30"
          }`}
        />
      ))}
    </nav>
  );
};

export default ScrollProgress;
