import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';

type Bindings = {
  GEMINI_API_KEY: string;
  SPOTIFY_CLIENT_ID: string;
  SPOTIFY_CLIENT_SECRET: string;
};

const app = new Hono<{ Bindings: Bindings }>();
app.use('*', cors());

let spotifyAccessToken: string | null = null;

async function getSpotifyAccessToken(c: any): Promise<void> {
  const clientId = c.env.SPOTIFY_CLIENT_ID;
  const clientSecret = c.env.SPOTIFY_CLIENT_SECRET;
  const token = btoa(`${clientId}:${clientSecret}`);

  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    'grant_type=client_credentials',
    {
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  spotifyAccessToken = response.data.access_token;
}

async function getSongFromSpotify(title: string, artist: string, c: any) {
  if (!spotifyAccessToken) {
    await getSpotifyAccessToken(c);
  }

  const query = encodeURIComponent(`${title} ${artist}`);
  const response = await axios.get(
    `https://api.spotify.com/v1/search?q=${query}&type=track&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${spotifyAccessToken}`,
      },
    }
  );

  const track = response.data.tracks?.items?.[0];

  if (track) {
    return {
      title: track.name,
      artist: track.artists.map((a: any) => a.name).join(', '),
      coverUrl: track.album.images[0]?.url,
      duration: `${Math.floor(track.duration_ms / 60000)}:${String(
        Math.floor((track.duration_ms % 60000) / 1000)
      ).padStart(2, '0')}`,
      spotifyUrl: track.external_urls.spotify,
    };
  }

  return null;
}

app.post('/gemini', async (c) => {
  try {
    const { prompt } = await c.req.json();
    const gemini = new GoogleGenerativeAI(c.env.GEMINI_API_KEY);
    const model = gemini.getGenerativeModel({ model: 'gemini-1.5-pro' });

    const result = await model.generateContent(prompt);
    let text = result.response.text();

    // Remove markdown
    if (text.startsWith('```json')) {
      text = text.replace(/```json\n/, '').replace(/```$/, '').trim();
    } else if (text.startsWith('```')) {
      text = text.replace(/```.*?\n/, '').replace(/```$/, '').trim();
    }

    const playlists = JSON.parse(text);

    for (const playlist of playlists) {
      for (let i = 0; i < playlist.songs.length; i++) {
        const song = playlist.songs[i];
        const enriched = await getSongFromSpotify(song.title, song.artist, c);
        if (enriched) {
          playlist.songs[i] = { ...song, ...enriched };
        }
      }
    }

    return c.json({ text: JSON.stringify(playlists, null, 2) });
  } catch (err: any) {
    console.error('Error:', err?.response?.data || err.message);
    return c.json({ error: 'Something went wrong' }, 500);
  }
});

app.get('/health',(c)=>{
return c.json({message:"server is healthy"});
})

export default app;
