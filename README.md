🎧 VibeSync– Your Mood. Our AI. Instant Vibes.
Feeling ✨main character✨? Heartbroken at 2AM? Just saw a crow and now you’re emo?😭

Say no more.😏 Just tell VibeSync the vibe — one word, one weird thought, one chaotic feeling — and we’ll drop a playlist that gets you.😜

AI-powered. Emotion-fueled. Zero scrolling, full serotonin.📈

When words fail, music speaks.
When effort fails, VibSync delivers.


🌟 Features
🎶 Mood/Activity-Based Playlists
Enter a mood like “Happy” or an activity like “Studying” to get 3 creative and personalized playlists.

🧠 Google Gemini AI Integration
Uses Gemini to generate creative playlist names, descriptions, and suggested songs.

📀 Spotify Song Enrichment
Matches generated songs with Spotify to fetch real cover images, duration, and streaming links.

⚡ Fast & Serverless
Backend is built with Hono and deployed as a Cloudflare Worker.




💻 Frontend in React (TypeScript)
Clean and responsive UI hosted on Vercel.

🛠️ Tech Stack
Layer	Technology
Frontend	React + TypeScript (Vercel)
Backend	Hono (Cloudflare Workers)
APIs	Google Gemini API, Spotify Web API
HTTP	Axios
Infra	Vercel (frontend) + Cloudflare (backend)
Deploy	Wrangler CLI

🚀 How It Works
User enters a mood or activity.
The app sends a prompt to Google Gemini via the backend.
Gemini returns playlist names, descriptions, and basic song info.
The backend uses Spotify API to find real track data (cover image, audio, etc.).
The enriched playlists are sent to the frontend and displayed beautifully.
📦 Installation (Dev)
Frontend and backend are deployed separately (Vercel + Cloudflare Workers).

Frontend (React)
cd frontend
npm install
npm run dev
