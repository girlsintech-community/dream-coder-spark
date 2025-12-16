import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/30 relative">
      <div className="container max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Build Your <span className="gradient-text">Dream Project</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join us for an unforgettable 4 hours of coding, creativity, and cozy vibes!
          </p>
          <Button variant="hero" size="xl" className="group">
            Register for Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Organized by</span>
            <span className="font-semibold gradient-text">Girls Leading Tech</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for women in tech</span>
          </div>

          <a 
            href="https://www.linkedin.com/company/girls-leading-tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>Follow us on LinkedIn</span>
          </a>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          © 2025 Girls Leading Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
