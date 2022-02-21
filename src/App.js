import logo from "./logo.svg";
import "./App.css";

import { inject, observer } from "mobx-react";

function App({ add, sub }) {
  console.log("render");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {add.add1}
          {add.add2}
          {sub.sub1}
          {sub.sub2}
        </p>
        <button onClick={click}>증가</button>
      </header>
    </div>
  );
  function click() {
    setTimeout(() => {
      add.actionadd();
    }, 500);
  }
}

export default inject("add", "sub")(observer(App));
