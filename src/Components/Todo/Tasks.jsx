import React, { useState } from "react";
import JsCookie from "js-cookie";
import { useDispatch} from "react-redux";
import { deleteTaskHigh, deleteTaskLow } from "../../actions";
import { TASKS_HIGH, TASKS_LOW } from "../../helpers";

const Tasks = ({task, title, tasks}) => {
  const [stateActive, setStateActive] = useState(true)
  const dispatch = useDispatch()

  function ChangeStatus() {
    setStateActive(!stateActive)
  }

  function removeTask(e) {
    const result = tasks.filter(task => task !== e.target.value)
    JsCookie.set(title, JSON.stringify(result))
    if (title === TASKS_HIGH) {
      dispatch(deleteTaskHigh(e.target.value))
    }
    if (title === TASKS_LOW) {
      dispatch(deleteTaskLow(e.target.value))
    }
  }

  return (
    <div className={stateActive ? 'input-todo' : 'input-todo checked__back'}>
      <label onClick={ChangeStatus} className="text__input-body">
        {task}
      </label>
      <input onClick={ChangeStatus} className={stateActive ? 'input__checkbox' : 'input__checkbox input__checked'}
             type="checkbox"/>
      <button value={task} onClick={removeTask} className="button_close"/>
    </div>
  )
}

export { Tasks }
