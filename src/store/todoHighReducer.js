import { ADD_TODO_HIGH, CHANGE_STATUS_HIGH, REMOVE_TODO_HIGH, SHOW_TASKS_HIGH } from "./actions";

const defaultState = {
  tasks: [],
}

const todoHighReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO_HIGH:
      return {...state, tasks: [...state.tasks, action.payload]}
    case REMOVE_TODO_HIGH:
      return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)}
    case CHANGE_STATUS_HIGH:
      return {...state, tasks: state.tasks.map(
          task => task.id === action.payload ? {...task, active: !task.active} : task
        )}
    case SHOW_TASKS_HIGH:
      return {...state, tasks: [...action.payload]}
    default:
      return state
  }
}

export { todoHighReducer }
