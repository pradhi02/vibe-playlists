
import { Playlist } from "../types/music";

export const mockPlaylists: Playlist[] = [
  {
    id: "1",
    name: "Happy Vibes",
    description: "Upbeat songs to boost your mood and get you feeling positive",
    coverUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    songs: [
      {
        id: "101",
        title: "Happy Together",
        artist: "The Turtles",
        coverUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "2:56"
      },
      {
        id: "102",
        title: "Walking on Sunshine",
        artist: "Katrina & The Waves",
        coverUrl: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "3:58"
      },
      {
        id: "103",
        title: "Good Vibrations",
        artist: "The Beach Boys",
        coverUrl: "https://images.unsplash.com/photo-1536849460588-696219a9e98d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "3:37"
      }
    ]
  },
  {
    id: "2",
    name: "Sad Songs for Rainy Days",
    description: "Emotional tracks for when you need to process feelings",
    coverUrl: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    songs: [
      {
        id: "201",
        title: "Someone Like You",
        artist: "Adele",
        coverUrl: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "4:45"
      },
      {
        id: "202",
        title: "Fix You",
        artist: "Coldplay",
        coverUrl: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "4:55"
      },
      {
        id: "203",
        title: "Hurt",
        artist: "Johnny Cash",
        coverUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "3:38"
      }
    ]
  },
  {
    id: "3",
    name: "Workout Intensity",
    description: "High-energy tracks to power through your fitness routine",
    coverUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    songs: [
      {
        id: "301",
        title: "Eye of the Tiger",
        artist: "Survivor",
        coverUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "4:05"
      },
      {
        id: "302",
        title: "Till I Collapse",
        artist: "Eminem",
        coverUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "4:57"
      },
      {
        id: "303",
        title: "Can't Hold Us",
        artist: "Macklemore & Ryan Lewis",
        coverUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "4:18"
      }
    ]
  },
  {
    id: "4",
    name: "Focus & Concentration",
    description: "Instrumental tracks to help you concentrate and be productive",
    coverUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    songs: [
      {
        id: "401",
        title: "Experience",
        artist: "Ludovico Einaudi",
        coverUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "5:15"
      },
      {
        id: "402",
        title: "Intro",
        artist: "The xx",
        coverUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "2:07"
      },
      {
        id: "403",
        title: "Strobe",
        artist: "Deadmau5",
        coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "10:37"
      }
    ]
  },
  {
    id: "5",
    name: "Driving Playlist",
    description: "Perfect tunes for your road trip adventures",
    coverUrl: "https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    songs: [
      {
        id: "501",
        title: "Life is a Highway",
        artist: "Tom Cochrane",
        coverUrl: "https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "4:26"
      },
      {
        id: "502",
        title: "Take It Easy",
        artist: "Eagles",
        coverUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "3:30"
      },
      {
        id: "503",
        title: "On the Road Again",
        artist: "Willie Nelson",
        coverUrl: "https://images.unsplash.com/photo-1549194388-f6947ea4e24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        duration: "2:32"
      }
    ]
  }
];
