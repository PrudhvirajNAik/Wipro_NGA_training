import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { dataReducer } from './redux/reducer'; // Ensure this path is correct
import rootSaga from './redux/saga'; // Ensure this path is correct

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer:{
  data:dataReducer,
   },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;