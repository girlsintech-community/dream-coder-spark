import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full flex justify-center items-center gap-2 sm:gap-4 md:gap-6">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-2 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="glass-card px-4 sm:px-8 md:px-12 py-3 sm:py-5 md:py-6 rounded-xl border border-primary/30 animate-glow-pulse">
              <span className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-primary drop-shadow-[0_0_20px_hsl(0,72%,51%)]">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs sm:text-sm md:text-base text-foreground/80 mt-2 uppercase tracking-wider font-semibold">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-accent animate-pulse">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
