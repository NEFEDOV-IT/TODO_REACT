import { Tasks } from "./Tasks";
import React from "react";

const ShowList = ({title, tasks}) => {
  return (
    <div className="list">
      {tasks.map((task, index) => {
        return (
          <Tasks
            key={index}
            id={index}
            task={task}
            title={title}
            tasks={tasks}
          />
        )
      })}
    </div>
  )
}

export { ShowList }
