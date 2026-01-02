
import React, { useState } from 'react';

interface SetEntryFormProps {
  onAdd: (exercise: string, weight: number, reps: number) => void;
  defaultExercise: string;
}

const SetEntryForm: React.FC<SetEntryFormProps> = ({ onAdd, defaultExercise }) => {
  const [exercise, setExercise] = useState(defaultExercise);
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!exercise || !weight || !reps) return;
    
    onAdd(exercise, parseFloat(weight), parseInt(reps));
    
    // Clear numeric fields but keep exercise for the next set
    setWeight('');
    setReps('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-5 shadow-xl space-y-4">
      <div className="space-y-2">
        <label className="text-xs font-bold text-cyan-500/70 uppercase tracking-widest ml-1">Exercise</label>
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="e.g. Bench Press"
          className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-slate-100 focus:outline-none focus:border-cyan-500/50 transition-colors"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-cyan-500/70 uppercase tracking-widest ml-1">Weight (kg/lb)</label>
          <input
            type="number"
            inputMode="decimal"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="0"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-slate-100 focus:outline-none focus:border-cyan-500/50 transition-colors"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-cyan-500/70 uppercase tracking-widest ml-1">Reps</label>
          <input
            type="number"
            inputMode="numeric"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="0"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-slate-100 focus:outline-none focus:border-cyan-500/50 transition-colors"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] active:scale-95 transition-all uppercase tracking-widest flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Set
      </button>
    </form>
  );
};

export default SetEntryForm;
