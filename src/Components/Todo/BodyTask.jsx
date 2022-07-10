import React, { useEffect, useState } from "react";
import { ShowList } from "./ShowList";
import { FormSubmit } from "./FormSubmit";
import JsCookie from "js-cookie";
import { Error } from "./Error";
import { useDispatch } from "react-redux";
import { addTaskHigh, addTaskLow, showTasksHigh, showTasksLow } from "../../actions";
import { TASKS_HIGH, TASKS_LOW } from "../../helpers";

function BodyTask({title, placeholder, tasks}) {
  const [value, setValue] = useState('')
  const [error, setError] = useState({
    classAddTask: false, classOnTheList: false
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (JsCookie.get(TASKS_HIGH)) {
      dispatch(showTasksHigh(JSON.parse(JsCookie.get(TASKS_HIGH))))
    }
  }, [])

  useEffect(() => {
    if (JsCookie.get(TASKS_LOW)) {
      dispatch(showTasksLow(JSON.parse(JsCookie.get(TASKS_LOW))))
    }
  }, [])

  function saveTasks(e) {
    const isRepeatValue = tasks.includes(value.trim())
    const isEmptyValue = value.trim() === ''

    if (isEmptyValue) {
      setError({classAddTask: true, classOnTheList: false})
      setValue('')
    } else if (isRepeatValue) {
      setError({classAddTask: false, classOnTheList: true})
      setValue('')
    } else if (title === TASKS_HIGH) {
      JsCookie.set(TASKS_HIGH, JSON.stringify([...tasks, value]))
      dispatch(addTaskHigh(value))
      setError({classAddTask: false, classOnTheList: false})
      setValue('')
    } else {
      JsCookie.set(TASKS_LOW, JSON.stringify([...tasks, value]))
      dispatch(addTaskLow(value))
      setError({classAddTask: false, classOnTheList: false})
      setValue('')
    }
    e.preventDefault()
  }

  function saveValue(e) {
    setValue(e.target.value)
  }

  return (
    <div className={title + "__todo"}>
      <div className="title">{title}</div>
      <FormSubmit
        saveTasks={saveTasks}
        saveValue={saveValue}
        value={value}
        placeholder={placeholder}
      />
      <Error error={error}/>
      <ShowList
        error={error}
        title={title}
        tasks={tasks}
      />
    </div>
  )
}

export { BodyTask }
