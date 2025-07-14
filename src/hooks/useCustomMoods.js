import { useEffect, useState } from 'react';

export const useCustomMoods = () => {
  const [customMoods, setCustomMoods] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('customMoods')) || [];
    setCustomMoods(stored);
  }, []);

  const saveToStorage = (moods) => {
    localStorage.setItem('customMoods', JSON.stringify(moods));
    setCustomMoods(moods);
  };

  const addMood = (mood) => {
    const updated = [...customMoods, mood];
    saveToStorage(updated);
  };

  const deleteMood = (name) => {
    const updated = customMoods.filter((m) => m.name !== name);
    saveToStorage(updated);
  };

  const getMoodGenre = (moodName) => {
    return customMoods.find((m) => m.name === moodName)?.type || null;
  };

  return {
    customMoods,
    addMood,
    deleteMood,
    getMoodGenre
  };
};
