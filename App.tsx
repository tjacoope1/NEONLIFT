
import React, { useState, useEffect, useCallback } from 'react';
import { ViewType, WorkoutSet, DayPlan } from './types';
import { WORKOUT_SCHEDULE, DAYS_OF_WEEK } from './constants';
import RestTimer from './components/RestTimer';
import SetEntryForm from './components/SetEntryForm';
import SetList from './components/SetList';
import ScheduleView from './components/ScheduleView';
import Nav from './components/Nav';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('today');
  const [sets, setSets] = useState<WorkoutSet[]>([]);
  const [currentDay, setCurrentDay] = useState<string>('');

  // Load data
  useEffect(() => {
    const savedSets = localStorage.getItem('neonlift_sets');
    if (savedSets) {
      try {
        setSets(JSON.parse(savedSets));
      } catch (e) {
        console.error("Failed to parse saved sets", e);
      }
    }

    const today = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
    setCurrentDay(today);
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem('neonlift_sets', JSON.stringify(sets));
  }, [sets]);

  const addSet = useCallback((exercise: string, weight: number, reps: number) => {
    const newSet: WorkoutSet = {
      id: crypto.randomUUID(),
      exercise,
      weight,
      reps,
      timestamp: Date.now(),
      date: new Date().toLocaleDateString()
    };
    setSets(prev => [newSet, ...prev]);
  }, []);

  const deleteSet = useCallback((id: string) => {
    setSets(prev => prev.filter(s => s.id !== id));
  }, []);

  const clearToday = useCallback(() => {
    const todayStr = new Date().toLocaleDateString();
    if (window.confirm("Clear all logs for today?")) {
      setSets(prev => prev.filter(s => s.date !== todayStr));
    }
  }, []);

  const todayPlan: DayPlan = WORKOUT_SCHEDULE[currentDay] || WORKOUT_SCHEDULE['Sunday'];

  return (
    <div className="min-h-screen pb-24 max-w-md mx-auto bg-slate-950 text-slate-200">
      {/* Header */}
      <header className="p-6 pt-8 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 border-b border-cyan-500/20">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-rajdhani font-bold neon-text text-cyan-400">NEONLIFT</h1>
            <p className="text-slate-400 text-sm">{currentDay} &bull; {todayPlan.timeBlock}</p>
          </div>
          <RestTimer />
        </div>
      </header>

      <main className="px-4 py-6 space-y-8">
        {activeView === 'today' && (
          <div className="space-y-6">
            <section className="bg-slate-900/50 rounded-2xl border border-cyan-500/10 p-5 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-6 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]"></div>
                <h2 className="text-xl font-bold font-rajdhani">TODAY'S PLAN</h2>
              </div>
              <div className="space-y-1">
                <h3 className="text-cyan-400 font-semibold">{todayPlan.name}</h3>
                <p className="text-slate-400 text-sm italic">{todayPlan.focus}</p>
              </div>
              <ul className="space-y-2">
                {todayPlan.exercises.map((ex, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-cyan-500">•</span> {ex}
                  </li>
                ))}
              </ul>
              {todayPlan.notes && (
                <p className="text-xs text-slate-500 border-t border-slate-800 pt-3">
                  <span className="text-cyan-700 uppercase font-bold tracking-wider mr-1">Coach Note:</span>
                  {todayPlan.notes}
                </p>
              )}
            </section>

            <SetEntryForm onAdd={addSet} defaultExercise={todayPlan.exercises[0]?.split(' (')[0] || ''} />
            
            <div className="flex justify-between items-end">
              <h2 className="text-xl font-rajdhani font-bold flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-600 rounded-full shadow-[0_0_10px_#2563eb]"></span>
                LIVE LOG
              </h2>
              <button 
                onClick={clearToday}
                className="text-xs text-red-500 uppercase tracking-widest font-bold opacity-60 hover:opacity-100"
              >
                Clear Today
              </button>
            </div>
            
            <SetList 
              sets={sets.filter(s => s.date === new Date().toLocaleDateString())} 
              onDelete={deleteSet} 
            />
          </div>
        )}

        {activeView === 'log' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-rajdhani font-bold text-blue-400 border-b border-blue-500/30 pb-2">HISTORY</h2>
            <SetList 
              sets={sets} 
              onDelete={deleteSet} 
              showDate
            />
          </div>
        )}

        {activeView === 'schedule' && (
          <ScheduleView />
        )}
      </main>

      <Nav activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
};

export default App;
