import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  dark: boolean;
  toggle: () => void;
}

const ThemeToggle = ({ dark, toggle }: ThemeToggleProps) => (
  <button
    onClick={toggle}
    className="fixed top-6 right-6 z-50 p-2.5 rounded-full bg-secondary/60 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
  >
    {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
  </button>
);

export default ThemeToggle;
