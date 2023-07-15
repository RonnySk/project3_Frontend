import React, { useState } from "react";
import Step1Component from "./Step1Component";
import Step2Component from "./Step2Component";
import StepsList from "./StepsList";
import TasksList from "./TaskList";
import Popup from "./PopUp";
import "../css/StepsInProcess.css";

function StepsInProcess() {
  const [step, setStep] = useState(1);
  const [checklist, setChecklist] = useState({
    1: { task1: false, task2: false, task3: false },
    2: { task1: false, task2: false, task3: false },
    3: { task1: false, task2: false, task3: false },
    4: { task1: false, task2: false, task3: false },
    5: { task1: false, task2: false, task3: false },
  });
  const [popupText, setPopupText] = useState("");

  const nextStep = () => {
    if (step < 5) {
      if (Object.values(checklist[step]).every((val) => val)) {
        setStep(step + 1);
      } else {
        setPopupText("Please complete all tasks before moving to the next step.");
      }
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleCheck = (step, task) => {
    setChecklist((prevChecklist) => ({
      ...prevChecklist,
      [step]: { ...prevChecklist[step], [task]: !prevChecklist[step][task] },
    }));
  };

  const closePopup = () => {
    setPopupText("");
  };

  const stepComponents = {
    1: Step1Component,
    2: Step2Component,
    // Add other step components here...
  };

  const stepTasks = {
    1: ["Task 1: Look online for advisors", "Task 2: Read reviews", "Task 3: Compare rates", "Task 4: Know how much you can afford"],
    2: ["Task 1: Call and set up a meeting", "Task 2: Prepare questions", "Task 3: Confirm appointment"],
    3: ["Task 1: Research potential neighborhoods", "Task 2: Attend open houses", "Task 3: Consider property features"],
    4: ["Task 1: Determine your offer", "Task 2: Negotiate price and terms", "Task 3: Review and finalize agreement"],
    5: ["Task 1: Complete financing arrangements", "Task 2: Conduct property inspection", "Task 3: Sign the closing documents"],
  };

  const StepComponent = stepComponents[step];

  return (
    <div className="steps-in-process">
      <StepsList currentStep={step} />
      {StepComponent && <StepComponent />}
      <TasksList tasks={stepTasks[step]} checklist={checklist} currentStep={step} toggleCheck={toggleCheck} />
      <div className="button-container">
        <button className="button" onClick={prevStep}>
          Previous
        </button>
        <button className="button" onClick={nextStep}>
          Next
        </button>
      </div>
      {popupText && <Popup text={popupText} onClose={closePopup} />}
    </div>
  );
}

export default StepsInProcess;
