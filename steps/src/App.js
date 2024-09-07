import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

  const stepsMessage = [
    "Hi, Pls enter your details",
    "Apply for jobs",
    "Hurray, you have applied the job",
  ];

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  // function handleClose() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <>
      {/* <button className="close" onClick={handleClose}> */}
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            step {step}: {stepsMessage[step - 1]}
          </div>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              <span>Previous</span>
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

{
  /* <div className={`${step >= 2 ? "active" : ""}`}>2</div>
      <div className={`${step >= 3 ? "active" : ""}`}>3</div>  
  /* {step === 1 && "Hello"}
        {step === 2 && "Apply Jobs"}
        {step === 3 && "Hurray, You have Applied"} */
}
