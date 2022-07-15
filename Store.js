import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import user from "./reducerSlicer";


// const rootReducer = combineReducers({
//     user : user
// })

export const store = configureStore({
    reducer: user,
    
    devTools : process.env.NODE_ENV !== "production",
})