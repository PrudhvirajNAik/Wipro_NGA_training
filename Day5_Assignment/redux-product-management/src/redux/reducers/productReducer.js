const initialState ={
    products:[]
};

const ProductReducer = (state = initialState,action) => {
    switch (action.type){
        case 'FETCH_PRODUCTS':
            return{...state, products: action.payload};
        default:
            return state;
    }
};

export default ProductReducer;