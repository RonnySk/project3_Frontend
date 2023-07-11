import React from "react";
import Task from "./Task";
import "../css/TasksList.css";

function TasksList({ tasks, checklist, currentStep, toggleCheck }) {
  return (
    <ul className="tasks-list">
      {tasks?.map((task, i) => (
        <Task key={i} isChecked={checklist[currentStep][`task${i + 1}`]} onChange={() => toggleCheck(currentStep, `task${i + 1}`)}>
          {task}
        </Task>
      ))}
    </ul>
  );
}

export default TasksList;
