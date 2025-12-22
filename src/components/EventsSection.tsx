import { Calendar, Clock, ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const sessions = [
  {
    date: "22 Dec 2025",
    time: "5 pm",
    title: "Guitar, Coding and a cup of team",
    speaker: "Gracey Duggar",
    designation: "Co-Founder @LaGravitea",
    linkedin: "https://www.linkedin.com/in/gracey-dugar-71b55821b",
  },
  {
    date: "22 Dec 2025",
    time: "7 pm",
    title: "Ship a Mini App in 45 - Vibe Coding with AI (PRD to Prototype)",
    speaker: "Ramyashree Shetty",
    designation: "Data engineer @Radix",
    linkedin: "https://www.linkedin.com/in/ramyashree-shetty",
  },
  {
    date: "23 Dec 2025",
    time: "11 am",
    title: "Building Smart, Not Big: How Simple Solutions Win Hackathons",
    speaker: "Manishka Dubey",
    designation: "Founder @Tinker Techie",
    linkedin: "https://www.linkedin.com/in/manishka-dubey-871a65202",
  },
  {
    date: "23 Dec 2025",
    time: "12:30 pm",
    title: "Quantum Curiosity: Exploring ideas beyond normal coding",
    speaker: "Ernestine Lerisha",
    designation: "AI & Quantum Researcher",
    linkedin: "https://www.linkedin.com/in/ernestine-lerisha-john-4a863a204/",
  },
  {
    date: "23 Dec 2025",
    time: "2 pm",
    title: "From Idea to Product: Turn a Random Idea into a Real App (Vibe Coding)",
    speaker: "Shreya Sethi",
    designation: "Founder @Xrvisionlabs",
    linkedin: "https://linkedin.com/in/sethishreya",
  },
  {
    date: "23 Dec 2025",
    time: "7 pm",
    title: "From Idea to Impact: Designing AI Experiences That Users Trust",
    speaker: "Aprajita Verma",
    designation: "Frontend Architect @Mycom",
    linkedin: "https://www.linkedin.com/in/aprajita-verma-19522814a/",
  },
  {
    date: "24 Dec 2025",
    time: "10 am",
    title: "Building for Social Good: DPI's & DPGs",
    speaker: "Ajitha Sindhe",
    designation: "Program Coordinator @Code4GovTech",
    linkedin: "https://www.linkedin.com/in/ajitha-sindhe-63623b105/",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            PRE-HACKATHON
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Speaker <span className="gradient-text">Sessions</span> Agenda
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our amazing speakers before the hackathon kicks off
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block glass-card rounded-2xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="text-foreground font-semibold">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Date
                  </div>
                </TableHead>
                <TableHead className="text-foreground font-semibold">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Time
                  </div>
                </TableHead>
                <TableHead className="text-foreground font-semibold">Title</TableHead>
                <TableHead className="text-foreground font-semibold">Speaker</TableHead>
                <TableHead className="text-foreground font-semibold">Designation</TableHead>
                <TableHead className="text-foreground font-semibold text-center">Connect</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sessions.map((session, index) => (
                <TableRow 
                  key={index} 
                  className="border-border/30 hover:bg-primary/5 transition-colors"
                >
                  <TableCell className="text-muted-foreground font-medium">
                    {session.date}
                  </TableCell>
                  <TableCell className="text-primary font-semibold">
                    {session.time}
                  </TableCell>
                  <TableCell className="text-foreground font-medium max-w-xs">
                    {session.title}
                  </TableCell>
                  <TableCell className="text-foreground">
                    {session.speaker}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {session.designation}
                  </TableCell>
                  <TableCell className="text-center">
                    <a
                      href={session.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {sessions.map((session, index) => (
            <div 
              key={index} 
              className="glass-card p-5 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                  {session.date}
                </span>
                <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                  {session.time}
                </span>
              </div>
              <h3 className="text-foreground font-semibold mb-2 leading-snug">
                {session.title}
              </h3>
              <p className="text-sm text-foreground mb-1">{session.speaker}</p>
              <p className="text-xs text-muted-foreground mb-3">{session.designation}</p>
              <a
                href={session.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
