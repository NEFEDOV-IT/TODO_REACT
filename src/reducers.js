import {
  ADD_TODO_HIGH,
  ADD_TODO_LOW,
  REMOVE_TODO_HIGH,
  REMOVE_TODO_LOW,
  SHOW_TASKS_HIGH,
  SHOW_TASKS_LOW
} from "./actions";
import { combineReducers } from "redux";

const defaultState = {
  tasks: [],
  tasksLow: [],
}

const todoHigh = (state = defaultState.tasks, action) => {
  switch (action.type) {
    case ADD_TODO_HIGH:
      return [...state, action.text]
    case REMOVE_TODO_HIGH:
      return state.filter(todo => todo !== action.text)
    case SHOW_TASKS_HIGH:
      return action.text
    default:
      return state
  }
}

const todoLow = (state = defaultState.tasksLow, action) => {
  switch (action.type) {
    case ADD_TODO_LOW:
      return [...state, action.text]
    case REMOVE_TODO_LOW:
      return state.filter(todo => todo !== action.text)
    case SHOW_TASKS_LOW:
      return action.text
    default:
      return state
  }
}



const todoApp = combineReducers({todoHigh, todoLow})

export {todoApp}
