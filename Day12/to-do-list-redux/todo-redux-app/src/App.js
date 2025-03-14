import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="text-center my-4">To-Do List</h1>
        <AddTask />
        <Filter />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
