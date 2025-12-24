import { Calendar, Clock, ExternalLink, Play } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const sessions = [
  {
    date: "22 Dec 2025",
    time: "5 pm",
    title: "Guitar, Coding and a cup of tea",
    speaker: "Gracey Duggar",
    designation: "Co-Founder @LaGravitea",
    linkedin: "https://www.linkedin.com/in/gracey-dugar-71b55821b",
    recording: "https://youtu.be/E02ediWQ7v4?si=vN6ghiu1qeUoOUTO",
    videoId: "E02ediWQ7v4",
  },
  {
    date: "22 Dec 2025",
    time: "7 pm",
    title: "Ship a Mini App in 45 - Vibe Coding with AI (PRD to Prototype)",
    speaker: "Ramyashree Shetty",
    designation: "Data engineer @Radix",
    linkedin: "https://www.linkedin.com/in/ramyashree-shetty",
    recording: "https://youtu.be/AwdAeL9B1w4?si=5hRhVL3uG-5A98dB",
    videoId: "AwdAeL9B1w4",
  },
  {
    date: "23 Dec 2025",
    time: "11 am",
    title: "Building Smart, Not Big: How Simple Solutions Win Hackathons",
    speaker: "Manishka Dubey",
    designation: "Founder @Tinker Techie",
    linkedin: "https://www.linkedin.com/in/manishka-dubey-871a65202",
    recording: "https://youtu.be/8goFETlO3T8?si=nQDxpBNoeUle6y6P",
    videoId: "8goFETlO3T8",
  },
  {
    date: "23 Dec 2025",
    time: "12:30 pm",
    title: "Quantum Curiosity: Exploring ideas beyond normal coding",
    speaker: "Ernestine Lerisha",
    designation: "AI & Quantum Researcher",
    linkedin: "https://www.linkedin.com/in/ernestine-lerisha-john-4a863a204/",
    recording: "https://youtu.be/anNL8jYhjCg?si=8FAmOUL6izV6gWlD",
    videoId: "anNL8jYhjCg",
  },
  {
    date: "23 Dec 2025",
    time: "2 pm",
    title: "From Idea to Product: Turn a Random Idea into a Real App (Vibe Coding)",
    speaker: "Shreya Sethi",
    designation: "Founder @Xrvisionlabs",
    linkedin: "https://linkedin.com/in/sethishreya",
    recording: "https://youtu.be/hielu7rBxdE?si=58W2Ls4E_dLjJGpF",
    videoId: "hielu7rBxdE",
  },
  {
    date: "23 Dec 2025",
    time: "7 pm",
    title: "From Idea to Impact: Designing AI Experiences That Users Trust",
    speaker: "Aprajita Verma",
    designation: "Frontend Architect @Mycom",
    linkedin: "https://www.linkedin.com/in/aprajita-verma-19522814a/",
    recording: null,
    videoId: null,
  },
  {
    date: "24 Dec 2025",
    time: "10 am",
    title: "Building for Social Good: DPI's & DPGs",
    speaker: "Ajitha Sindhe",
    designation: "Program Coordinator @Code4GovTech",
    linkedin: "https://www.linkedin.com/in/ajitha-sindhe-63623b105/",
    recording: null,
    videoId: null,
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              PRE-HACKATHON
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Speaker <span className="gradient-text">Sessions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Watch the recordings from our amazing speakers
            </p>
          </div>
        </ScrollAnimation>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sessions.map((session, index) => (
            <ScrollAnimation 
              key={index} 
              animation="scale-in" 
              delay={index * 100}
            >
              <div className="glass-card rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-muted/30">
                  {session.videoId ? (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${session.videoId}/maxresdefault.jpg`}
                        alt={session.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to medium quality if maxres not available
                          e.currentTarget.src = `https://img.youtube.com/vi/${session.videoId}/mqdefault.jpg`;
                        }}
                      />
                      <a
                        href={session.recording!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                      </a>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted/20">
                      <span className="text-muted-foreground text-sm">Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      {session.date}
                    </span>
                    <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                      {session.time}
                    </span>
                  </div>
                  <h3 className="text-foreground font-semibold mb-2 leading-snug line-clamp-2">
                    {session.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{session.speaker}</p>
                  <p className="text-xs text-muted-foreground mb-3">{session.designation}</p>
                  <div className="flex items-center gap-3">
                    {session.recording && (
                      <a
                        href={session.recording}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                      >
                        <Play className="w-4 h-4" />
                        Watch
                      </a>
                    )}
                    <a
                      href={session.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Desktop Table - Hidden for now, cards are better */}
        <div className="hidden">
          <div className="glass-card rounded-2xl overflow-hidden">
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
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
