import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [date, updateDay] = useState(new Date(2026, 3, 15));
  const date = new Date(Date.now());
  date.setDate(date.getDate() + count);

  function countPlus() {
    setCount((count) => count + step);
  }

  function countMinus() {
    setCount((count) => count - step);
  }

  function handleReset() {
    setStep(() => 1);
    setCount(() => 0);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={countMinus}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={countPlus}>+</button>
      </div>

      <div>
        <span>
          {count === 0
            ? `Today is ${date.toDateString()}`
            : count > 0
            ? `${count} days from today is ${date.toDateString()}`
            : `${Math.abs(count)} days before today is ${date.toDateString()}`}
        </span>
      </div>

      <div>
        {step !== 1 || count !== 0 ? (
          <button onClick={handleReset}>Reset</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
