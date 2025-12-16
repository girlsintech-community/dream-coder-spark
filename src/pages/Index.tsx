import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ScheduleSection from "@/components/ScheduleSection";
import PrizeSection from "@/components/PrizeSection";
import Footer from "@/components/Footer";
import Snowfall from "@/components/Snowfall";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Snowfall />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <ScheduleSection />
        <PrizeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
