
export interface Song {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  duration: string;
  spotifyUrl?:string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  songs: Song[];
}

export type Mood = 
  | 'Happy' 
  | 'Sad' 
  | 'Energetic' 
  | 'Relaxed' 
  | 'Focused' 
  | 'Romantic' 
  | 'Angry';

export type Activity = 
  | 'Workout' 
  | 'Study' 
  | 'Driving' 
  | 'Meditation' 
  | 'Party' 
  | 'Cooking' 
  | 'Reading';

export interface GeminiResponse {
  playlists: Playlist[];
  message: string;
}
