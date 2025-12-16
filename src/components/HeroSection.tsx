import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const hackathonDate = new Date("2025-12-24T12:00:00");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10 px-4 pt-20 pb-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="glass-card px-4 py-2 rounded-full mb-8 animate-fade-in flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-golden-sparkle" />
            <span className="text-sm font-medium">Girls Leading Tech Community Presents</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="block">Vibe Coding</span>
            <span className="gradient-text text-glow">Hackathon</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A 4-hour virtual girls-only hackathon where you build your dream project in a cozy, 
            magical winter atmosphere ❄️
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="glass-card px-5 py-3 rounded-xl">
              <span className="text-primary font-semibold">📅 December 24, 2025</span>
            </div>
            <div className="glass-card px-5 py-3 rounded-xl">
              <span className="text-secondary font-semibold">🕛 12:00 PM - 4:00 PM</span>
            </div>
            <div className="glass-card px-5 py-3 rounded-xl">
              <span className="text-accent font-semibold">💻 Virtual Event</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Hackathon starts in</p>
            <CountdownTimer targetDate={hackathonDate} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" className="group">
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
