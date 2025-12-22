import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  // YouTube video ID
  const videoId = "cSoI27m1b8g";

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Hidden YouTube iframe for audio - starts automatically */}
      {isPlaying && (
        <iframe
          className="hidden"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&mute=0`}
          allow="autoplay; encrypted-media"
          title="Background Music"
        />
      )}

      {/* Music toggle button */}
      <Button
        variant="glass"
        size="icon"
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform border-primary/30"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-primary" />
        ) : (
          <VolumeX className="w-5 h-5 text-muted-foreground" />
        )}
      </Button>
    </>
  );
};

export default BackgroundMusic;
