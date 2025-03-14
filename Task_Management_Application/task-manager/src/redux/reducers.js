const initialState = {
    tasks: [],
    authToken: localStorage.getItem('authToken') || null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_AUTH':
        return { ...state, authToken: action.payload };
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'DELETE_TASK':
        return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  