import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);
  const date = new Date("22 Jul 2028");

  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(1);
    setStep(1);
  }

  return (
    <div className="container">
      <div className="step">
        <input
          type="range"
          min={1}
          max={20}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <em>{step}</em>
      </div>
      <div className="counter">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="step">
        {/* <p>{date.getDate()} Hi</p> */}
        <p>
          {count === 1
            ? `Today is: ${date}`
            : count > 0
            ? `The date from ${count} days After is: ${date}`
            : `The date ${Math.abs(count)} days ago is: ${date}`}
        </p>
      </div>
      <div className="step">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
