import { computed, makeObservable, observable } from "mobx";
import add from "./add";
import sub from "./sub";

export default class root {
  constructor() {
    this.add = new add(this);
    this.sub = new sub(this);
  }
}
