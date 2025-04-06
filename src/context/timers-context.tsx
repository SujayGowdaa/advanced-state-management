import { createContext, useContext, useReducer, type ReactNode } from 'react';
import { Timer, TimersContextValue, TimersState } from '../timerTypes';
import { reducer } from '../reducers/timerReducer';

const Context = createContext<TimersContextValue | null>(null);

const initialState: TimersState = {
  timers: [],
  isRunning: true,
};

export default function TimersContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = {
    timers: state.timers,
    isRunning: state.isRunning,
    addTimer(timerData: Timer) {
      dispatch({
        type: 'ADD',
        payload: timerData,
      });
    },
    startTimer() {
      dispatch({ type: 'START' });
    },
    stopTimer() {
      dispatch({ type: 'STOP' });
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
