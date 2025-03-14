import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./redux/reducer";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: [thunk],
});

export default store;