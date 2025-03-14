const initialState ={
    WishList: []
};

const WishListReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADD_TO_WISHLIST':
            return{...state, WishList:[ ...state.WishList,action.payload]};
        case 'REMOVE_FROM_WISHLIST':
            return {...state, WishList: state.WishList.filter( product => product.id !== action.payload.id) };
        default:
        return state;

    }
};

export default WishListReducer;