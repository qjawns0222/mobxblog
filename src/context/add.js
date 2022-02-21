import { action, computed, makeObservable, observable } from "mobx";

export default class add {
  @observable
  add1 = 1;
  @observable
  add2 = 2;

  constructor(roots) {
    makeObservable(this);
    this.sub = roots;
  }
  @action
  clicked() {
    this.add1 = this.add1 + 1;
    console.log(this.add1);
  }
  @computed
  get addcompute() {
    if (this.add1 > 10) {
      return 10;
    } else {
      return 0;
    }
  }
  @action
  actionadd() {
    this.sub.sub.sub1++;
    this.add1++;
    this.add2 = 3;
  }
}
