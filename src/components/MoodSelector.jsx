// MoodSelector.jsx
import React from 'react';
import { moodIcons, moodThemes } from '../data/moodData';

const MoodSelector = ({ currentMood, onMoodSelect }) => {
  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-2xl mx-auto p-4">
        {Object.keys(moodThemes).map((mood) => {
          const Icon = moodIcons[mood];
          const isSelected = mood === currentMood;
          const theme = moodThemes[mood];

          return (
            <button
              key={mood}
              onClick={() => onMoodSelect(mood)}
              className={`
                flex flex-col items-center justify-center p-4 rounded-xl
                transition-all duration-300 transform hover:scale-105
                ${isSelected ? `${theme.accent} text-white shadow-lg scale-105` : 'bg-zinc-800 shadow-md hover:shadow-lg'}
              `}
            >
              <Icon className={`w-8 h-8 mb-2 ${isSelected ? 'text-white' : theme.text}`} />
              <span className={`capitalize ${isSelected ? 'text-white' : theme.text}`}>
                {mood}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MoodSelector;
