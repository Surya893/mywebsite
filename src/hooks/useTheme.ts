import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return true; // dark-first
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return { dark, toggle };
}
