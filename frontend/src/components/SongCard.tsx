
import { Song } from "@/types/music";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import MusicWave from "./MusicWave";
import { useState } from "react";

interface SongCardProps {
  song: Song;
  index: number;
}

const SongCard = ({ song, index }: SongCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };


  return (
    <a
      href={song?.spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
    <Card className="bg-card hover:bg-card/90 transition-colors duration-300 border-none">
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 text-center text-muted-foreground">
            {isPlaying ? (
              <MusicWave isPlaying={true} className="mx-auto" />
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded">
            <img 
              src={song.coverUrl} 
              alt={song.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="truncate text-sm font-medium">{song.title}</h4>
            <p className="truncate text-xs text-muted-foreground">{song.artist}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{song.duration}</span>
            <button 
              className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
              onClick={togglePlay}
            >
              <Play size={16} className={isPlaying ? "opacity-0" : ""} />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
    </a>
  );
};

export default SongCard;
