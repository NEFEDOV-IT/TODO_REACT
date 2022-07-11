import { ADD_TODO_HIGH, CHANGE_STATUS, REMOVE_TODO_HIGH, SHOW_TASKS_HIGH } from "./actions";
import JsCookie from "js-cookie";
import { TASKS_HIGH } from "../helpers";

const defaultState = {
  tasks: [],
}

const todoHighReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO_HIGH:
      return [...state, action.text]
    case REMOVE_TODO_HIGH:
      return state.filter(task => task.id !== action.text)
    case CHANGE_STATUS:
       return state.map(
        task => task.id === action.text ? {...task, active: !task.active} : task
      )
    case SHOW_TASKS_HIGH:
      return action.text
    default:
      return state
  }
}

export { todoHighReducer }
