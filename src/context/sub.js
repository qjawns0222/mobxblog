import { computed, makeObservable, observable } from "mobx";

export default class sub {
  @observable
  sub1 = 8;
  @observable
  sub2 = 9;

  constructor(roots) {
    makeObservable(this);
    this.add = roots;
  }
}
