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

        {/* All Participants */}
        <Card className="glass-card mb-8 overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Gift className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">
                For All Participants
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center gap-3 text-foreground">
                <Star className="w-5 h-5 text-golden-sparkle flex-shrink-0" />
                <span>Lovable credits worth several dollars</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Award className="w-5 h-5 text-golden-sparkle flex-shrink-0" />
                <span>Participation Certificates</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Grand Prize */}
        <Card variant="glow" className="max-w-3xl mx-auto overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-golden-sparkle/10 via-primary/10 to-accent/10" />
          <CardContent className="p-8 md:p-12 relative">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-golden-sparkle to-primary flex items-center justify-center mb-6 animate-float">
                <Trophy className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Grand Prize Winners
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-golden-sparkle" />
                  <span className="text-foreground">1 Year Canva Premium (Worth ₹4,000)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="w-5 h-5 text-golden-sparkle" />
                  <span className="text-foreground">Prizes from Unstop</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-golden-sparkle" />
                  <span className="text-foreground">Featured on Website & Community</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mic className="w-5 h-5 text-golden-sparkle" />
                  <span className="text-foreground">Podcast Opportunity</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-golden-sparkle" />
                  <span className="text-foreground">Winner Certificate</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top 10 */}
        <Card className="glass-card max-w-3xl mx-auto overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">
                Top 10 Projects
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center gap-3 text-foreground">
                <Star className="w-5 h-5 text-accent flex-shrink-0" />
                <span>2 Months Canva Premium (Worth ₹1,000)</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Award className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Appreciation Certificate</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Feature on Website</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Mic className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Mini Podcast Opportunity</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PrizeSection;