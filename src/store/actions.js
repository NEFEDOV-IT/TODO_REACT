const actionCreator = (type) => (payload) => {
  return {
    type,
    payload,
  }
}

const CHANGE_STATUS_HIGH = 'CHANGE STATUS HIGH'
const CHANGE_STATUS_LOW = 'CHANGE STATUS LOW'

const ADD_TODO_HIGH = 'ADD TODO'
const REMOVE_TODO_HIGH = 'REMOVE TODO'

const SHOW_TASKS_HIGH = 'SHOW TASKS HIGH'
const SHOW_TASKS_LOW = 'SHOW TASKS LOW'

const ADD_TODO_LOW = 'ADD TODO LOW'
const REMOVE_TODO_LOW = 'REMOVE TODO LOW'

const changeStatusTaskHigh = actionCreator(CHANGE_STATUS_HIGH)
const changeStatusTaskLow = actionCreator(CHANGE_STATUS_LOW)

const addTaskHigh = actionCreator(ADD_TODO_HIGH)
const deleteTaskHigh = actionCreator(REMOVE_TODO_HIGH)

const showTasksHigh = actionCreator(SHOW_TASKS_HIGH)
const showTasksLow = actionCreator(SHOW_TASKS_LOW)

const addTaskLow = actionCreator(ADD_TODO_LOW)
const deleteTaskLow = actionCreator(REMOVE_TODO_LOW)

export {
  CHANGE_STATUS_HIGH,
  CHANGE_STATUS_LOW,
  SHOW_TASKS_HIGH,
  SHOW_TASKS_LOW,
  showTasksLow,
  showTasksHigh,
  ADD_TODO_LOW,
  REMOVE_TODO_LOW,
  ADD_TODO_HIGH,
  REMOVE_TODO_HIGH,
  addTaskHigh,
  deleteTaskHigh,
  addTaskLow,
  deleteTaskLow,
  changeStatusTaskHigh,
  changeStatusTaskLow
}
