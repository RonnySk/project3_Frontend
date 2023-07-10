/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Step from "./Step";

const stepsStyle = css`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin-bottom: 30px;
`;

function StepsList({ currentStep }) {
  return (
    <ul css={stepsStyle}>
      {[...Array(5)].map((_, i) => {
        const stepNumber = i + 1;
        return (
          <Step key={stepNumber} isActive={stepNumber === currentStep} isCompleted={stepNumber < currentStep}>
            {stepNumber < currentStep ? "✓" : stepNumber}
          </Step>
        );
      })}
    </ul>
  );
}

export default StepsList;
