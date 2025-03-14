import { combineReducers } from "redux";
import ProductReducer from "./productReducer";
import WishListReducer from "./WishListReducer";

const rootReducer =  combineReducers({
    products :ProductReducer,
    wishList : WishListReducer

});
export default rootReducer;