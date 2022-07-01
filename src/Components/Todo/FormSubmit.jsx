import React from "react";

const FormSubmit = ({value, saveValue, saveTasks, placeholder}) => {
  return (
    <form className="form__input">
      <input value={value} onChange={saveValue} className="input__text" type="text"
             placeholder={placeholder}/>
      <button onClick={saveTasks} className="button__add"/>
    </form>
  )
}

export {FormSubmit}
