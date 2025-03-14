import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  tasks: [],
  completedTasks: 0,
  totalTasks: 0,
};

// Reducer function
function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        totalTasks: state.totalTasks + 1,
      };
    case 'REMOVE_TASK':
      const updatedTasks = state.tasks.filter((task) => task.id !== action.payload);
      return {
        ...state,
        tasks: updatedTasks,
        totalTasks: state.totalTasks - 1,
      };
    case 'TOGGLE_TASK':
      const toggledTasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      const completedTasks = toggledTasks.filter(task => task.completed).length;
      return {
        ...state,
        tasks: toggledTasks,
        completedTasks: completedTasks,
      };
    default:
      return state;
  }
}

// Create context
const TaskContext = createContext();

// TaskProvider component
export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

// Custom hook for consuming context
export function useTask() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}


