import React, { useState } from "react";
import JsCookie from "js-cookie";

const Tasks = ({task, todo, setTodo, id, title}) => {
  const [stateActive, setStateActive] = useState(true)

  function ChangeStatus() {
    setStateActive(!stateActive)
  }

  function removeTask() {
    const tasks = todo.filter((task, index) => {
      return index !== id
    })
    JsCookie.set(title, JSON.stringify(tasks))
    setTodo(tasks)
  }

  return (
    <div className={stateActive ? 'input-todo' : 'input-todo checked__back'}>
      <label onClick={ChangeStatus} className="text__input-body">
        {task}
      </label>
      <input onClick={ChangeStatus} className={stateActive ? 'input__checkbox' : 'input__checkbox input__checked'}
             type="checkbox"/>
      <button onClick={removeTask} className="button_close"/>
    </div>
  )
}

export { Tasks }
