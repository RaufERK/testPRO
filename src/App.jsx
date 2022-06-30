import { List } from './components/List';
import Store from './stores/store';
import TimerView from './components/TimerView';
import Box1 from './components/Box1';

const store = new Store();

const App = () => {
  return (
    <>
      <TimerView store={store} />
      <Box1 store={store} />
      <List store={store} />
    </>
  );
};

export default App;
