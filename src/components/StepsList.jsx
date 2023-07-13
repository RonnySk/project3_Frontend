import React from "react";

function StepsList({ currentStep }) {
  const stepsStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    listStyleType: "none",
    marginBottom: "30px",
  };

  const stepStyle = (isActive, isCompleted) => ({
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: isCompleted ? "green" : isActive ? "blue" : "grey",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <ul style={stepsStyle}>
      <li style={stepStyle(currentStep === 1, currentStep > 1)}>{currentStep > 1 ? "✓" : 1}</li>
      <li style={stepStyle(currentStep === 2, currentStep > 2)}>{currentStep > 2 ? "✓" : 2}</li>
      <li style={stepStyle(currentStep === 3, currentStep > 3)}>{currentStep > 3 ? "✓" : 3}</li>
      <li style={stepStyle(currentStep === 4, currentStep > 4)}>{currentStep > 4 ? "✓" : 4}</li>
      <li style={stepStyle(currentStep === 5, currentStep > 5)}>{currentStep > 5 ? "✓" : 5}</li>
    </ul>
  );
}

export default StepsList;
