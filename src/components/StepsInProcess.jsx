/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import StepsList from "./StepsList";
import TasksList from "./TaskList";

const buttonStyle = css`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 16px;
`;

function StepsInProcess() {
  const [step, setStep] = useState(1);
  const [checklist, setChecklist] = useState({
    1: { task1: false, task2: false, task3: false },
    2: { task1: false, task2: false, task3: false },
    3: { task1: false, task2: false, task3: false },
    4: { task1: false, task2: false, task3: false },
    5: { task1: false, task2: false, task3: false },
  });

  const nextStep = () => {
    if (step < 5) {
      if (Object.values(checklist[step]).every((val) => val)) {
        setStep(step + 1);
      } else {
        alert("Please complete all tasks before moving to the next step.");
      }
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
    1: "Find a mortgage advisor",
    2: "Schedule an appointment",
    3: "Find a house",
    4: "Negotiation",
    5: "Finalizing the deal",
  };

  const stepTasks = {
    1: ["Task 1: Look online for advisors", "Task 2: Read reviews", "Task 3: Compare rates"],
    2: ["Task 1: Call and set up a meeting", "Task 2: Prepare questions", "Task 3: Confirm appointment"],
    3: ["Task 1: Research potential neighborhoods", "Task 2: Attend open houses", "Task 3: Consider property features"],
    4: ["Task 1: Determine your offer", "Task 2: Negotiate price and terms", "Task 3: Review and finalize agreement"],
    5: ["Task 1: Complete financing arrangements", "Task 2: Conduct property inspection", "Task 3: Sign the closing documents"],
  };

  return (
    <div>
      <StepsList currentStep={step} />
      <p>{stepTexts[step]}</p>
      <TasksList tasks={stepTasks[step]} checklist={checklist} currentStep={step} toggleCheck={toggleCheck} />
      <button css={buttonStyle} onClick={prevStep}>
        Previous
      </button>
      <button css={buttonStyle} onClick={nextStep}>
        Next
      </button>
    </div>
  );
}

export default StepsInProcess;
