# 🎧 AI-Powered Playlist Generator

An intelligent music web app that generates personalized playlists based on your **mood** or **activity**, powered by **Google Gemini AI** and **Spotify**.

---

## 🌟 Features

- 🎶 **Mood/Activity-Based Playlists**  
  Enter a mood like “Happy” or an activity like “Studying” to get 3 creative and personalized playlists.

- 🧠 **Google Gemini AI Integration**  
  Uses Gemini to generate creative playlist names, descriptions, and suggested songs.

- 📀 **Spotify Song Enrichment**  
  Matches generated songs with Spotify to fetch **real cover images**, **duration**, and **streaming links**.

- ⚡ **Fast & Serverless**  
  Backend is built with [Hono](https://hono.dev/) and deployed as a **Cloudflare Worker**.

- 💻 **Frontend in React (TypeScript)**  
  Clean and responsive UI hosted on **Vercel**.

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|--------------------------------------|
| **Frontend**| React + TypeScript (Vercel)         |
| **Backend** | Hono (Cloudflare Workers)           |
| **APIs**    | Google Gemini API, Spotify Web API  |
| **HTTP**    | Axios                               |
| **Infra**   | Vercel (frontend) + Cloudflare (backend) |
| **Deploy**  | Wrangler CLI                        |

---

## 🚀 How It Works

1. User enters a **mood** or **activity**.
2. The app sends a prompt to **Google Gemini** via the backend.
3. Gemini returns playlist names, descriptions, and basic song info.
4. The backend uses **Spotify API** to find real track data (cover image, audio, etc.).
5. The enriched playlists are sent to the frontend and displayed beautifully.

---

## 📦 Installation (Dev)

> Frontend and backend are deployed separately (Vercel + Cloudflare Workers).

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
