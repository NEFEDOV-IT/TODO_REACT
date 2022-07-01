import React from "react";
import { BodyTask } from "./BodyTask";

const Todo = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="todo-list">
          <BodyTask
            title={'high'}
            placeholder={'Add important cases'}
          />
          <BodyTask
            title={'low'}
            placeholder={'Add cases'}
          />
        </div>
      </div>
    </main>
  )
}

export { Todo }
