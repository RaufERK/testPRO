import { List } from './components/List';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import TimerView from './components/TimerView';
import Box1 from './components/Box1';

class Store {
  secondsPassed = 0;
  list = [];

  constructor() {
    makeAutoObservable(this);
  }

  setList(list) {
    this.list = list;
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

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

export default observer(App);
