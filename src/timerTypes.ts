export type Timer = {
  name: string;
  duration: number;
};

export type TimersState = {
  timers: Timer[];
  isRunning: boolean;
};

export type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};
