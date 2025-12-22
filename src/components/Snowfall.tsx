import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  char: string;
  layer: 'foreground' | 'mid' | 'background';
  drift: number;
  twinkle: boolean;
}

const snowflakeChars = ['❄', '❅', '❆', '✦', '✧', '•'];

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 80 }, (_, i) => {
      const layer = i < 20 ? 'foreground' : i < 50 ? 'mid' : 'background';
      return {
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: layer === 'foreground' ? 8 + Math.random() * 4 : 
                  layer === 'mid' ? 12 + Math.random() * 6 : 
                  18 + Math.random() * 8,
        size: layer === 'foreground' ? 12 + Math.random() * 8 :
              layer === 'mid' ? 8 + Math.random() * 6 :
              4 + Math.random() * 4,
        char: snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)],
        layer,
        drift: (Math.random() - 0.5) * 100,
        twinkle: Math.random() > 0.7,
      };
    });
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 snow-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className={`absolute ${
            flake.layer === 'foreground' ? 'text-foreground/40 z-20' :
            flake.layer === 'mid' ? 'text-foreground/25 z-10' :
            'text-foreground/15 z-0'
          } ${flake.twinkle ? 'animate-twinkle' : ''}`}
          style={{
            left: `${flake.left}%`,
            top: "-30px",
            fontSize: `${flake.size}px`,
            animation: `snowfall ${flake.duration}s linear ${flake.delay}s infinite`,
            ['--drift' as string]: `${flake.drift}px`,
          }}
        >
          {flake.char}
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
