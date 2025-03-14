import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk/es/thunk.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/productReducer';

// Combine reducers (if multiple reducers exist)
const rootReducer = combineReducers({
  products: productReducer,
});

// Create store with thunk middleware
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
