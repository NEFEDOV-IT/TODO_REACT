import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoHighSlice from "./todoHighSlice";
import todoLowSlice from "./todoLowSlice";

const rootReducer = combineReducers({
  todoHigh: todoHighSlice,
  todoLow: todoLowSlice
})

export const store = configureStore({
  reducer: rootReducer,
})
