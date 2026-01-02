
import { DayPlan } from './types';

export const WORKOUT_SCHEDULE: Record<string, DayPlan> = {
  Sunday: {
    name: "Lower Body A",
    focus: "Squat Focus",
    timeBlock: "PM Block",
    exercises: [
      "Barbell Squats (3 sets x 8 reps)",
      "Leg Press (3 sets x 12 reps)",
      "Leg Curls (3 sets x 12 reps)",
      "Calf Raises (4 sets x 15 reps)",
      "Planks (3 sets x 45s)"
    ],
    notes: "Get it done, eat high protein, sleep well."
  },
  Monday: {
    name: "Upper Body A",
    focus: "Push Focus",
    timeBlock: "PM Block",
    exercises: [
      "Bench Press (3 sets x 8-10 reps)",
      "Overhead DB Press (3 sets x 10 reps)",
      "Incline DB Press (3 sets x 12 reps)",
      "Lateral Raises (3 sets x 15 reps)",
      "Tricep Pushdowns (3 sets x 12 reps)"
    ]
  },
  Tuesday: {
    name: "Active Recovery",
    focus: "Cardio",
    timeBlock: "PM Block",
    exercises: [
      "Incline Walking (30-45 mins)",
      "Elliptical (30-45 mins)"
    ],
    notes: "Target HR: 120-130 bpm. No heavy lifting."
  },
  Wednesday: {
    name: "Rest Day",
    focus: "OFF",
    timeBlock: "N/A",
    exercises: [],
    notes: "Focus on recovery and mobility."
  },
  Thursday: {
    name: "Lower Body B",
    focus: "Deadlift Focus",
    timeBlock: "AM Block (Gold Time)",
    exercises: [
      "Deadlifts (3 sets x 6 reps)",
      "Walking Lunges (3 sets x 10/leg)",
      "Leg Extensions (3 sets x 15 reps)",
      "Cable Crunches (3 sets x 15 reps)"
    ],
    notes: "Hardest workout of the week. Use that morning energy!"
  },
  Friday: {
    name: "Upper Body B",
    focus: "Pull Focus",
    timeBlock: "AM Block (Gold Time)",
    exercises: [
      "Lat Pulldowns (3 sets x 10-12 reps)",
      "Seated Cable Rows (3 sets x 10-12 reps)",
      "Face Pulls (3 sets x 15 reps)",
      "Bicep Curls (3 sets x 10 reps)",
      "Hammer Curls (3 sets x 12 reps)"
    ]
  },
  Saturday: {
    name: "Active Recovery",
    focus: "Steps",
    timeBlock: "PM Block",
    exercises: [
      "45 mins Light Walking"
    ],
    notes: "Hit your 8k-10k step goal."
  }
};

export const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
