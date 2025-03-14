import React from 'react';

export default function TaskItem({ task, dispatch }) {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}>
        Remove
      </button>
    </li>
  );
}
