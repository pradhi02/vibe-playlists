
import { Playlist } from "@/types/music";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Play } from "lucide-react";
import SongCard from "./SongCard";
import { useState } from "react";

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  const [expanded, setExpanded] = useState(false);


  return (
    <Card className="bg-card hover:shadow-md hover:shadow-music-primary/10 transition-all duration-300 overflow-hidden border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded bg-muted">
            {playlist.coverUrl ? (
              <img
                src={playlist.coverUrl}
                alt={playlist.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                <Music size={24} />
              </div>
            )}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold">{playlist.name}</CardTitle>
            <CardDescription className="line-clamp-2 text-xs">
              {playlist.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-1 pb-0">
        {expanded ? (
          <div className="space-y-1">
            {playlist.songs.map((song, index) => (
              <SongCard key={song.id} song={song} index={index} />
            ))}
          </div>
        ) : (
          <div className="space-y-1">
            {playlist.songs.slice(0, 1).map((song, index) => (
              <SongCard key={song.id} song={song} index={index} />
            ))}
            {playlist.songs.length > 1 && (
              <div className="py-2 px-3 text-center text-sm text-muted-foreground">
                +{playlist.songs.length - 1} more songs
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-4">
        <Button 
          variant="secondary" 
          size="sm" 
          className="w-full"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "View All"}
        </Button>
        <Button size="sm" className="ml-2 bg-music-primary hover:bg-music-secondary">
          <Play size={16} className="mr-1" />
          Play
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlaylistCard;
