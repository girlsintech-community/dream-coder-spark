import { Card } from "@/components/ui/card";
import { Linkedin, Mic, Users } from "lucide-react";

// Import speaker images
import aprajitaImg from "@/assets/humans/aprajita.jpg";
import manishkaImg from "@/assets/humans/manishka.jpg";
import graceyImg from "@/assets/humans/gracey.jpg";
import shreyaImg from "@/assets/humans/shreya.jpg";
import ramyashreeImg from "@/assets/humans/ramyashree.jpg";
import ajithaImg from "@/assets/humans/ajitha.jpg";

// Import organizing team images
import adyashaImg from "@/assets/humans/adyasha.jpg";
import bagavatiImg from "@/assets/humans/bagavati.jpg";
import manikImg from "@/assets/humans/manik.jpg";

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
];

const HumansSection = () => {
  return (
    <section id="humans" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            The <span className="gradient-text">Humans</span> Behind
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the amazing people making this event possible
          </p>
        </div>

        {/* Speakers */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Mic className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-display font-bold text-foreground">
              Speakers
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakers.map((speaker) => (
              <Card
                key={speaker.name}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary/30">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-display font-bold text-foreground mb-1">
                    {speaker.name}
                  </h4>
                  <p className="text-accent font-semibold text-sm mb-1">
                    {speaker.designation}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {speaker.company}
                  </p>
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
            ))}
          </div>
        </div>

        {/* Organizing Team */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-10">
            <Users className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-display font-bold text-foreground">
              Organizing Team
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {organizingTeam.map((member) => (
              <Card
                key={member.name}
                className="glass-card p-6 hover:border-accent/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  {member.image ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-accent/30">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-golden-sparkle flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumansSection;
