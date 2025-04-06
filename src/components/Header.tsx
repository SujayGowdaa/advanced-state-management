import Button from './UI/Button.tsx';
import { useTimerContext } from '../store/timers-context.tsx';

export default function Header() {
  // But when you created the context, you likely did this:
  // const Context = createContext<TimersContextValue | null>(null);
  // This means that useContext(Context) can return:
  // a valid TimersContextValue
  // or null
  // So TypeScript says:
  // ⚠️ “Hey, this might be null—you need to handle that!”
  // adding ! (non-null assertion operator) after hook means we telling to TS: Trust me, this is not null at runtime. or to avoid using this apply a if check and check it the value is not null and use the value.

  const { isRunning } = useTimerContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
