import { combineReducers, createStore } from "redux";
import { todoHighReducer } from "./todoHighReducer";
import { todoLowReducer } from "./todoLowReducer";

const todoApp = combineReducers({
  todoHigh: todoHighReducer,
  todoLow: todoLowReducer,
})

const store = createStore(todoApp)

export { store }

