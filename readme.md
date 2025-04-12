
# 🎧 VibeSync – Your Mood. Our AI. Instant Vibes.

Feeling ✨main character✨? Heartbroken at 2AM? Just saw a crow and now you’re emo? 😭  
Say no more. 😏  

Just tell **VibeSync** the vibe — one word, one weird thought, one chaotic feeling — and we’ll drop a playlist that *gets you*. 😜

AI-powered. Emotion-fueled. Zero scrolling, full serotonin. 📈  
When words fail, music speaks.  
When effort fails, **VibeSync** delivers.

---

## 🌟 Features

### 🎶 Mood/Activity-Based Playlists  
Enter a mood like `"Happy"` or an activity like `"Studying"` to get 3 creative and personalized playlists.

### 🧠 Google Gemini AI Integration  
Uses Gemini to generate unique playlist names, descriptions, and suggested song lists.

### 📀 Spotify Song Enrichment  
Matches generated songs with Spotify to fetch:
- Cover images  
- Track durations  
- Streaming links  

### ⚡ Fast & Serverless  
Backend is built with **Hono** and deployed as a **Cloudflare Worker**.

### 💻 Frontend in React (TypeScript)  
Clean and responsive UI hosted on **Vercel**.

---

## 🛠️ Tech Stack Layer

| Layer        | Tech |
|--------------|------|
| **Frontend** | React + TypeScript (Vercel) |
| **Backend**  | Hono (Cloudflare Workers) |
| **APIs**     | Google Gemini API, Spotify Web API |
| **HTTP**     | Axios |
| **Infra**    | Vercel (frontend), Cloudflare (backend) |
| **Deploy**   | Wrangler CLI |

---

## 🚀 How It Works

1. User enters a mood or activity.  
2. App sends the prompt to **Google Gemini** via the backend.  
3. Gemini responds with playlist names, descriptions, and basic song info.  
4. Backend hits **Spotify API** to fetch real data (cover, duration, audio links).  
5. Final enriched playlists are displayed beautifully on the frontend.

---

## 📦 Installation (Dev)

### Frontend (React)
```bash
cd frontend
npm install
npm run dev

cd backend
npm install
wrangler dev
