import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Gift, Award, Star, Mic, Globe } from "lucide-react";

const PrizeSection = () => {
  return (
    <section id="prizes" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Win <span className="gradient-text">Amazing Rewards</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Build something magical and get rewarded for your creativity!
          </p>
        </div>

        {/* Prize Cards in Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* All Participants */}
          <Card className="glass-card overflow-hidden h-full">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  All Participants
                </h3>
              </div>
              <ul className="space-y-3 flex-grow">
                <li className="flex items-start gap-3 text-foreground">
                  <Star className="w-5 h-5 text-golden-sparkle flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Lovable credits worth several dollars</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Award className="w-5 h-5 text-golden-sparkle flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Participation Certificates</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Grand Prize */}
          <Card variant="glow" className="overflow-hidden h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-golden-sparkle/10 via-primary/10 to-accent/10" />
            <CardContent className="p-6 h-full flex flex-col relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-golden-sparkle to-primary flex items-center justify-center flex-shrink-0 animate-float">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Grand Prize Winners
                </h3>
              </div>
              <ul className="space-y-3 flex-grow">
                <li className="flex items-start gap-3 text-foreground">
                  <Star className="w-5 h-5 text-golden-sparkle flex-shrink-0 mt-0.5" />
                  <span className="text-sm">1 Year Canva Premium (₹4,000)</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Gift className="w-5 h-5 text-golden-sparkle flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Prizes from Unstop</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Globe className="w-5 h-5 text-golden-sparkle flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Featured on Website & Community</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Mic className="w-5 h-5 text-golden-sparkle flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Podcast Opportunity</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Top 10 */}
          <Card className="glass-card overflow-hidden h-full">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Top 10 Projects
                </h3>
              </div>
              <ul className="space-y-3 flex-grow">
                <li className="flex items-start gap-3 text-foreground">
                  <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">2 Months Canva Premium (₹1,000)</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Appreciation Certificate</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Globe className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Feature on Website</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <Mic className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Mini Podcast Opportunity</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
