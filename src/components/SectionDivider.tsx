interface SectionDividerProps {
  variant?: 'garland' | 'lights' | 'simple';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'garland' }) => {
  if (variant === 'simple') {
    return (
      <div className="w-full py-8">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    );
  }

  if (variant === 'lights') {
    return (
      <div className="w-full py-6 flex justify-center items-center gap-3">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="animate-string-lights"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div 
              className={`w-2 h-3 rounded-b-full ${
                i % 4 === 0 ? 'bg-primary shadow-[0_0_8px_hsl(var(--primary))]' :
                i % 4 === 1 ? 'bg-accent shadow-[0_0_8px_hsl(var(--accent))]' :
                i % 4 === 2 ? 'bg-secondary shadow-[0_0_8px_hsl(var(--secondary))]' :
                'bg-blue-400 shadow-[0_0_8px_#60a5fa]'
              }`}
            />
          </div>
        ))}
      </div>
    );
  }

  // Garland variant
  return (
    <div className="w-full py-8 relative overflow-hidden">
      {/* Main garland line */}
      <svg 
        viewBox="0 0 1200 60" 
        className="w-full h-12"
        preserveAspectRatio="none"
      >
        {/* Wavy garland path */}
        <path
          d="M0 30 Q100 50 200 30 Q300 10 400 30 Q500 50 600 30 Q700 10 800 30 Q900 50 1000 30 Q1100 10 1200 30"
          stroke="hsl(142, 70%, 30%)"
          strokeWidth="8"
          fill="none"
          className="drop-shadow-md"
        />
        <path
          d="M0 30 Q100 50 200 30 Q300 10 400 30 Q500 50 600 30 Q700 10 800 30 Q900 50 1000 30 Q1100 10 1200 30"
          stroke="hsl(142, 70%, 40%)"
          strokeWidth="5"
          fill="none"
        />
      </svg>

      {/* Ornaments */}
      <div className="absolute inset-0 flex justify-around items-center px-8">
        {Array.from({ length: 7 }, (_, i) => (
          <div
            key={i}
            className="animate-ornament-swing"
            style={{ 
              animationDelay: `${i * 0.3}s`,
              marginTop: i % 2 === 0 ? '16px' : '0px'
            }}
          >
            <div 
              className={`w-4 h-4 rounded-full shadow-lg ${
                i % 3 === 0 ? 'bg-primary' :
                i % 3 === 1 ? 'bg-accent' :
                'bg-secondary'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionDivider;
