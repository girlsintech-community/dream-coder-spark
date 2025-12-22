import { useEffect, useState } from "react";
import { Users } from "lucide-react";

interface RegistrationCounterProps {
  targetCount?: number;
}

const RegistrationCounter: React.FC<RegistrationCounterProps> = ({ 
  targetCount = 500 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation start
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = targetCount / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(targetCount);
        clearInterval(interval);
      } else {
        setCount(Math.floor(stepValue * currentStep));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isVisible, targetCount]);

  return (
    <div 
      className={`flex items-center justify-center gap-2 glass-card px-4 py-2 rounded-full transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <Users className="w-4 h-4 text-accent" />
      <span className="text-sm font-medium">
        Join <span className="text-primary font-bold">{count}+</span> participants!
      </span>
      <span className="text-lg animate-pulse">🎄</span>
    </div>
  );
};

export default RegistrationCounter;
