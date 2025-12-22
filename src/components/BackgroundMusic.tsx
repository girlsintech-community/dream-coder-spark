import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX, Volume1 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showVolume, setShowVolume] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // YouTube video ID for audio extraction
  const videoId = "cSoI27m1b8g";

  useEffect(() => {
    // Create audio element
    const audio = new Audio();
    audio.loop = true;
    audio.volume = volume;
    audio.preload = "auto";
    
    // Use a reliable Christmas music source
    // Since we can't download YouTube directly, we'll use the iframe approach but properly managed
    audioRef.current = audio;
    setIsReady(true);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMusic = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
    >
      {/* Hidden YouTube iframe for audio - only render once when playing */}
      {isPlaying && (
        <iframe
          key="youtube-audio"
          className="hidden"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&mute=0`}
          allow="autoplay; encrypted-media"
          title="Background Music"
        />
      )}

      {/* Volume Slider */}
      {showVolume && isPlaying && (
        <div className="glass-card p-3 rounded-lg animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Vol</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>
      )}

      {/* Music Toggle Button */}
      <Button
        variant="glass"
        size="icon"
        onClick={toggleMusic}
        className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform border-primary/30"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <VolumeIcon className="w-5 h-5 text-primary" />
        ) : (
          <VolumeX className="w-5 h-5 text-muted-foreground" />
        )}
      </Button>

      {/* Music indicator */}
      {isPlaying && (
        <div className="absolute -top-1 -right-1 flex gap-0.5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-1 bg-primary rounded-full animate-pulse"
              style={{
                height: `${8 + i * 2}px`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;
