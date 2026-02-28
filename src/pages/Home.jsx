import { Navbar } from "../component/Navbar";
import { ThemeToggle } from "../component/ThemeToggle";
import { StarBackground } from "@/component/StarBackground";
import { HeroSection } from "../component/HeroSection";
import { AboutSection } from "../component/AboutSection";
import { SkillsSection } from "../component/SkillsSection";
import { ProjectsSection } from "../component/ProjectsSection";
import { ContactSection } from "../component/ContactSection";
import { Footer } from "../component/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};