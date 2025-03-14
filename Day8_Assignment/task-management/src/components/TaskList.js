import React from 'react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { state, dispatch } = useTasks();
  
  return (
    <div>
      <h3>Task List</h3>
      <ul>
        {state.tasks.map(task => (
          <TaskItem key={task.id} task={task} dispatch={dispatch} />
        ))}
      </ul>
      <div>
        Total Tasks: {state.totalTasks} | Completed: {state.completedTasks}
      </div>
    </div>
  );
}
