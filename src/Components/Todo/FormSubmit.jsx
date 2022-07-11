import React, { useState } from "react";
import JsCookie from "js-cookie";
import { TASKS_HIGH } from "../../helpers";
import { addTaskHigh, addTaskLow } from "../../store/actions";
import { useDispatch } from "react-redux";

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
      title === TASKS_HIGH ? dispatch(addTaskHigh(task)) : dispatch(addTaskLow(task))
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
