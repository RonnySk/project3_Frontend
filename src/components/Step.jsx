/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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

function Step({ isActive, isCompleted, children }) {
  return <li css={stepStyle(isActive, isCompleted)}>{children}</li>;
}

export default Step;
