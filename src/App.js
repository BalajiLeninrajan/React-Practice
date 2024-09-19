import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [enable, setEnable] = useState(false);

  // implement the 2 fucntions
  function toggle() {}
  function reset() {}

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={toggle}>{enable ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
