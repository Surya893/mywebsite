import { useTheme } from "@/hooks/useTheme";
import AmbientCanvas from "@/components/AmbientCanvas";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
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
      <ThemeToggle dark={dark} toggle={toggle} />
      <ScrollProgress />

      <main>
        <HeroSection />
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
