import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Who can participate in Code at Christmas?",
    answer: "This hackathon is exclusively for girls and women who are passionate about coding. Whether you're a beginner or an experienced developer, you're welcome to join!",
  },
  {
    question: "What can I build during the hackathon?",
    answer: "Anything you've dreamed of building! There are no specific tracks or problem statements. This is your chance to build that project you've always wanted to create but never had the time for.",
  },
  {
    question: "Do I need to be an expert coder to participate?",
    answer: "Not at all! This hackathon is about building for fun and learning. Beginners are absolutely welcome. The supportive community will help you along the way.",
  },
  {
    question: "How will winners be decided?",
    answer: "Winners will be decided through community voting on our LinkedIn page after the hackathon ends. The most creative and inspiring projects will have a chance to win!",
  },
  {
    question: "What is the prize for the winner?",
    answer: "The grand prize is a Canva Premium subscription for 1 year worth ₹4000! Perfect for bringing your creative ideas to life.",
  },
  {
    question: "What are the fun activities during the hackathon?",
    answer: "We have exciting activities lined up: Cozy Corner (shared whiteboard), Roast My Hack (fun project roasting), Warm Bytes Podcast (5-min hacker stories), and Frosty Brain Breaks (hourly quizzes)!",
  },
  {
    question: "Is this hackathon free to join?",
    answer: "Yes! Code at Christmas is completely free to participate. Just register and join us for a magical coding experience.",
  },
  {
    question: "What platform will the hackathon be hosted on?",
    answer: "This is a virtual hackathon. All details about the platform and joining links will be shared with registered participants before the event.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Code at Christmas hackathon
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;