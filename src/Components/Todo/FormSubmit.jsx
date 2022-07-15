import React, { useState } from "react";
import JsCookie from "js-cookie";
import { TASKS_HIGH } from "../../helpers";
import { useDispatch } from "react-redux";
import { addTodoHigh } from "../../storeToolkit/todoHighSlice";
import { addTodoLow } from "../../storeToolkit/todoLowSlice";

const FormSubmit = ({tasks, placeholder, setError, title}) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  function saveTasks(e) {
    const isRepeatValue = tasks.find(item => item.name === value.trim())
    const isEmptyValue = value.trim() === ''
    const task = {
      name: value,
      id: Date.now(),
      active: false,
    }

    if (isEmptyValue) {
      setError({classAddTask: true, classOnTheList: false})
      setValue('')
    } else if (isRepeatValue) {
      setError({classAddTask: false, classOnTheList: true})
      setValue('')
    } else {
      JsCookie.set(title, JSON.stringify([...tasks, task]))
      title === TASKS_HIGH ? dispatch(addTodoHigh(task)) : dispatch(addTodoLow(task))
      setError({classAddTask: false, classOnTheList: false})
      setValue('')
    }
    e.preventDefault()
  }

  function saveValue(e) {
    setValue(e.target.value)
  }

  return (
    <form className="form__input">
      <input value={value} onChange={saveValue} className="input__text" type="text"
             placeholder={placeholder}/>
      <button onClick={saveTasks} className="button__add"/>
    </form>
  )
}

export {FormSubmit}
