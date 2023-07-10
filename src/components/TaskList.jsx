import Task from "./Task";

function TasksList({ tasks, checklist, currentStep, toggleCheck }) {
  return (
    <ul>
      {tasks?.map((task, i) => (
        <Task key={i} isChecked={checklist[currentStep][`task${i + 1}`]} onChange={() => toggleCheck(currentStep, `task${i + 1}`)}>
          {task}
        </Task>
      ))}
    </ul>
  );
}

export default TasksList;
