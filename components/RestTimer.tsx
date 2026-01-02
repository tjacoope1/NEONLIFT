
import React, { useState, useEffect, useRef } from 'react';

const RestTimer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let interval: number | undefined;

    if (isActive && seconds > 0) {
      interval = window.setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0 && isActive) {
      setIsActive(false);
      // Optional: Sound notification if browser allows
      if (window.navigator.vibrate) {
        window.navigator.vibrate([200, 100, 200]);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setSeconds(60);
      setIsActive(true);
    }
  };

  return (
    <button
      onClick={toggleTimer}
      className={`relative w-14 h-14 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
        isActive 
        ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.6)]' 
        : 'bg-slate-800 text-cyan-400 border border-cyan-500/30'
      }`}
    >
      {isActive ? (
        <>
          <span className="text-lg font-bold font-rajdhani leading-none">{seconds}</span>
          <span className="text-[8px] font-bold uppercase tracking-tighter">Sec</span>
        </>
      ) : (
        <>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[8px] font-bold uppercase tracking-tighter mt-0.5">Rest</span>
        </>
      )}
      
      {/* Ring Progress Overlay */}
      {isActive && (
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="28"
            cy="28"
            r="26"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="163"
            strokeDashoffset={163 - (163 * seconds) / 60}
            className="transition-all duration-1000 linear"
            style={{ transformOrigin: 'center' }}
          />
        </svg>
      )}
    </button>
  );
};

export default RestTimer;
