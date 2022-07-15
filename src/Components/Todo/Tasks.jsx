import React from "react";
import JsCookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusTaskHigh,
  changeStatusTaskLow,
  deleteTaskHigh,
  deleteTaskLow,
} from "../../store/actions";
import { TASKS_HIGH, TASKS_LOW } from "../../helpers";

const Tasks = ({task, title, tasks}) => {
  const dispatch = useDispatch()

  function changeStatus(id) {
    if (title === TASKS_HIGH) {
      dispatch(changeStatusTaskHigh(id))
    }
    if (title === TASKS_LOW) {
      dispatch(changeStatusTaskLow(id))
    }
    const result = tasks.map(
      task => task.id === id ? {...task, active: !task.active} : task)
    JsCookie.set(title, JSON.stringify(result))
  }

  function removeTask(id) {
    if (title === TASKS_HIGH) {
      dispatch(deleteTaskHigh(id))
    }
    if (title === TASKS_LOW) {
      dispatch(deleteTaskLow(id))
    }
    const result = tasks.filter(task => task.id !== id)
    JsCookie.set(title, JSON.stringify(result))
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
