import { createSlice } from "@reduxjs/toolkit";

const todoLowSlice = createSlice({
  name: 'todoLow',
  initialState: {
    tasksLow: []
  },
  reducers: {
    addTodoLow(state, action) {
      state.tasksLow.push(action.payload)
    },
    removeTodoLow(state, action) {
      state.tasksLow = state.tasksLow.filter(task => task.id !== action.payload)
    },
    changeStatusLow(state, action) {
      state.tasksLow.map(task =>
        task.id === action.payload ? task.active = !task.active : task
      )
    },
    showTasksLow(state, action) {
      state.tasksLow = action.payload
    }
  }
})

export default todoLowSlice.reducer
export const {addTodoLow, removeTodoLow, changeStatusLow, showTasksLow} = todoLowSlice.actions
