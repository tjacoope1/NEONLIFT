
import React from 'react';
import { WORKOUT_SCHEDULE, DAYS_OF_WEEK } from '../constants';

const ScheduleView: React.FC = () => {
  return (
    <div className="space-y-6">
      <header className="space-y-2 mb-8">
        <h2 className="text-2xl font-rajdhani font-bold text-cyan-400">THE STRATEGY</h2>
        <div className="bg-cyan-500/10 border-l-4 border-cyan-500 p-4 rounded-r-xl">
          <p className="text-sm text-cyan-100 leading-relaxed">
            Your Thursday/Friday morning slots (9am – 3pm) are <span className="text-cyan-400 font-bold">"Gold Time"</span>. 
            Testosterone and energy levels are highest, perfect for your hardest lifts.
          </p>
        </div>
      </header>

      <div className="space-y-4">
        {DAYS_OF_WEEK.map((day) => {
          const plan = WORKOUT_SCHEDULE[day];
          const isGoldTime = plan.timeBlock.includes("AM Block");
          const isRest = plan.name.includes("Rest") || plan.name.includes("Active");

          return (
            <div 
              key={day} 
              className={`p-5 rounded-2xl border transition-all ${
                isGoldTime 
                ? 'bg-blue-900/20 border-blue-500/40 shadow-[0_0_15px_rgba(37,99,235,0.1)]' 
                : isRest 
                  ? 'bg-slate-900/30 border-slate-800' 
                  : 'bg-slate-900 border-cyan-500/20'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">{day}</h3>
                  <h4 className={`text-xl font-rajdhani font-bold ${isGoldTime ? 'text-blue-400' : 'text-slate-200'}`}>
                    {plan.name}
                  </h4>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter ${
                  isGoldTime ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {plan.timeBlock}
                </span>
              </div>
              
              {plan.exercises.length > 0 ? (
                <ul className="grid grid-cols-1 gap-1">
                  {plan.exercises.map((ex, i) => (
                    <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-cyan-500/50 rounded-full"></span>
                      {ex}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-600 italic">No scheduled weightlifting.</p>
              )}
            </div>
          );
        })}
      </div>

      <section className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="text-lg font-rajdhani font-bold text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.243a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM6.464 13.536a1 1 0 10-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z" />
          </svg>
          NUTRITION TIMING
        </h3>
        <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-200">PM Days (Sun/Mon):</strong> Decent lunch with carbs 2–3 hours before workout. Pure protein/veggie dinner afterward.
          </p>
          <p>
            <strong className="text-slate-200">AM Days (Thu/Fri):</strong> Lift at 9AM? Light breakfast at 8AM. Lift later? Treat lunch as pre-workout.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ScheduleView;
