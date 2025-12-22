import { useEffect, useState } from "react";

interface Ornament {
  id: number;
  left: number;
  delay: number;
  size: number;
  color: 'red' | 'gold' | 'green';
}

interface Star {
  id: number;
  left: number;
  top: number;
  delay: number;
  size: number;
}

const ChristmasDecorations = () => {
  const [ornaments, setOrnaments] = useState<Ornament[]>([]);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate ornaments hanging from top
    const orns: Ornament[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 5 + i * 12 + Math.random() * 5,
      delay: Math.random() * 3,
      size: 20 + Math.random() * 15,
      color: (['red', 'gold', 'green'] as const)[i % 3],
    }));
    setOrnaments(orns);

    // Generate twinkling stars
    const strs: Star[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 60,
      delay: Math.random() * 5,
      size: 2 + Math.random() * 4,
    }));
    setStars(strs);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Hanging Ornaments */}
      {ornaments.map((orn) => (
        <div
          key={`orn-${orn.id}`}
          className="absolute top-0"
          style={{
            left: `${orn.left}%`,
            animationDelay: `${orn.delay}s`,
          }}
        >
          {/* String */}
          <div 
            className="w-px bg-gradient-to-b from-foreground/20 to-transparent mx-auto"
            style={{ height: `${30 + Math.random() * 40}px` }}
          />
          {/* Ornament */}
          <div
            className={`rounded-full animate-ornament-swing shadow-lg ${
              orn.color === 'red' ? 'bg-gradient-to-br from-primary to-primary/70' :
              orn.color === 'gold' ? 'bg-gradient-to-br from-accent to-accent/70' :
              'bg-gradient-to-br from-secondary to-secondary/70'
            }`}
            style={{
              width: `${orn.size}px`,
              height: `${orn.size}px`,
              animationDelay: `${orn.delay}s`,
            }}
          >
            {/* Ornament cap */}
            <div className="w-2 h-1 bg-foreground/40 rounded-sm mx-auto -mt-0.5" />
          </div>
        </div>
      ))}

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <div
            className="bg-accent/60 rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 2}px hsl(var(--accent) / 0.5)`,
            }}
          />
        </div>
      ))}

      {/* String Lights along top */}
      <div className="absolute top-0 left-0 right-0 h-8 flex justify-between items-start px-4 opacity-80">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`light-${i}`}
            className="animate-string-lights"
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <div 
              className={`w-2 h-3 rounded-b-full mt-1 ${
                i % 4 === 0 ? 'bg-primary shadow-[0_0_8px_hsl(var(--primary))]' :
                i % 4 === 1 ? 'bg-accent shadow-[0_0_8px_hsl(var(--accent))]' :
                i % 4 === 2 ? 'bg-secondary shadow-[0_0_8px_hsl(var(--secondary))]' :
                'bg-blue-400 shadow-[0_0_8px_#60a5fa]'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChristmasDecorations;
