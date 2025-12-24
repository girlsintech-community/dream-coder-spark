import { Card } from "@/components/ui/card";
import { Linkedin, Quote, MapPin } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import SantaHat from "./SantaHat";

// Import testimonial images
import kavinayaImg from "@/assets/testimonials/kavinaya.jpg";
import yashikaImg from "@/assets/testimonials/yashika.jpg";
import gopikaImg from "@/assets/testimonials/gopika.jpg";
import yashiImg from "@/assets/testimonials/yashi.jpg";
import manashaaImg from "@/assets/testimonials/manashaa.jpg";
import swatiImg from "@/assets/testimonials/swati.jpg";
import muditaImg from "@/assets/testimonials/mudita.jpg";
import hirvaImg from "@/assets/testimonials/hirva.jpg";
import aditiImg from "@/assets/testimonials/aditi.jpg";
import rishikaImg from "@/assets/testimonials/rishika.jpg";

const testimonials = [
  {
    name: "Kavinaya",
    city: "Tiruvannamalai",
    state: "Tamil Nadu",
    quote: "This hackathon was a really fun and valuable learning experience for me. As a beginner, I got the opportunity to explore new ideas, use AI tools, and build a project within a limited time. The theme was unique and encouraged creativity without pressure. Overall, it helped me gain confidence and motivated me to participate in more hackathons in the future.",
    linkedin: "https://www.linkedin.com/in/kavinaya-p",
    image: kavinayaImg,
  },
  {
    name: "Yashika Bansal",
    city: "Delhi",
    state: "Delhi",
    quote: "It was really nice and amazing",
    linkedin: "https://www.linkedin.com/in/yashika-bansal-30b2a028a",
    image: yashikaImg,
  },
  {
    name: "Rishima",
    city: "Amritsar",
    state: "Punjab",
    quote: "Participating as a hacker was an exciting and valuable experience. It pushed me to think creatively under time constraints, collaborate with others, and turn ideas into working solutions. I especially enjoyed the supportive community vibe. Overall, it helped me improve my technical skills, confidence.",
    linkedin: "https://www.linkedin.com/in/rishima17",
    image: null,
  },
  {
    name: "Gopika",
    city: "Karnal",
    state: "Haryana",
    quote: "It was great",
    linkedin: "https://www.linkedin.com/in/gopika-chauhan18/",
    image: gopikaImg,
  },
  {
    name: "Yashi Gupta",
    city: "Kanpur",
    state: "Uttar Pradesh",
    quote: "This experience was truly new to me, I have never vibe coded before. So this was new and I actually loved it. Even though the code was to be written by AI but still I felt the pressure throughout. Thank you so much for such a weird yet so fulfilling hackathon.",
    linkedin: "https://in.linkedin.com/in/yashi-gupta-22785a2b0",
    image: yashiImg,
  },
  {
    name: "Manashaa U",
    city: "Chennai",
    state: "Tamil Nadu",
    quote: "It was super fun and loved the vibe the hosts put so much efforts, thanks for hosting this",
    linkedin: "http://www.linkedin.com/in/manashaaumapathy",
    image: manashaaImg,
  },
  {
    name: "Swati Singh",
    city: "New Delhi",
    state: "Delhi",
    quote: "This hackathon was a really refreshing experience for me. Even though it was online, it felt engaging and interactive throughout. I enjoyed the freedom to explore a creative idea instead of being limited to conventional problem statements. I experimented with new tools, learned a lot about building thoughtful user experiences, and pushed myself to think beyond just functionality.",
    linkedin: "http://www.linkedin.com/in/swati-singh-8a21ab295",
    image: swatiImg,
  },
  {
    name: "Mudita Pandey",
    city: "Kolkata",
    state: "West Bengal",
    quote: "I thoroughly enjoy building this project as it was merely for fun",
    linkedin: "https://www.linkedin.com/in/mudita-pandey-71b91a272/",
    image: muditaImg,
  },
  {
    name: "Hirva Jobanputra",
    city: "Rajkot",
    state: "Gujarat",
    quote: "It was so fun and learn type of experience for me. It was my first ever hackathon. I learned how to get an idea, make it, and deploy it and how to everything on time. And the pre hackthon sessions were so amazing, insipring we got new connections there. We got to learn from the experts. And manik was so helpful throughout the whole hackthon process. Thank you so much for organizing this.",
    linkedin: "https://www.linkedin.com/in/hirva-jobanputra-607b78310",
    image: hirvaImg,
  },
  {
    name: "Aditi Chourasia",
    city: "Kota",
    state: "Rajasthan",
    quote: "It was the most fun project I've ever worked on, no pressure just coding and enjoying, that's what real coding is!",
    linkedin: "https://www.linkedin.com/in/contactaditi/",
    image: aditiImg,
  },
  {
    name: "Rishika Lawankar",
    city: "Thane",
    state: "Maharashtra",
    quote: "Easily one of the most unforgettable hackathons I've ever attended! After participating in so many events, this one stood out for its freedom, festive fun, and those perfect cozy Christmas vibes. Already counting down to the next one, can't wait to do it all again! Huge thanks to the organising team for making this awesome experience possible!",
    linkedin: "https://www.linkedin.com/in/rishika-lawankar-67b9b1334/",
    image: rishikaImg,
  },
  {
    name: "Maithili Pandey",
    city: "Mumbai",
    state: "Maharashtra",
    quote: "Good",
    linkedin: "https://www.linkedin.com/in/maithili-pandey-3941202b6",
    image: null,
  },
  {
    name: "Ishita Singh",
    city: "Kalyan",
    state: "Maharashtra",
    quote: "Less time was given",
    linkedin: null,
    image: null,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              HACKER STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              What Our <span className="gradient-text">Hackers</span> Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from the amazing women who participated in Code at Christmas
            </p>
          </div>
        </ScrollAnimation>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation 
              key={testimonial.name} 
              animation="scale-in" 
              delay={100 + index * 50}
            >
              <Card className="glass-card p-6 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {/* Quote Text */}
                <p className="text-foreground/90 text-sm leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-visible flex-shrink-0">
                    {testimonial.image ? (
                      <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/30">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-lg font-bold text-primary-foreground">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <SantaHat size={20} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-foreground font-semibold text-sm truncate">
                        {testimonial.name}
                      </h4>
                      {testimonial.linkedin && (
                        <a
                          href={testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-muted-foreground text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.city}, {testimonial.state}
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
