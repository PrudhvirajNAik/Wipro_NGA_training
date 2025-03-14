import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export default function AddTask() {
  const { dispatch } = useTasks();
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      const newTask = { id: Date.now(), text: taskInput, completed: false };
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setTaskInput('');
    }
  };

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
