import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ScheduleSection from "@/components/ScheduleSection";
import PrizeSection from "@/components/PrizeSection";
import PartnersSection from "@/components/PartnersSection";
import HumansSection from "@/components/HumansSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Snowfall from "@/components/Snowfall";
import BackgroundMusic from "@/components/BackgroundMusic";
import SantaCursorFollower from "@/components/SantaCursorFollower";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Snowfall />
      <BackgroundMusic />
      <SantaCursorFollower />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ActivitiesSection />
        <ScheduleSection />
        <PrizeSection />
        <PartnersSection />
        <HumansSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
