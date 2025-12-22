interface SantaHatProps {
  size?: number;
  className?: string;
}

const SantaHat: React.FC<SantaHatProps> = ({ size = 32, className = "" }) => {
  return (
    <div 
      className={`absolute -top-2 -right-1 animate-hat-wobble ${className}`}
      style={{ 
        width: size, 
        height: size,
        zIndex: 10,
      }}
    >
      <svg 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Hat body */}
        <path 
          d="M8 48C8 48 12 28 32 20C52 28 56 48 56 48" 
          fill="hsl(0, 72%, 45%)"
        />
        {/* Hat tip */}
        <path 
          d="M32 20C32 20 38 8 45 12C52 16 44 28 44 28" 
          fill="hsl(0, 72%, 45%)"
        />
        {/* White trim */}
        <ellipse 
          cx="32" 
          cy="50" 
          rx="26" 
          ry="6" 
          fill="hsl(0, 0%, 95%)"
        />
        {/* Pom pom */}
        <circle 
          cx="48" 
          cy="14" 
          r="6" 
          fill="hsl(0, 0%, 95%)"
        />
        {/* Hat shading */}
        <path 
          d="M16 42C16 42 20 30 32 24C44 30 48 42 48 42" 
          fill="hsl(0, 72%, 38%)"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default SantaHat;
