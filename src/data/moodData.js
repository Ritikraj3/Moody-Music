// moodData.js
import { Smile, Frown, Flame, Cloud, Target, Heart } from 'lucide-react';

export const moodThemes = {
  happy: {
    text: 'text-yellow-700',
    accent: 'bg-yellow-500',
    gradient: 'bg-gradient-to-r from-yellow-900',
    searchBar: 'focus:ring-yellow-400'
  },
  sad: {
    text: 'text-indigo-700',
    accent: 'bg-indigo-500',
    gradient: 'bg-gradient-to-r from-indigo-900',
    searchBar: 'focus:ring-indigo-400'
  },
  angry: {
    text: 'text-red-800',
    accent: 'bg-red-500',
    gradient: 'bg-gradient-to-r from-red-900',
    searchBar: 'focus:ring-red-400'
  },
  chill: {
    text: 'text-purple-700',
    accent: 'bg-purple-500',
    gradient: 'bg-gradient-to-r from-purple-900',
    searchBar: 'focus:ring-purple-400'
  },
  focused: {
    text: 'text-emerald-700',
    accent: 'bg-emerald-500',
    gradient: 'bg-gradient-to-r from-emerald-900',
    searchBar: 'focus:ring-emerald-400'
  },
  romantic: {
    text: 'text-rose-700',
    accent: 'bg-rose-500',
    gradient: 'bg-gradient-to-r from-rose-900',
    searchBar: 'focus:ring-rose-400'
  }
};

export const moodIcons = {
  happy: Smile,
  sad: Frown,
  angry: Flame,
  chill: Cloud,
  focused: Target,
  romantic: Heart
};

export const moodGenres = {
  happy: 'pop dance',
  sad: 'sad ankit tiwari Arijit',
  angry: 'phonk angry rap',
  chill: 'chill',
  focused: 'spiritual, aarti focus',
  romantic: 'love'
};
