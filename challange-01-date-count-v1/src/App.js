import { useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  // const [date, updateDay] = useState(new Date(2026, 3, 15));
  const date = new Date(Date.now());
  date.setDate(date.getDate() + count);

  function handlePlus() {
    setStep((step) => step + 1);
  }

  function handleMinus() {
    setStep((step) => step - 1);
  }

  function countPlus() {
    setCount((count) => count + step);
  }

  function countMinus() {
    setCount((count) => count - step);
  }

  return (
    <>
      <div>
        <button onClick={handleMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={handlePlus}>+</button>
      </div>

      <div>
        <button onClick={countMinus}>-</button>
        <span>Count: {count}</span>
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
    </>
  );
}

export default App;
