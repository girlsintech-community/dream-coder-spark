import { useCallback, useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  shape: 'circle' | 'square' | 'star';
}

interface ConfettiEffectProps {
  trigger: boolean;
  onComplete?: () => void;
  originX?: number;
  originY?: number;
}

const colors = [
  'hsl(0, 72%, 51%)',    // Christmas red
  'hsl(45, 93%, 58%)',   // Gold
  'hsl(142, 70%, 35%)',  // Christmas green
  'hsl(0, 0%, 98%)',     // White
  'hsl(210, 100%, 60%)', // Blue
];

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({
  trigger,
  onComplete,
  originX = 50,
  originY = 50,
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isActive, setIsActive] = useState(false);

  const createParticles = useCallback(() => {
    const newParticles: Particle[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: originX,
      y: originY,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 8,
      speedX: (Math.random() - 0.5) * 20,
      speedY: -10 - Math.random() * 15,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 20,
      shape: (['circle', 'square', 'star'] as const)[Math.floor(Math.random() * 3)],
    }));
    setParticles(newParticles);
    setIsActive(true);
  }, [originX, originY]);

  useEffect(() => {
    if (trigger && !isActive) {
      createParticles();
      
      // Clean up after animation
      const timeout = setTimeout(() => {
        setParticles([]);
        setIsActive(false);
        onComplete?.();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [trigger, isActive, createParticles, onComplete]);

  useEffect(() => {
    if (!isActive || particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev =>
        prev.map(p => ({
          ...p,
          x: p.x + p.speedX * 0.1,
          y: p.y + p.speedY * 0.1,
          speedY: p.speedY + 0.5, // gravity
          rotation: p.rotation + p.rotationSpeed,
        })).filter(p => p.y < 150)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [isActive, particles.length]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.shape !== 'star' ? particle.color : 'transparent',
            borderRadius: particle.shape === 'circle' ? '50%' : '0',
            transform: `rotate(${particle.rotation}deg)`,
            clipPath: particle.shape === 'star' 
              ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' 
              : undefined,
            background: particle.shape === 'star' ? particle.color : undefined,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;
