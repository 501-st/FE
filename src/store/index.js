import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./reducer";

const rootReducer = combineReducers({
    toolkit: userSlice
})

export const store = configureStore({
    reducer: rootReducer
})