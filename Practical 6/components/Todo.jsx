import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateTask = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      // Update existing task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = input;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task
      setTasks([...tasks, input]);
    }
    setInput("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    if (editIndex === index) {
      setInput("");
      setEditIndex(null);
    }
  };

  const editTask = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="todo-container">
      <h1>Get Things Done !</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="What is the task today?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addOrUpdateTask}>
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <div>
              <button className="edit" onClick={() => editTask(index)}>
                ✏️
              </button>
              <button className="delete" onClick={() => deleteTask(index)}>
                🗑
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;