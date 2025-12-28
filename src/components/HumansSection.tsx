import { Card } from "@/components/ui/card";
import { Linkedin, Mic, Users } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import SantaHat from "./SantaHat";

// Import speaker images
import aprajitaImg from "@/assets/humans/aprajita.jpg";
import manishkaImg from "@/assets/humans/manishka.jpg";
import graceyImg from "@/assets/humans/gracey.jpg";
import shreyaImg from "@/assets/humans/shreya.jpg";
import ramyashreeImg from "@/assets/humans/ramyashree.jpg";
import ajithaImg from "@/assets/humans/ajitha.jpg";
import ernestineImg from "@/assets/humans/ernestine.jpg";

// Import organizing team images
import adyashaImg from "@/assets/humans/adyasha.jpg";
import bagavatiImg from "@/assets/humans/bagavati.jpg";
import manikImg from "@/assets/humans/manik.jpg";
import ishitaSoniImg from "@/assets/humans/ishita-soni.jpg";
import ananyaImg from "@/assets/humans/ananya.jpg";
import akankshaImg from "@/assets/humans/akanksha.jpg";
import diyaImg from "@/assets/humans/diya.jpg";

const speakers = [
  {
    name: "Aprajita Verma",
    company: "Mycom",
    designation: "Frontend Architect",
    linkedin: "https://www.linkedin.com/in/aprajita-verma-19522814a/",
    image: aprajitaImg,
  },
  {
    name: "Manishka Dubey",
    company: "Tinker Techie",
    designation: "Founder",
    linkedin: "https://www.linkedin.com/in/manishka-dubey-871a65202",
    image: manishkaImg,
  },
  {
    name: "Gracey Dugar",
    company: "LaGravitea",
    designation: "Co Founder",
    linkedin: "https://www.linkedin.com/in/gracey-dugar-71b55821b",
    image: graceyImg,
  },
  {
    name: "Shreya Sethi",
    company: "Xrvisionlabs Private Limited",
    designation: "Founder",
    linkedin: "https://linkedin.com/in/sethishreya",
    image: shreyaImg,
  },
  {
    name: "Ramyashree Shetty",
    company: "Radix",
    designation: "Senior Associate - Data Engineer",
    linkedin: "https://www.linkedin.com/in/ramyashree-shetty",
    image: ramyashreeImg,
  },
  {
    name: "Ajitha Sindhe",
    company: "Code4GovTech",
    designation: "Program Coordinator",
    linkedin: "https://www.linkedin.com/in/ajitha-sindhe-63623b105/",
    image: ajithaImg,
  },
  {
    name: "Ernestine Lerisha John",
    company: "",
    designation: "AI & Quantum Researcher",
    linkedin: "https://www.linkedin.com/in/ernestine-lerisha-john-4a863a204/",
    image: ernestineImg,
  },
];

const organizingTeam = [
  {
    name: "Manik",
    role: "All at Once",
    location: "Chandigarh",
    linkedin: "https://www.linkedin.com/in/mrmanik/",
    image: manikImg,
  },
  {
    name: "Bagavati Narayanan",
    role: "Santa's Most Bright Student",
    location: "Chennai",
    linkedin: "https://www.linkedin.com/in/bagavati-narayanan-98484b292/",
    image: bagavatiImg,
  },
  {
    name: "Adyasha Das",
    role: "Christmas Queen",
    location: "Odisha",
    linkedin: "https://www.linkedin.com/in/adyashadas04/",
    image: adyashaImg,
  },
  {
    name: "Ishita Soni",
    role: "Organizing Team",
    location: "Jaipur",
    linkedin: "https://www.linkedin.com/in/ishita-soni-work/",
    image: ishitaSoniImg,
  },
  {
    name: "Ananya Agarwal",
    role: "Organizing Team",
    location: "Mumbai",
    linkedin: "https://www.linkedin.com/in/ananya-agarwal-director/",
    image: ananyaImg,
  },
  {
    name: "Akanksha Singh",
    role: "Organizing Team",
    location: "Mumbai",
    linkedin: "https://www.linkedin.com/in/aakanksha-singh1/",
    image: akankshaImg,
  },
  {
    name: "Diya Bhat",
    role: "Organizing Team",
    location: "Bengaluru",
    linkedin: "https://www.linkedin.com/in/diya-k-bhat-75b450257/",
    image: diyaImg,
  },
];

const HumansSection = () => {
  return (
    <section id="humans" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              The <span className="gradient-text">Humans</span> Behind
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the amazing people who made this event possible
            </p>
          </div>
        </ScrollAnimation>

        {/* Speakers */}
        <div className="mb-20">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="flex items-center justify-center gap-3 mb-10">
              <Mic className="w-8 h-8 text-accent" />
              <h3 className="text-3xl font-display font-bold text-foreground">
                Speakers
              </h3>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <ScrollAnimation 
                key={speaker.name} 
                animation="scale-in" 
                delay={150 + index * 100}
              >
                <Card className="glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 rounded-full overflow-visible mb-4">
                      {speaker.image ? (
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/30">
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary-foreground">
                            {speaker.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <SantaHat size={28} />
                    </div>
                    <h4 className="text-lg font-display font-bold text-foreground mb-1">
                      {speaker.name}
                    </h4>
                    <p className="text-accent font-semibold text-sm mb-1">
                      {speaker.designation}
                    </p>
                    {speaker.company && (
                      <p className="text-muted-foreground text-sm mb-4">
                        {speaker.company}
                      </p>
                    )}
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Organizing Team */}
        <div>
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="flex items-center justify-center gap-3 mb-10">
              <Users className="w-8 h-8 text-accent" />
              <h3 className="text-3xl font-display font-bold text-foreground">
                Organizing Team
              </h3>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {organizingTeam.map((member, index) => (
              <ScrollAnimation 
                key={member.name} 
                animation="scale-in" 
                delay={150 + index * 100}
              >
                <Card className="glass-card p-6 hover:border-accent/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 rounded-full overflow-visible mb-4">
                      {member.image ? (
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent/30">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-golden-sparkle flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary-foreground">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <SantaHat size={28} />
                    </div>
                    <h4 className="text-lg font-display font-bold text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="text-primary font-semibold text-sm mb-1">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {member.location}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumansSection;
