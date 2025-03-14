export const setAuth = (authToken) => {
    return {
      type: 'SET_AUTH',
      payload: authToken
    };
  };
  
  export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task
    };
  };
  
  export const deleteTask = (taskId) => {
    return {
      type: 'DELETE_TASK',
      payload: taskId
    };
  };
  