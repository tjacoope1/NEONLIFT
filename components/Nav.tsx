
import React from 'react';
import { ViewType } from '../types';

interface NavProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Nav: React.FC<NavProps> = ({ activeView, onViewChange }) => {
  const tabs: { id: ViewType; label: string; icon: React.ReactNode }[] = [
    { 
      id: 'today', 
      label: 'Workout', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      id: 'log', 
      label: 'History', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      id: 'schedule', 
      label: 'Split', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50 px-6 pb-6">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex justify-around items-center p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onViewChange(tab.id)}
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-2xl transition-all duration-300 ${
              activeView === tab.id 
                ? 'text-cyan-400 bg-cyan-500/10' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {tab.icon}
            <span className="text-[10px] font-bold uppercase tracking-widest">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
