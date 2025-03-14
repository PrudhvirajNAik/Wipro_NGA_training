import React from 'react';
import { toggleTask, deleteTask } from '../features/todoSlice';

const TaskItem = ({ task, dispatch }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        className={`text-decoration-${task.completed ? 'line-through' : 'none'} me-2`}
      >
        {task.text}
      </span>
      <span>
        <button
          className={`btn btn-${task.completed ? 'success' : 'warning'} btn-sm me-2`}
          onClick={() => dispatch(toggleTask(task.id))}
        >
          {task.completed ? 'Completed' : 'Pending'}
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          ❌
        </button>
      </span>
    </li>
  );
};

export default TaskItem;
