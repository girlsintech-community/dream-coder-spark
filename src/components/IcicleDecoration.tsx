interface IcicleDecorationProps {
  count?: number;
}

const IcicleDecoration: React.FC<IcicleDecorationProps> = ({ count = 12 }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 pointer-events-none overflow-hidden translate-y-full">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="animate-icicle"
          style={{
            animationDelay: `${i * 0.1}s`,
          }}
        >
          <svg
            viewBox="0 0 12 32"
            className="w-2 h-6 md:w-3 md:h-8"
            fill="none"
          >
            {/* Icicle shape */}
            <path
              d="M6 0 L10 8 Q12 16 10 24 Q8 32 6 32 Q4 32 2 24 Q0 16 2 8 L6 0"
              fill="url(#icicleGradient)"
              className="drop-shadow-md"
            />
            {/* Shine */}
            <path
              d="M4 4 L6 2 L6 28 Q5 30 4 28 L4 4"
              fill="rgba(255,255,255,0.4)"
            />
            <defs>
              <linearGradient id="icicleGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="hsl(200, 80%, 90%)" />
                <stop offset="50%" stopColor="hsl(200, 60%, 80%)" />
                <stop offset="100%" stopColor="hsl(200, 50%, 70%)" />
              </linearGradient>
            </defs>
          </svg>
          {/* Water drop animation */}
          {i % 3 === 0 && (
            <div 
              className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-blue-200/60 animate-icicle-drip"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default IcicleDecoration;
