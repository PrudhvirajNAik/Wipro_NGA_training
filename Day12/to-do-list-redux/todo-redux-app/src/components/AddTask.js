import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/todoSlice';

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <div className="input-group mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
