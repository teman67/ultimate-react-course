import { use, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setSteps] = useState(1);
  // const arr = useState(1);
  // console.log(arr);
  // const [test, setTest] = useState({ name: "John" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // alert("previous");
    // if (step > 1) setSteps(step - 1);
    if (step > 1) setSteps((s) => s - 1);
  }

  function handleNext() {
    // alert("next");
    // if (step < 3) setSteps(step + 1);
    if (step < 3) setSteps((s) => s + 1);
    // setTest({ name: "Jane" });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <span className={`${step >= 1 ? "active" : ""}`}>1</span>
            <span className={`${step >= 2 ? "active" : ""}`}>2</span>
            <span className={`${step >= 3 ? "active" : ""}`}>3</span>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
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
    </>
  );
}

export default App;
