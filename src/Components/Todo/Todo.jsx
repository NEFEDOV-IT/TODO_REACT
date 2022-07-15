import React from "react";
import { BodyTask } from "./BodyTask";
import { useSelector } from "react-redux";
import { TASKS_HIGH, TASKS_LOW } from "../../helpers";

const Todo = () => {
  const tasksHigh = useSelector(state => state.todoHigh.tasks)
  const tasksLow = useSelector(state => state.todoLow.tasksLow)

  return (
    <main className="main">
      <div className="container">
        <div className="todo-list">
          <BodyTask
            title={TASKS_HIGH}
            placeholder={'Add important cases'}
            tasks={tasksHigh}
          />
          <BodyTask
            title={TASKS_LOW}
            placeholder={'Add cases'}
            tasks={tasksLow}
          />
        </div>
      </div>
    </main>
  )
}

export { Todo }
