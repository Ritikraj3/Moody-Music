import React from "react";
import { moodThemes } from '../data/moodData';

const Header = ({currentMood}) => {
      const theme = moodThemes[currentMood];
  return (
    <div className="absolute top-0 w-full z-50 ">
      <div className="flex items-center justify-between md:px-14 px-6 h-[]  ">
        <div >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="neonGradient"
                x1="0"
                y1="0"
                x2="64"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9333EA" />
                <stop offset="0.5" stopColor="#EC4899" />
                <stop offset="1" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <path
              d="M4 32C8 32 8 16 12 16C16 16 16 48 20 48C24 48 24 16 28 16C32 16 32 48 36 48C40 48 40 16 44 16C48 16 48 48 52 48C56 48 56 32 60 32"
              stroke="url(#neonGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h1 className={`text-2xl font-bold ${theme.text}`}>Moody Music</h1>
        </div>
      </div>
      <div className="absolute top-[60px] w-full z-40">
    <hr className={`w-full h-0.25  border-0 ${theme.accent} `}/>
  </div>
    </div>
  );
};

export default Header;
