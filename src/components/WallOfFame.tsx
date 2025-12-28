import { Trophy, Linkedin, Crown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const topHackers = [
  {
    name: "Dyuti Haranee L",
    linkedin: "https://www.linkedin.com/in/dyuti-haranee-9b6649291",
    rank: 1,
  },
  {
    name: "Sneha Sonkar",
    linkedin: "https://www.linkedin.com/in/snehasonkar/",
    rank: 2,
  },
  {
    name: "Ishita Singh",
    linkedin: null,
    rank: 3,
  },
  {
    name: "Rishika Lawankar",
    linkedin: "https://www.linkedin.com/in/rishika-lawankar-67b9b1334",
    rank: 4,
  },
  {
    name: "Sreeja Das",
    linkedin: "https://in.linkedin.com/in/sreeja-das",
    rank: 5,
  },
  {
    name: "Akhila Sunesh",
    linkedin: "https://www.linkedin.com/in/akhila-sunesh",
    rank: 6,
  },
  {
    name: "Honey Priya",
    linkedin: "https://www.linkedin.com/in/honeypriya/",
    rank: 7,
  },
  {
    name: "Nandika Gupta",
    linkedin: "https://www.linkedin.com/in/nandika-gupta/",
    rank: 8,
  },
  {
    name: "Aditi Chourasia",
    linkedin: "https://www.linkedin.com/in/contactaditi/",
    rank: 9,
  },
  {
    name: "Lithika Murugesan",
    linkedin: "https://www.linkedin.com/in/lithika-murugesan-459436258",
    rank: 10,
  },
];

const getRankColor = (rank: number) => {
  if (rank === 1) return "from-yellow-400 to-amber-600";
  if (rank === 2) return "from-gray-300 to-gray-500";
  if (rank === 3) return "from-amber-600 to-amber-800";
  return "from-primary/50 to-primary";
};

const getRankBadge = (rank: number) => {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return `#${rank}`;
};

const WallOfFame = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="wall-of-fame" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-6">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-400 text-sm font-medium">Top Performers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Wall of <span className="gradient-text">Fame</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating our top 10 hackers who shipped amazing projects during the hackathon
          </p>
        </div>

        {/* Top 3 Featured */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8 mb-12">
          {/* 2nd Place */}
          <div className={`order-2 md:order-1 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 w-full md:w-48">
              <div className="text-4xl mb-3">{getRankBadge(2)}</div>
              <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${getRankColor(2)} p-1 mb-4`}>
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-2xl font-bold">
                  {topHackers[1].name.charAt(0)}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{topHackers[1].name}</h3>
              {topHackers[1].linkedin && (
                <a
                  href={topHackers[1].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect
                </a>
              )}
            </div>
          </div>

          {/* 1st Place */}
          <div className={`order-1 md:order-2 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 relative w-full md:w-56 border-2 border-yellow-500/50">
              <Crown className="w-8 h-8 text-yellow-500 absolute -top-4 left-1/2 -translate-x-1/2" />
              <div className="text-5xl mb-4">{getRankBadge(1)}</div>
              <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${getRankColor(1)} p-1 mb-4 animate-pulse-glow`}>
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-3xl font-bold">
                  {topHackers[0].name.charAt(0)}
                </div>
              </div>
              <h3 className="font-bold text-xl mb-2">{topHackers[0].name}</h3>
              {topHackers[0].linkedin && (
                <a
                  href={topHackers[0].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect
                </a>
              )}
            </div>
          </div>

          {/* 3rd Place */}
          <div className={`order-3 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 w-full md:w-48">
              <div className="text-4xl mb-3">{getRankBadge(3)}</div>
              <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${getRankColor(3)} p-1 mb-4`}>
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-2xl font-bold">
                  {topHackers[2].name.charAt(0)}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{topHackers[2].name}</h3>
              {topHackers[2].linkedin && (
                <a
                  href={topHackers[2].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Ranks 4-10 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {topHackers.slice(3).map((hacker, index) => (
            <div
              key={hacker.name}
              className={`glass-card p-4 rounded-xl text-center hover:scale-105 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="text-lg font-bold text-primary mb-2">{getRankBadge(hacker.rank)}</div>
              <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${getRankColor(hacker.rank)} p-0.5 mb-3`}>
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-lg font-semibold">
                  {hacker.name.charAt(0)}
                </div>
              </div>
              <h3 className="font-medium text-sm mb-1 line-clamp-2">{hacker.name}</h3>
              {hacker.linkedin && (
                <a
                  href={hacker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-6 h-6 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WallOfFame;
