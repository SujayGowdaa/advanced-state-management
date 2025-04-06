import { Timer, TimersState } from '../timerTypes';

type Action =
  | {
      type: 'ADD';
      payload: Timer;
    }
  | {
      type: 'START';
    }
  | {
      type: 'STOP';
    };

export function reducer(state: TimersState, action: Action): TimersState {
  if (action.type === 'ADD') {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }
  if (action.type === 'START') {
    return { ...state, isRunning: true };
  }
  if (action.type === 'STOP') {
    return { ...state, isRunning: false };
  }

  return state;
}
