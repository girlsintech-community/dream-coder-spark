import { Heart, Code, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Mission</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-8">
            Build for <span className="gradient-text">Fun</span>
          </h2>
          
          <div className="glass-card p-8 md:p-12 rounded-2xl text-left md:text-center">
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-primary">
                <Heart className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-secondary">
                <Code className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-accent">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              This hackathon isn't about targeting any track or solving any specific problem. 
              It's about <span className="text-primary font-semibold">building something you've always dreamed of</span> but 
              haven't gotten the time to create.
            </p>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Whether it's a silly project, a creative tool, or something completely random — 
              this is your space to <span className="text-secondary font-semibold">code with joy</span> and 
              <span className="text-accent font-semibold"> have fun</span> with amazing women in tech.
            </p>
            
            <p className="text-muted-foreground text-lg">
              No pressure. No strict rules. Just pure coding vibes. ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
