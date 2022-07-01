import { SHOW_ERRORS } from "../../helpers";
import React from "react";

const Error = ({error}) => {
  return (
    <p className={error.classAddTask ? 'error' : error.classOnTheList ? 'error' : null}>
      {error.classAddTask ? SHOW_ERRORS.addTask : error.classOnTheList ? SHOW_ERRORS.onTheList : null}
    </p>
  )
}

export { Error }
