import React, { useEffect, useState } from "react";
import { ShowList } from "./ShowList";
import { FormSubmit } from "./FormSubmit";
import JsCookie from "js-cookie";
import { Error } from "./Error";

function BodyTask({title, placeholder}) {
  const [value, setValue] = useState('')
  const [todo, setTodo] = useState([])
  const [error, setError] = useState({
    classAddTask: false, classOnTheList: false
  })

  useEffect(() => {
    if (JsCookie.get(title)) {
      setTodo(JSON.parse(JsCookie.get(title)))
    }
  }, [])

  function saveTasks(e) {
    const isRepeatValue = todo.includes(value.trim())
    const isEmptyValue = value.trim() === ''

    if (isEmptyValue) {
      setError({classAddTask: true, classOnTheList: false})
      setValue('')
    } else if (isRepeatValue) {
      setError({classAddTask: false, classOnTheList: true})
      setValue('')
    } else {
      JsCookie.set(title, JSON.stringify([...todo, value]))
      setTodo([...todo, value])
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
        todo={todo}
        setTodo={setTodo}
        error={error}
        title={title}
      />
    </div>
  )
}

export { BodyTask }
