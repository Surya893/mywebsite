import { useEffect, useState, useCallback } from "react";

const sectionIds = [
  "hero", "about", "orbit", "projects", "writing", "now", "close"
];

const ScrollProgress = () => {
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const viewportMiddle = window.scrollY + window.innerHeight * 0.4;
    let closest = 0;
    let closestDist = Infinity;

    sectionIds.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const elTop = rect.top + window.scrollY;
      const dist = Math.abs(elTop - viewportMiddle);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });

    setActive(closest);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 md:flex flex-col gap-3 hidden"
      aria-label="Scroll progress"
    >
      {sectionIds.map((id, i) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
            i === active
              ? "bg-foreground scale-150 shadow-[0_0_6px_hsl(var(--foreground)/0.3)]"
              : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
          }`}
          aria-label={`Scroll to ${id}`}
        />
      ))}
    </nav>
  );
};

export default ScrollProgress;
