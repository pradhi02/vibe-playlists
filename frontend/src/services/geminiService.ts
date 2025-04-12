import { GeminiResponse, Playlist } from "../types/music";
import { mockPlaylists } from "./mockData";

export const callGeminiApi = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch('http://localhost:3001/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error('Gemini API request failed');
    }

    const data = await response.json();
    let text = data.text || '';

    // Remove Markdown code block if present
    if (text.startsWith("```json")) {
      text = text.replace(/```json\n/, '').replace(/```$/, '').trim();
    } else if (text.startsWith("```")) {
      text = text.replace(/```.*?\n/, '').replace(/```$/, '').trim();
    }

    return text;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};

export const getPlaylistsRecommendation = async (
  input: string,
  type: "mood" | "activity"
): Promise<GeminiResponse> => {
  try {
    const prompt = `Suggest 3 playlist names and descriptions based on the ${type} "${input}". 
Format the response as a JSON array with this structure:
[
  {
    "name": "Playlist Name",
    "description": "Short playlist description",
    "songs": [
      {
        "id": "unique_id",
        "title": "Song Title",
        "artist": "Artist Name",
        "coverUrl": "image_url",
        "duration": "3:45"
      }
    ]
  }
]
Only include 2-3 songs per playlist.`;

    const geminiText = await callGeminiApi(prompt);

    const playlists: Playlist[] = JSON.parse(geminiText);

    const message = `Based on your ${type} "${input}", here are some tailored playlists for you.`;

    return { playlists, message };
  } catch (error) {
    console.error('Error getting recommendations:', error);

    return {
      playlists: mockPlaylists.slice(0, 3),
      message: `Sorry, I couldn't generate specific playlists for your ${type}. Here's something else you might like.`,
    };
  }
};
