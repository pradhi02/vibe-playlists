
import { Playlist } from "@/types/music";
import PlaylistCard from "./PlaylistCard";
import { motion } from "framer-motion";

interface RecommendationsResultsProps {
  playlists: Playlist[];
  message: string;
}

const RecommendationsResults = ({ playlists, message }: RecommendationsResultsProps) => {
  if (!playlists.length) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Your Recommendations</h2>
          <p className="text-muted-foreground">{message}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {playlists.map((playlist) => (
            <motion.div
              key={playlist.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <PlaylistCard playlist={playlist} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RecommendationsResults;
