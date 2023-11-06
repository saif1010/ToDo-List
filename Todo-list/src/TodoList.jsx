
import React,  { useState } from 'react';
import Task from './Task';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
