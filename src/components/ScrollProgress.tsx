import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1.5">
      {/* Background */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
      
      {/* Candy cane progress bar */}
      <div 
        className="h-full relative overflow-hidden"
        style={{ width: `${progress}%` }}
      >
        {/* Candy cane stripes */}
        <div 
          className="absolute inset-0 animate-candy-stripe"
          style={{
            background: `repeating-linear-gradient(
              -45deg,
              hsl(0, 72%, 51%),
              hsl(0, 72%, 51%) 8px,
              hsl(0, 0%, 95%) 8px,
              hsl(0, 0%, 95%) 16px
            )`,
            backgroundSize: '200% 100%',
          }}
        />
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2" />
      </div>

      {/* Leading indicator */}
      {progress > 0 && (
        <div 
          className="absolute top-0 w-3 h-3 -mt-0.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
          style={{ 
            left: `calc(${progress}% - 6px)`,
            transition: 'left 0.1s ease-out'
          }}
        />
      )}
    </div>
  );
};

export default ScrollProgress;
