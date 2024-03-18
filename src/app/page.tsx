import ContactSection from "./components/Contact";
import EducationSection from "./components/Education";
import ExperienceSection from "./components/Experience";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/Skills";

// pages/index.tsx
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </>
  );
};

export default Home;
