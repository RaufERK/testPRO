import { makeAutoObservable } from 'mobx';
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

export default Store
