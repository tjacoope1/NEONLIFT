
import React from 'react';
import { WorkoutSet } from '../types';

interface SetListProps {
  sets: WorkoutSet[];
  onDelete: (id: string) => void;
  showDate?: boolean;
}

const SetList: React.FC<SetListProps> = ({ sets, onDelete, showDate = false }) => {
  if (sets.length === 0) {
    return (
      <div className="text-center py-12 px-4 border-2 border-dashed border-slate-800 rounded-2xl">
        <p className="text-slate-500 font-medium">No sets logged yet.</p>
        <p className="text-slate-600 text-sm">Time to hit the iron!</p>
      </div>
    );
  }

  // Grouping logic for history view
  const groups: Record<string, WorkoutSet[]> = {};
  sets.forEach(s => {
    const key = showDate ? s.date : s.exercise;
    if (!groups[key]) groups[key] = [];
    groups[key].push(s);
  });

  return (
    <div className="space-y-6">
      {Object.entries(groups).map(([groupName, groupSets]) => (
        <div key={groupName} className="space-y-3">
          {showDate && (
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] border-b border-slate-900 pb-2">
              {groupName}
            </h3>
          )}
          <div className="space-y-2">
            {groupSets.map((set) => (
              <div 
                key={set.id} 
                className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 flex justify-between items-center group hover:border-cyan-500/30 transition-all"
              >
                <div>
                  <h4 className="font-bold text-slate-200">{set.exercise}</h4>
                  <p className="text-cyan-400 font-rajdhani font-medium">
                    {set.weight} <span className="text-slate-500 text-xs">KG</span> &times; {set.reps} <span className="text-slate-500 text-xs">REPS</span>
                  </p>
                </div>
                <button 
                  onClick={() => onDelete(set.id)}
                  className="p-2 text-slate-600 hover:text-red-500 transition-colors"
                  aria-label="Delete set"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SetList;
