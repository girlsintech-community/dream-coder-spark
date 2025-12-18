import { Card } from "@/components/ui/card";
import lovableLogo from "@/assets/lovable-logo.png";
import unstopLogo from "@/assets/unstop-logo.png";
import code4govtechLogo from "@/assets/code4govtech-logo.png";

const partners = [
  {
    name: "Lovable",
    type: "Vibe Coding Partner",
    logo: lovableLogo,
    url: "https://lovable.dev",
  },
  {
    name: "Unstop",
    type: "Platform Partner",
    logo: unstopLogo,
    url: "https://unstop.com",
  },
  {
    name: "Code4GovTech",
    type: "Community Partner",
    logo: code4govtechLogo,
    url: "https://www.codeforgovtech.in/",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Our <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Made possible by our amazing partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="glass-card p-8 h-full flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-24 flex items-center justify-center mb-6">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-accent font-semibold">{partner.type}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
