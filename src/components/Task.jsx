function Task({ isChecked, onChange, children }) {
  return (
    <li>
      <input type="checkbox" checked={isChecked} onChange={onChange} /> {children}
    </li>
  );
}

export default Task;
