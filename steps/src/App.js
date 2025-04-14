import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
      <Step />
      <Step />
    </>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  function handlePrevious() {
    // This is wrong way
    // setStep(step > 1 ? step - 1 : step)

    // Correct way: using call back function
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }

  function handleNext() {
    // This is wrong way
    // setStep(step < 3 ? step + 1 : step);

    // Correct way: using call back function
    setStep((step) => {
      return step < 3 ? step + 1 : step;
    });
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        close
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
