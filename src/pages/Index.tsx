import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ScheduleSection from "@/components/ScheduleSection";
import PrizeSection from "@/components/PrizeSection";
import PartnersSection from "@/components/PartnersSection";
import HumansSection from "@/components/HumansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Snowfall from "@/components/Snowfall";
import BackgroundMusic from "@/components/BackgroundMusic";
import SantaCursorFollower from "@/components/SantaCursorFollower";
import ChristmasDecorations from "@/components/ChristmasDecorations";
import ScrollProgress from "@/components/ScrollProgress";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Snowfall />
      <ChristmasDecorations />
      <BackgroundMusic />
      <SantaCursorFollower />
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider variant="garland" />
        <AboutSection />
        <SectionDivider variant="lights" />
        <EventsSection />
        <SectionDivider variant="simple" />
        <ActivitiesSection />
        <SectionDivider variant="garland" />
        <ScheduleSection />
        <SectionDivider variant="lights" />
        <PrizeSection />
        <SectionDivider variant="simple" />
        <PartnersSection />
        <SectionDivider variant="garland" />
        <HumansSection />
        <SectionDivider variant="lights" />
        <TestimonialsSection />
        <SectionDivider variant="simple" />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
