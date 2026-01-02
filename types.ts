
export interface WorkoutSet {
  id: string;
  exercise: string;
  weight: number;
  reps: number;
  timestamp: number;
  date: string;
}

export interface DayPlan {
  name: string;
  focus: string;
  timeBlock: string;
  exercises: string[];
  notes?: string;
}

export type ViewType = 'today' | 'log' | 'schedule';
