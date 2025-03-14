// thunk allows us to dispatch multiple actions for different types of actions
import axios from 'axios';

import { 
  FETCH_PRODUCTS_REQUEST, 
  FETCH_PRODUCTS_SUCCESS, 
  FETCH_PRODUCTS_FAILURE 
} from './productActionTypes';

// Action Creator using Thunk
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    try {
      const response = await axios.get('http://localhost:5000/api/products');
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    }
  };
};