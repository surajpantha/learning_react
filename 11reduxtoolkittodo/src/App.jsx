import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todo'

function App() {
  
  return (
    <>
   <AddTodo/>
   <Todos/>
    </>
  )
}

export default App
