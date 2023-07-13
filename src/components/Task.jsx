import React from "react";

function Task({ isChecked, onChange, children }) {
  return (
    <li className="task">
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span className="task-text">{children}</span>
      {isChecked}
    </li>
  );
}

export default Task;
