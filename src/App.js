import logo from "./logo.svg";
import "./App.css";

import { inject, observer } from "mobx-react";
import { useCallback, useEffect } from "react";

function App({ add, sub, database }) {
  console.log(database.Database);

  useEffect(() => {
    database.datainflow();
  }, [database]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {add.add1}
          {add.add2}
          {sub.sub1}
          {sub.sub2}
          {database.Database}
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

export default inject("add", "sub", "database")(observer(App));
