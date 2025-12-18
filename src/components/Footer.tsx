import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Linkedin, Instagram, Youtube, MessageCircle, Mail, ExternalLink } from "lucide-react";

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
          <a href="https://unstop.com/hackathons/code-at-christmas-chandigarh-group-of-colleges-cgc-landran-punjab-1609270" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl" className="group">
              Register for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Social Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.linkedin.com/company/girlsleadingtech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://x.com/GirlLeadingTech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Twitter</span>
              </a>
              <a 
                href="https://www.instagram.com/girlsleadingtech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://youtube.com/@girlsleadingtech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
              <a 
                href="https://whatsapp.com/channel/0029VayYXL4K5cD7Zrzq052G" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Channel</span>
              </a>
            </div>
          </div>

          {/* Join Community */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Join Our Community</h4>
            <div className="space-y-3">
              <a 
                href="https://forms.gle/LL115pGiuLKYLzk26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-accent" />
                <span>Join Girls-Only WhatsApp Community</span>
              </a>
              <a 
                href="https://girlsintech.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span>Subscribe to Monthly Newsletter</span>
              </a>
            </div>
          </div>

          {/* Past Initiatives */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Our Past Initiatives</h4>
            <div className="space-y-3">
              <a 
                href="https://global-ai-buildathon.girlsleadingtech.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-primary" />
                <span>Global AI Buildathon</span>
              </a>
              <a 
                href="https://hackaura.girlsleadingtech.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-primary" />
                <span>HackAura</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground/50">
                <ExternalLink className="w-5 h-5" />
                <span>ML Cohort</span>
              </div>
            </div>
          </div>
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
            href="mailto:girlsleadingtech@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>girlsleadingtech@gmail.com</span>
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
