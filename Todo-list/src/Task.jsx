// Task.js
import React from 'react';

import './Task.css'
// Removed unused import statement
const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
