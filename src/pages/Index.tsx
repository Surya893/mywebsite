import { useTheme } from "@/hooks/useTheme";
import AmbientCanvas from "@/components/AmbientCanvas";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeToggle from "@/components/ThemeToggle";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OrbitSection from "@/components/OrbitSection";
import PhilosophyInterjection from "@/components/PhilosophyInterjection";
import ProjectsSection from "@/components/ProjectsSection";
import TrajectoryBridge from "@/components/TrajectoryBridge";
import WritingSection from "@/components/WritingSection";
import BuildingNowSection from "@/components/BuildingNowSection";
import CloseSection from "@/components/CloseSection";

const Index = () => {
  const { dark, toggle } = useTheme();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AmbientCanvas />
      <ScrollProgress />
      <ThemeToggle dark={dark} toggle={toggle} />

      <main>
        <HeroSection />
        <AboutSection />
        <OrbitSection />
        <PhilosophyInterjection text="Infrastructure compounds." />
        <ProjectsSection />
        <PhilosophyInterjection text="Constraints create leverage." />
        <TrajectoryBridge />
        <WritingSection />
        <BuildingNowSection />
        <CloseSection />
      </main>
    </div>
  );
};

export default Index;
