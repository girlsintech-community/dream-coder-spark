import { Clock, Calendar, Sparkles } from "lucide-react";
const scheduleItems = [{
  time: "12:00 PM",
  event: "Hackathon Kickoff",
  description: "Welcome & ice breakers",
  icon: Sparkles
}, {
  time: "12:00 PM",
  event: "Building Begins",
  description: "Start creating magic!",
  icon: Clock
}, {
  time: "1:00 PM",
  event: "Frosty Brain Break #1",
  description: "First quiz session",
  icon: Sparkles
}, {
  time: "1:15 PM",
  event: "Warm Bytes #1",
  description: "Hacker journey story",
  icon: Clock
}, {
  time: "2:00 PM",
  event: "Frosty Brain Break #2",
  description: "Second quiz session",
  icon: Sparkles
}, {
  time: "2:15 PM",
  event: "Cozy Corner Opens",
  description: "Share your vibes",
  icon: Clock
}, {
  time: "3:00 PM",
  event: "Frosty Brain Break #3",
  description: "Third quiz session",
  icon: Sparkles
}, {
  time: "3:15 PM",
  event: "Roast My Hack",
  description: "Fun project roasts",
  icon: Clock
}, {
  time: "3:45 PM",
  event: "Final Submissions",
  description: "Submit your projects",
  icon: Calendar
}, {
  time: "4:00 PM",
  event: "Closing Ceremony",
  description: "Wrap up & next steps",
  icon: Sparkles
}];
const ScheduleSection = () => {
  return <section id="schedule" className="py-24 px-4 relative">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">TIMELINE</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            4 Hours of <span className="gradient-text">Magic</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's what your cozy coding journey looks like
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-1/2" />

          <div className="space-y-6">
            {scheduleItems.map((item, index) => <div key={item.time} className={`relative flex items-center gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 z-10 animate-pulse" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card p-4 md:p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-primary font-semibold text-sm">{item.time}</span>
                    <h3 className="text-lg md:text-xl font-display font-semibold mt-1">{item.event}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ScheduleSection;