import {
  ADD_TODO_HIGH,
  ADD_TODO_LOW,
  CHANGE_STATUS,
  REMOVE_TODO_HIGH,
  REMOVE_TODO_LOW, SHOW_TASKS_HIGH,
  SHOW_TASKS_LOW
} from "./actions";

const defaultState = {
  tasksLow: [],
}

const todoLowReducer = (state = defaultState.tasksLow, action) => {
  switch (action.type) {
    case ADD_TODO_LOW:
      return [...state, action.text]
    case REMOVE_TODO_LOW:
      return state.filter(task => task.id !== action.text)
    case CHANGE_STATUS:
      return state.map(
        task => task.id === action.text ? {...task, active: !task.active} : task
      )
    case SHOW_TASKS_LOW:
      return action.text
    default:
      return state
  }
}

export { todoLowReducer }
