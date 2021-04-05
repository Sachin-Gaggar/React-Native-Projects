import {observable, action, computed, makeObservable} from 'mobx';

class CounterStore {
  constructor() {
    makeObservable(this);
  }
  @observable count = 0;

  @action increment() {
    console.log('Hi');
    this.count++;
  }
  @action decrement() {
    this.count--;
  }

  @computed get getUpdatedCount() {
    return `Current Count:${this.count}`;
  }
}

export default new CounterStore();
