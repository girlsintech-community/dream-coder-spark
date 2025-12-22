import { useEffect, useState } from "react";

interface Present {
  id: number;
  left: number;
  top: number;
  delay: number;
  size: number;
  emoji: string;
}

const presentEmojis = ['🎁', '🎀', '🎄', '⭐', '🔔'];

const FloatingPresents = () => {
  const [presents, setPresents] = useState<Present[]>([]);

  useEffect(() => {
    const items: Present[] = [
      { id: 0, left: 5, top: 20, delay: 0, size: 32, emoji: '🎁' },
      { id: 1, left: 92, top: 35, delay: 1, size: 28, emoji: '🎀' },
      { id: 2, left: 8, top: 65, delay: 2, size: 24, emoji: '🎄' },
      { id: 3, left: 88, top: 70, delay: 0.5, size: 30, emoji: '⭐' },
      { id: 4, left: 15, top: 85, delay: 1.5, size: 26, emoji: '🔔' },
    ];
    setPresents(items);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {presents.map((present) => (
        <div
          key={present.id}
          className="absolute animate-float-present"
          style={{
            left: `${present.left}%`,
            top: `${present.top}%`,
            fontSize: `${present.size}px`,
            animationDelay: `${present.delay}s`,
          }}
        >
          {present.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingPresents;
