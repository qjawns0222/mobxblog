import { DOM_KEY_LOCATION } from "@testing-library/user-event/dist/keyboard/types";
import { action, computed, flow, makeObservable, observable } from "mobx";

export default class Database {
  @observable
  Database = [];

  constructor(roots) {
    makeObservable(this);
  }
  @action
  success(data) {
    this.Database = data;
  }

  async datain() {
    try {
      const res = await { data: ["hi", "hello", "bye"] };
      this.success(res.data);
    } catch (e) {
      console.alert(e);
    }
  }

  @flow
  *datainflow() {
    try {
      const res = yield { data: ["hi", "hello", "bye"] };
      this.success(res.data);
    } catch (e) {
      console.alert(e);
    }
  }
}
