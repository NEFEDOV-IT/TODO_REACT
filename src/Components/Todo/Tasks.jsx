import React, { useEffect } from "react";
import JsCookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusTask, deleteTaskHigh, deleteTaskLow, showTasksHigh, showTasksLow } from "../../store/actions";
import { TASKS_HIGH, TASKS_LOW } from "../../helpers";

const Tasks = ({task, title, tasks}) => {
  const dispatch = useDispatch()
  const tasksHigh = useSelector(state => state.todoHigh)
  const tasksLow = useSelector(state => state.todoLow)

  function changeStatus(id) {
    dispatch(changeStatusTask(id))

    title === TASKS_HIGH ?
      JsCookie.set(title, JSON.stringify([...tasksHigh])) :
      JsCookie.set(title, JSON.stringify([...tasksLow]))
  }

  function removeTask(id) {
    const result = tasks.filter(task => task.id !== id)
    JsCookie.set(title, JSON.stringify(result))
    if (title === TASKS_HIGH) {
      dispatch(deleteTaskHigh(id))
    }
    if (title === TASKS_LOW) {
      dispatch(deleteTaskLow(id))
    }
  }

  return (
    <div className={task.active ? 'input-todo checked__back' : 'input-todo'}>
      <label onClick={() => changeStatus(task.id)} className="text__input-body">
        {task.name}
      </label>
      <input onClick={() => changeStatus(task.id)}
             className={task.active ? 'input__checkbox input__checked' : 'input__checkbox'}
             type="checkbox"/>
      <button onClick={() => removeTask(task.id)} className="button_close"/>
    </div>
  )
}

export { Tasks }
