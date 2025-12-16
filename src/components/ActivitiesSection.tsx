import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Flame, Mic, Brain } from "lucide-react";

const activities = [
  {
    icon: MessageCircle,
    title: "Cozy Corner",
    description: "A virtual whiteboard where hackers can share their mood, what they're building, how they're feeling, or literally anything! Express yourself freely.",
    color: "text-primary",
    bgGlow: "from-primary/20",
  },
  {
    icon: Flame,
    title: "Roast My Hack",
    description: "We'll roast the projects built by hackers live in a fun and cozy way. No harsh vibes, just giggles and good times!",
    color: "text-secondary",
    bgGlow: "from-secondary/20",
  },
  {
    icon: Mic,
    title: "Warm Bytes",
    description: "A 5-minute podcast with hackers sharing their journey of how they got into tech and started their coding journey. Inspiring stories await!",
    color: "text-accent",
    bgGlow: "from-accent/20",
  },
  {
    icon: Brain,
    title: "Frosty Brain Breaks",
    description: "Hourly quizzes for hackers to have fun and take some breaks in between the building time. Refresh your mind!",
    color: "text-mint-frost",
    bgGlow: "from-mint-frost/20",
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Fun Activities</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            More Than Just <span className="gradient-text">Coding</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We've got exciting activities lined up to make your hackathon experience memorable and fun!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {activities.map((activity, index) => (
            <Card
              key={activity.title}
              variant="glass"
              className="group hover:scale-[1.02] transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.bgGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <CardHeader className="relative">
                <div className={`w-14 h-14 rounded-xl glass-card flex items-center justify-center mb-4 ${activity.color}`}>
                  <activity.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl md:text-2xl">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
