import React, { useEffect, useState } from "react";
import { ShowList } from "./ShowList";
import { FormSubmit } from "./FormSubmit";
import JsCookie from "js-cookie";
import { Error } from "./Error";
import { useDispatch } from "react-redux";
import { showTasksHigh, showTasksLow } from "../../store/actions";
import { TASKS_HIGH, TASKS_LOW } from "../../helpers";

function BodyTask({title, placeholder, tasks}) {
  const dispatch = useDispatch()
  const [error, setError] = useState({
    classAddTask: false, classOnTheList: false
  })

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

  return (
    <div className={title + "__todo"}>
      <div className="title">{title}</div>
      <FormSubmit
        title={title}
        setError={setError}
        tasks={tasks}
        placeholder={placeholder}
      />
      <Error error={error}/>
      {
        tasks.length > 0 ?
          <ShowList
            title={title}
            tasks={tasks}
          />
          :
          <div>
            There are no cases yet.
          </div>
      }
    </div>
  )
}

export { BodyTask }
