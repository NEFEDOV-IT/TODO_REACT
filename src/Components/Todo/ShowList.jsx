import { Tasks } from "./Tasks";
import React from "react";

const ShowList = ({todo, setTodo, title}) => {
  return (
    <div className="list">
      {todo.map((task, index) => {
        return (
          <Tasks
            key={index}
            id={index}
            task={task}
            todo={todo}
            setTodo={setTodo}
            title={title}
          />
        )
      })}
    </div>
  )
}

export { ShowList }
