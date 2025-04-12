
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import RecommendationForm from "@/components/RecommendationForm";
import RecommendationsResults from "@/components/RecommendationsResults";
import { getPlaylistsRecommendation } from "@/services/geminiService";
import { GeminiResponse } from "@/types/music";
import { Music, Sparkles } from "lucide-react";
import MusicWave from "@/components/MusicWave";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<GeminiResponse | null>(null);

  const handleSubmit = async (input: string, type: "mood" | "activity") => {
    try {
      setIsLoading(true);
      const results = await getPlaylistsRecommendation(input, type);
      setRecommendations(results);
    } catch (error) {
      console.error("Error getting recommendations:", error);
      toast({
        title: "Error",
        description: "Failed to get recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="py-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/3 h-32 bg-music-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-music-secondary rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="flex items-center justify-center mb-4 gap-3">
            <div className="bg-gradient-to-r from-music-primary to-music-secondary p-3 rounded-full">
              <Music className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Vibe<span className="text-music-primary">Sync</span>
            </h1>
            <MusicWave isPlaying={true} className="ml-2" />
          </div>
          <p className="text-center text-muted-foreground max-w-md mx-auto">
            Your AI-powered personal playlist recommender that suggests songs based on your mood or activity.
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="container px-4">
        <div className="mb-12 bg-card rounded-xl p-6 border border-border/50 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2">
            <Sparkles className="h-5 w-5 text-music-primary opacity-70 animate-pulse-glow" />
          </div>
          
          <h2 className="text-xl font-semibold text-center mb-6">
            What are you in the mood for?
          </h2>
          
          <RecommendationForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {recommendations && (
          <RecommendationsResults 
            playlists={recommendations.playlists} 
            message={recommendations.message}
          />
        )}

        {!recommendations && !isLoading && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              Enter your mood or activity above to get personalized playlist recommendations.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>
          Powered by Gemini AI & music intelligence
        </p>
      </footer>
    </div>
  );
};

export default Index;
