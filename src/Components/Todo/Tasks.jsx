import React from "react";
import JsCookie from "js-cookie";
import { useDispatch } from "react-redux";
import { TASKS_HIGH, TASKS_LOW } from "../../helpers";
import { changeStatusHigh, removeTodoHigh } from "../../storeToolkit/todoHighSlice";
import { changeStatusLow, removeTodoLow } from "../../storeToolkit/todoLowSlice";

const Tasks = ({task, title, tasks}) => {
  const dispatch = useDispatch()

  function changeStatus(id) {
    const result = tasks.map(
      task => task.id === id ? {...task, active: !task.active} : task)
    if (title === TASKS_HIGH) {
      dispatch(changeStatusHigh(id))
      JsCookie.set(title, JSON.stringify(result))
    }
    if (title === TASKS_LOW) {
      dispatch(changeStatusLow(id))
      JsCookie.set(title, JSON.stringify(result))
    }
  }

  function removeTask(id) {
    if (title === TASKS_HIGH) {
      dispatch(removeTodoHigh(id))
    }
    if (title === TASKS_LOW) {
      dispatch(removeTodoLow(id))
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
