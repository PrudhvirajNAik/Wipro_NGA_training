import axios from "axios";

export const FETCH_PRODUCTS =  () => async (dispatch) => {
    try {
        const response = await axios.get('http://fakestoreapi.com/products');
        dispatch({
            type : 'FETCH_PRODUCTS',
            payload : response.data
        });
    } catch (error){
        console.error('Error fetching products',error);

    }
    
};