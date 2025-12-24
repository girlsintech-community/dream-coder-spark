import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Eye } from "lucide-react";
import FloatingPresents from "./FloatingPresents";
import ConfettiEffect from "./ConfettiEffect";
import heroBg from "@/assets/hero-bg.jpg";
import gltLogo from "@/assets/glt-logo.png";

const HeroSection = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleRegisterClick = () => {
    setShowConfetti(true);
    // Open link after a short delay for confetti effect
    setTimeout(() => {
      window.open("https://unstop.com/hackathons/code-at-christmas-chandigarh-group-of-colleges-cgc-landran-punjab-1609270", "_blank");
    }, 300);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Confetti Effect */}
      <ConfettiEffect 
        trigger={showConfetti} 
        onComplete={() => setShowConfetti(false)}
        originX={50}
        originY={60}
      />

      {/* Floating Presents */}
      <FloatingPresents />

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroBg})` }} 
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      
      {/* Aurora Borealis animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>
      
      <div className="container relative z-10 px-4 pt-20 pb-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <img 
            src={gltLogo} 
            alt="Girls Leading Tech" 
            className="w-32 h-32 md:w-40 md:h-40 mb-6 animate-fade-in object-contain" 
          />

          {/* Main Title */}
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in" 
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-foreground">Code at</span>
            <span className="text-primary drop-shadow-[0_0_30px_hsl(0,72%,51%)]">Christmas</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-foreground/90 mb-4 max-w-2xl animate-fade-in" 
            style={{ animationDelay: "0.2s" }}
          >
            A 4-hour virtual girls-only hackathon where you built your dream project in a cozy, 
            magical winter atmosphere ❄️
          </p>

          {/* Hackathon Completed Badge */}
          <div 
            className="mb-8 animate-fade-in"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="glass-card px-6 py-3 rounded-full border-2 border-primary/50">
              <span className="text-primary font-semibold text-lg">🎄 Hackathon Completed! 🎄</span>
            </div>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-4 md:gap-8 mb-10 animate-fade-in w-full max-w-2xl" 
            style={{ animationDelay: "0.3s" }}
          >
            <div className="glass-card p-4 md:p-6 rounded-xl text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-foreground">727</div>
              <div className="text-xs md:text-sm text-muted-foreground">Registrations</div>
            </div>
            <div className="glass-card p-4 md:p-6 rounded-xl text-center">
              <div className="flex justify-center mb-2">
                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-foreground">107</div>
              <div className="text-xs md:text-sm text-muted-foreground">Submissions</div>
            </div>
            <div className="glass-card p-4 md:p-6 rounded-xl text-center">
              <div className="flex justify-center mb-2">
                <Eye className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-foreground">75K+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Impressions</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in" 
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={handleRegisterClick}
            >
              View on Unstop
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a 
              href="https://chat.whatsapp.com/B8k1rFRIlglKacwizdfUt8" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="glass" size="xl">
                Join WhatsApp Group
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
