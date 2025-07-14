import React from "react";
import { moodThemes } from "../data/moodData";

const Tagline = ({ currentMood }) => {
  const theme = moodThemes[currentMood];

  return (
    <div className="w-full mt-4 px-4 flex flex-col items-center gap-4">
      <h1
        className={`text-xl sm:text-3xl md:text-4xl font-bold text-center ${theme.text}`}
      >
        How are you feeling today? Tap a mood
      </h1>
      <p
        className={`text-lg sm:text-xl font-medium text-center ${theme.text} opacity-80`}
      >
        --and let the music match your vibe--
      </p>
      
    </div>
  );
};

export default Tagline;
