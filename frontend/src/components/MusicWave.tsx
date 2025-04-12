
import { cn } from "@/lib/utils";

interface MusicWaveProps {
  isPlaying?: boolean;
  className?: string;
}

const MusicWave = ({ isPlaying = false, className }: MusicWaveProps) => {
  return (
    <div className={cn("music-wave", className)}>
      <div 
        className={cn(
          "music-wave-bar h-2", 
          isPlaying ? "animate-wave-1" : "h-1"
        )} 
      />
      <div 
        className={cn(
          "music-wave-bar h-3", 
          isPlaying ? "animate-wave-2" : "h-2"
        )} 
      />
      <div 
        className={cn(
          "music-wave-bar h-4", 
          isPlaying ? "animate-wave-3" : "h-1"
        )} 
      />
      <div 
        className={cn(
          "music-wave-bar h-2", 
          isPlaying ? "animate-wave-4" : "h-2"
        )} 
      />
    </div>
  );
};

export default MusicWave;
