import { useState, useRef } from "react";

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [isEnding, setIsEnding] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setIsEnding(true);
    setTimeout(onComplete, 500);
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsEnding(true);
    setTimeout(onComplete, 300);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500 ${
        isEnding ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-contain"
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>
      
      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full text-sm font-medium transition-all hover:scale-105"
      >
        Skip Intro →
      </button>
    </div>
  );
};

export default VideoIntro;
