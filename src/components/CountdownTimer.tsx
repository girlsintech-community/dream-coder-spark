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
    <div className="flex gap-4 sm:gap-8 md:gap-12 justify-center flex-wrap">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-4 sm:gap-8">
          <div className="flex flex-col items-center">
            <div className="glass-card px-6 sm:px-10 md:px-14 py-4 sm:py-6 md:py-8 rounded-2xl min-w-[80px] sm:min-w-[120px] md:min-w-[150px] border border-primary/30 animate-glow-pulse">
              <span className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-primary drop-shadow-[0_0_20px_hsl(0,72%,51%)]">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-sm sm:text-base md:text-lg text-foreground/80 mt-3 uppercase tracking-wider font-semibold">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-accent animate-pulse hidden sm:block">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
