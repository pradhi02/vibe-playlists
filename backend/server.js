const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3001;

// Gemini setup
const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = gemini.getGenerativeModel({ model: "gemini-1.5-pro" });

// Spotify Auth Token
let spotifyAccessToken = null;

async function getSpotifyAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const token = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

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

// Search song on Spotify
async function getSongFromSpotify(title, artist) {
  if (!spotifyAccessToken) {
    await getSpotifyAccessToken();
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
      artist: track.artists.map(a => a.name).join(', '),
      coverUrl: track.album.images[0]?.url,
      duration: `${Math.floor(track.duration_ms / 60000)}:${String(Math.floor((track.duration_ms % 60000) / 1000)).padStart(2, '0')}`,
      spotifyUrl: track.external_urls.spotify,
    };
  }

  return null;
}

// Gemini + Spotify route
app.post('/gemini', async (req, res) => {
  try {
    const { prompt } = req.body;
    const result = await model.generateContent(prompt);
    let text = result.response.text();

    // Remove markdown code block
    if (text.startsWith("```json")) {
      text = text.replace(/```json\n/, '').replace(/```$/, '').trim();
    } else if (text.startsWith("```")) {
      text = text.replace(/```.*?\n/, '').replace(/```$/, '').trim();
    }

    const playlists = JSON.parse(text);

    for (const playlist of playlists) {
      for (let i = 0; i < playlist.songs.length; i++) {
        const song = playlist.songs[i];
        const enriched = await getSongFromSpotify(song.title, song.artist);
        if (enriched) {
          playlist.songs[i] = { ...song, ...enriched };
        }
      }
    }

    res.json({ text: JSON.stringify(playlists, null, 2) });
  } catch (err) {
    console.error('Error:', err?.response?.data || err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
