/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const stepsStyle = css`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin-bottom: 30px;
`;

const stepStyle = (isActive, isCompleted) => css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${isCompleted ? "green" : isActive ? "blue" : "grey"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const buttonStyle = css`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 16px;
`;

const checklistStyle = css`
  list-style-type: none;
`;

function StepsInProcess() {
  const [step, setStep] = useState(1);
  const [checklist, setChecklist] = useState({
    1: { task1: false, task2: false, task3: false },
    // Add more tasks for other steps if needed
  });

  const nextStep = () => {
    if (step < 5 && Object.values(checklist[step]).every((val) => val)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleCheck = (step, task) => {
    setChecklist({
      ...checklist,
      [step]: { ...checklist[step], [task]: !checklist[step][task] },
    });
  };

  const stepTexts = {
    1: "Zoek een hypotheekadviseur",
    2: "Plan een afspraak",
    // Remaining steps
  };

  const stepTasks = {
    1: ["Taak 1: Kijk online voor adviseurs", "Taak 2: Lees recensies", "Taak 3: Vergelijk tarieven"],
    // Add tasks for other steps if needed
  };

  return (
    <div>
      <ul css={stepsStyle}>
        {[...Array(5)].map((_, i) => {
          const stepNumber = i + 1;
          return (
            <li css={stepStyle(stepNumber === step, stepNumber < step)} key={stepNumber}>
              {stepNumber < step ? "✓" : stepNumber}
            </li>
          );
        })}
      </ul>
      <p>{stepTexts[step]}</p>
      <ul css={checklistStyle}>
        {stepTasks[step]?.map((task, i) => (
          <li key={i}>
            <input type="checkbox" checked={checklist[step][`task${i + 1}`]} onChange={() => toggleCheck(step, `task${i + 1}`)} /> {task}
          </li>
        ))}
      </ul>
      <button css={buttonStyle} onClick={prevStep}>
        Vorige
      </button>
      <button css={buttonStyle} onClick={nextStep}>
        Volgende
      </button>
    </div>
  );
}

export default StepsInProcess;
