import { Trophy, Linkedin, Crown, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SantaHat from "./SantaHat";

// Import hacker images
import lithikaImg from "@/assets/hackers/lithika.jpg";
import dyutiImg from "@/assets/hackers/dyuti.jpg";
import snehaImg from "@/assets/hackers/sneha.jpg";
import ishitaImg from "@/assets/hackers/ishita.jpg";
import rishikaImg from "@/assets/hackers/rishika.jpg";
import sreejaImg from "@/assets/hackers/sreeja.jpg";
import akhilaImg from "@/assets/hackers/akhila.jpg";
import honeyImg from "@/assets/hackers/honey.jpg";
import nandikaImg from "@/assets/hackers/nandika.jpg";
import aditiImg from "@/assets/hackers/aditi.jpg";

// Winner
const winner = {
  name: "Lithika Murugesan",
  linkedin: "https://www.linkedin.com/in/lithika-murugesan-459436258",
  image: lithikaImg,
};

// Top 10 hackers (no specific ranking)
const topHackers = [
  {
    name: "Dyuti Haranee L",
    linkedin: "https://www.linkedin.com/in/dyuti-haranee-9b6649291",
    image: dyutiImg,
  },
  {
    name: "Sneha Sonkar",
    linkedin: "https://www.linkedin.com/in/snehasonkar/",
    image: snehaImg,
  },
  {
    name: "Ishita Singh",
    linkedin: null,
    image: ishitaImg,
  },
  {
    name: "Rishika Lawankar",
    linkedin: "https://www.linkedin.com/in/rishika-lawankar-67b9b1334",
    image: rishikaImg,
  },
  {
    name: "Sreeja Das",
    linkedin: "https://in.linkedin.com/in/sreeja-das",
    image: sreejaImg,
  },
  {
    name: "Akhila Sunesh",
    linkedin: "https://www.linkedin.com/in/akhila-sunesh",
    image: akhilaImg,
  },
  {
    name: "Honey Priya",
    linkedin: "https://www.linkedin.com/in/honeypriya/",
    image: honeyImg,
  },
  {
    name: "Nandika Gupta",
    linkedin: "https://www.linkedin.com/in/nandika-gupta/",
    image: nandikaImg,
  },
  {
    name: "Aditi Chourasia",
    linkedin: "https://www.linkedin.com/in/contactaditi/",
    image: aditiImg,
  },
];

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
            Celebrating our winner and top hackers who shipped amazing projects during the hackathon
          </p>
        </div>

        {/* Winner Featured */}
        <div className={`flex justify-center mb-16 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 relative w-full max-w-sm border-2 border-yellow-500/50">
            <Crown className="w-10 h-10 text-yellow-500 absolute -top-5 left-1/2 -translate-x-1/2" />
            <div className="text-5xl mb-4">🏆</div>
            <div className="relative w-28 h-28 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <SantaHat size={36} />
            </div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium mb-3">
              <Crown className="w-4 h-4" />
              Winner
            </div>
            <h3 className="font-bold text-2xl mb-3">{winner.name}</h3>
            {winner.linkedin && (
              <a
                href={winner.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Top 10 Hackers */}
        <div className={`text-center mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Top 10 Hackers</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {topHackers.map((hacker, index) => (
            <div
              key={hacker.name}
              className={`glass-card p-4 rounded-xl text-center hover:scale-105 transition-all duration-300 hover:border-primary/50 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <div className="relative w-16 h-16 mx-auto mb-3">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/50 to-primary p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={hacker.image}
                      alt={hacker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <SantaHat size={24} />
              </div>
              <h3 className="font-medium text-sm mb-2 line-clamp-2">{hacker.name}</h3>
              {hacker.linkedin && (
                <a
                  href={hacker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
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
