import {
  ADD_TODO_LOW,
  CHANGE_STATUS_LOW,
  REMOVE_TODO_LOW,
  SHOW_TASKS_LOW
} from "./actions";

const defaultState = {
  tasksLow: [],
}

const todoLowReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO_LOW:
      return {...state, tasksLow: [...state.tasksLow, action.payload]}
    case REMOVE_TODO_LOW:
      return {...state, tasksLow: state.tasksLow.filter(task => task.id !== action.payload)}
    case CHANGE_STATUS_LOW:
      return {...state, tasksLow: state.tasksLow.map(
          task => task.id === action.payload ? {...task, active: !task.active} : task
        )}
    case SHOW_TASKS_LOW:
      return {...state, tasksLow: [...action.payload]}
    default:
      return state
  }
}

export { todoLowReducer }
