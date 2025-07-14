import React, { useEffect, useState } from "react";
import Header from "./Header";
import MoodSelector from "./MoodSelector";
import { moodGenres } from "../data/moodData";
import MoodPlaylist from "./MoodPlaylist";
import Tagline from "./Tagline";

const Main = () => {
  const [currentMood, setCurrentMood] = useState(() => {
    const saved = localStorage.getItem("mood");
    return saved || "happy";
  });

  useEffect(() => {
    localStorage.setItem("mood", currentMood);
  }, [currentMood]);


  const selectedGenre = moodGenres[currentMood] || "pop";

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Header currentMood={currentMood} />
        <div className={`absolute inset-0 bg-neutral-900`} />
      </div>
      <div className="absolute top-[90px] w-full z-10 flex flex-col items-center justify-center">
        <Tagline currentMood={currentMood} />
        <MoodSelector currentMood={currentMood} onMoodSelect={setCurrentMood} />
        <MoodPlaylist genre={selectedGenre} currentMood={currentMood} />
      </div>
    </div>
  );
};

export default Main;
