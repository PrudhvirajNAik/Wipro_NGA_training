// pages/index.js
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import {useTaskContext} from './context/TaskContext';
import { useEffect } from 'react';

export default function Home({initialTasks}) {
  const dispatch = useTaskContext();

  // On initial render, populate the tasks from the SSR
  useEffect (() => {
    initialTasks.forEach(task => {
      dispatch({ type: 'ADD_TASK', payload: task });
    });
  }, [initialTasks, dispatch]);

  return (
    <div>
      <h1>Task Management Application</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data for the initial task list from an API or database
  const initialTasks = await fetch("your-api-endpoint-to-fetch-tasks")
    .then(res => res.json())
    .catch(err => []);
  
  return {
    props: {
      initialTasks
    },
  };
}