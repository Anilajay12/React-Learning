import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);

  const date = new Date("22 Jul 2028");
  date.setDate(date.getDate() + count);

  function incStep() {
    setStep((s) => s + 1);
  }

  function decStep() {
    setStep((s) => s - 1);
  }

  function incCount() {
    setCount((c) => c + step);
  }
  function decCount() {
    setCount((c) => c - step);
  }

  return (
    <div className="container">
      <div className="step">
        <button onClick={decStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={incStep}>+</button>
      </div>
      <div className="step">
        <p>
          {count === 1
            ? `Today is: ${date}`
            : count > 0
            ? `The date from ${count} day is: ${date}`
            : `The date ${count} days ago is: ${date}`}
        </p>
      </div>
      <div className="count">
        <button onClick={decCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={incCount}>+</button>
      </div>
    </div>
  );
}
