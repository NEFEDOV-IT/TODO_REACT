import React from 'react'
import './App.css'
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Todo } from "./Components/Todo/Todo";


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Todo/>
      <Footer/>
    </div>
  )
}

export default App
