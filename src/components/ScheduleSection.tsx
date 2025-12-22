import { Clock, Calendar, Sparkles, Gift } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const scheduleItems = [
  {
    time: "12:00 PM",
    event: "Hackathon Kickoff",
    description: "Welcome & ice breakers",
    icon: Sparkles,
    day: 24,
  },
  {
    time: "12:00 PM",
    event: "Building Begins",
    description: "Start creating magic!",
    icon: Clock,
    day: 24,
  },
  {
    time: "1:00 PM",
    event: "Frosty Brain Break #1",
    description: "First quiz session",
    icon: Sparkles,
    day: 24,
  },
  {
    time: "1:15 PM",
    event: "Warm Bytes #1",
    description: "Hacker journey story",
    icon: Clock,
    day: 24,
  },
  {
    time: "2:00 PM",
    event: "Frosty Brain Break #2",
    description: "Second quiz session",
    icon: Sparkles,
    day: 24,
  },
  {
    time: "2:15 PM",
    event: "Cozy Corner Opens",
    description: "Share your vibes",
    icon: Clock,
    day: 24,
  },
  {
    time: "3:00 PM",
    event: "Frosty Brain Break #3",
    description: "Third quiz session",
    icon: Sparkles,
    day: 24,
  },
  {
    time: "3:15 PM",
    event: "Roast My Hack",
    description: "Fun project roasts",
    icon: Clock,
    day: 24,
  },
  {
    time: "3:45 PM",
    event: "Final Submissions",
    description: "Submit your projects",
    icon: Calendar,
    day: 24,
  },
  {
    time: "4:00 PM",
    event: "Closing Ceremony",
    description: "Wrap up & next steps",
    icon: Sparkles,
    day: 24,
  },
  {
    time: "10:00 PM",
    event: "Voting Begins",
    description: "24th Dec - Community voting starts",
    icon: Calendar,
    day: 24,
  },
  {
    time: "6:00 PM",
    event: "Voting Ends",
    description: "25th Dec - Voting closes",
    icon: Gift,
    day: 25,
  },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              ADVENT CALENDAR
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              4 Hours of <span className="gradient-text">Magic</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Open each door to discover your cozy coding journey
            </p>
          </div>
        </ScrollAnimation>

        {/* Advent Calendar Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {scheduleItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollAnimation
                key={`${item.time}-${item.event}`}
                animation="scale-in"
                delay={index * 50}
              >
                <div
                  className="group relative glass-card rounded-xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer advent-door overflow-hidden"
                >
                  {/* Door number */}
                  <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>

                  {/* Day indicator */}
                  <div className="absolute top-2 right-2 text-xs text-muted-foreground">
                    Dec {item.day}
                  </div>

                  {/* Content */}
                  <div className="mt-8 text-center">
                    <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-primary font-semibold text-xs block mb-1">
                      {item.time}
                    </span>
                    <h3 className="text-sm font-display font-semibold text-foreground leading-tight">
                      {item.event}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.description}
                    </p>
                  </div>

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* Christmas decoration */}
                  <div className="absolute -bottom-2 -right-2 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
                    🎄
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/50" />
            <span>Dec 24th Events</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-accent" />
            <span>Dec 25th - Christmas!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
