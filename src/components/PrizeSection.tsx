import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Star } from "lucide-react";

const PrizeSection = () => {
  return (
    <section id="prizes" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-golden-sparkle font-semibold uppercase tracking-wider text-sm">✨ Grand Prize</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Win <span className="gradient-text">Amazing Rewards</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Build something magical and get rewarded for your creativity!
          </p>
        </div>

        <Card variant="glow" className="max-w-2xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-golden-sparkle/10 via-primary/10 to-accent/10" />
          <CardContent className="p-8 md:p-12 relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-golden-sparkle to-primary flex items-center justify-center mb-6 animate-float">
                <Trophy className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Canva Premium
              </h3>
              <p className="text-5xl md:text-6xl font-display font-bold gradient-text mb-2">
                1 Year
              </p>
              <p className="text-2xl text-muted-foreground mb-6">
                Worth ₹4,000
              </p>
              
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="flex items-center gap-3 glass-card p-4 rounded-xl">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Community Voting</span>
                </div>
                <div className="flex items-center gap-3 glass-card p-4 rounded-xl">
                  <Star className="w-5 h-5 text-golden-sparkle" />
                  <span className="text-foreground">Voted on LinkedIn after the event</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-muted-foreground mt-8 max-w-lg mx-auto">
          The winner will be decided by community voting on the Girls Leading Tech LinkedIn page after the hackathon!
        </p>
      </div>
    </section>
  );
};

export default PrizeSection;
