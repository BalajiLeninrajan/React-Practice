import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [counter, setCounter] = useState(0);
    const [enable, setEnable] = useState(false);

    useEffect(() => {
        let intervalId;

        if (enable) {
            intervalId = setInterval(() => {
                setCounter(counter + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [counter, enable]);

    const toggle = () => {
        setEnable(!enable);
    };

    const reset = () => {
        setEnable(false);
        setCounter(0);
    };

    return (
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={toggle}>{enable ? "Stop" : "Start"}</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default App;
