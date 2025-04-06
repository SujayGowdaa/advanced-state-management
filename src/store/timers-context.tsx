import { createContext, useContext, type ReactNode } from 'react';

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  timers: Timer[];
  isRunning: boolean;
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

const Context = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const contextValue = {
    timers: [],
    isRunning: false,
    addTimer() {
      // ...
    },
    startTimer() {
      // ...
    },
    stopTimer() {
      // ...
    },
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export function useTimerContext() {
  const context = useContext(Context)!;

  if (!context) {
    throw new Error(
      'Wrap the Provider component to the component where you want to access the context.'
    );
  }

  return context;
}
