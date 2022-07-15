import { createSlice } from "@reduxjs/toolkit";

const todoHighSlice = createSlice({
  name: 'todoHigh',
  initialState: {
    tasksHigh: []
  },
  reducers: {
    addTodoHigh(state, action) {
      state.tasksHigh.push(action.payload)
    },
    removeTodoHigh(state, action) {
      state.tasksHigh = state.tasksHigh.filter(task => task.id !== action.payload)
    },
    changeStatusHigh(state, action) {
      state.tasksHigh.map(
        task => task.id === action.payload ? task.active = !task.active : task
      )
    },
    showTasksHigh(state, action) {
      state.tasksHigh = action.payload
    }
  }
})

export default todoHighSlice.reducer
export const {addTodoHigh, removeTodoHigh, changeStatusHigh, showTasksHigh} = todoHighSlice.actions

