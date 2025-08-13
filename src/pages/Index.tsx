import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingDonateButton from "@/components/FloatingDonateButton";
import HeroSection from "@/components/sections/HeroSection";
import UrgentAppealsSection from "@/components/sections/UrgentAppealsSection";
import ProjectsOverviewSection from "@/components/sections/ProjectsOverviewSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <UrgentAppealsSection />
        <ProjectsOverviewSection />
      </main>
      <Footer />
      <FloatingDonateButton />
    </div>
  );
};

export default Index;
