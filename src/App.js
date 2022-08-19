import React, { useState } from "react";
function App() {
  const [inputText, setInputText] = useState("");
  const [task, setTask] = useState([]);
  function handleChange(event) {
    const newTask = event.target.value;
    setInputText(newTask);
  }
  function handleSubmit(event) {
    setTask((prevTask) => {
      return [...prevTask, inputText];
    });
    setInputText("");
    event.preventDefault();
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {task.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
