
import { Activity, Mood } from "@/types/music";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Music2, Sparkles } from "lucide-react";

interface RecommendationFormProps {
  onSubmit: (input: string, type: "mood" | "activity") => void;
  isLoading: boolean;
}

const moods: Mood[] = ["Happy", "Sad", "Energetic", "Relaxed", "Focused", "Romantic", "Angry"];
const activities: Activity[] = ["Workout", "Study", "Driving", "Meditation", "Party", "Cooking", "Reading"];

const RecommendationForm = ({ onSubmit, isLoading }: RecommendationFormProps) => {
  const [activeTab, setActiveTab] = useState<"mood" | "activity">("mood");
  const [customInput, setCustomInput] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Use the preset value if selected, otherwise use custom input
    const inputValue = selectedPreset || customInput;
    
    if (inputValue.trim()) {
      onSubmit(inputValue, activeTab);
    }
  };

  const handlePresetClick = (preset: string) => {
    setSelectedPreset(preset);
    setCustomInput("");
  };

  const handleCustomInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomInput(event.target.value);
    setSelectedPreset(null);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <Tabs 
        defaultValue="mood" 
        value={activeTab} 
        onValueChange={(value) => setActiveTab(value as "mood" | "activity")}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mood">By Mood</TabsTrigger>
          <TabsTrigger value="activity">By Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mood" className="space-y-4">
          <div className="flex flex-wrap gap-2 mt-4">
            {moods.map((mood) => (
              <Button
                key={mood}
                type="button"
                variant={selectedPreset === mood ? "default" : "outline"}
                className={selectedPreset === mood ? "bg-music-primary hover:bg-music-secondary" : ""}
                onClick={() => handlePresetClick(mood)}
              >
                {mood}
              </Button>
            ))}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="custom-mood">Or describe your mood</Label>
            <Input
              id="custom-mood"
              placeholder="Describe how you're feeling..."
              value={customInput}
              onChange={handleCustomInputChange}
              className="bg-muted/50"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="activity" className="space-y-4">
          <div className="flex flex-wrap gap-2 mt-4">
            {activities.map((activity) => (
              <Button
                key={activity}
                type="button"
                variant={selectedPreset === activity ? "default" : "outline"}
                className={selectedPreset === activity ? "bg-music-primary hover:bg-music-secondary" : ""}
                onClick={() => handlePresetClick(activity)}
              >
                {activity}
              </Button>
            ))}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="custom-activity">Or describe your activity</Label>
            <Input
              id="custom-activity"
              placeholder="What are you doing right now..."
              value={customInput}
              onChange={handleCustomInputChange}
              className="bg-muted/50"
            />
          </div>
        </TabsContent>
      </Tabs>

      <Button 
        type="submit" 
        className="w-full mt-6 bg-gradient-to-r from-music-primary to-music-secondary hover:opacity-90 transition-opacity"
        disabled={isLoading || !(selectedPreset || customInput.trim())}
      >
        {isLoading ? (
          <>
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
            Finding music...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Get Recommendations
          </>
        )}
      </Button>
    </form>
  );
};

export default RecommendationForm;
