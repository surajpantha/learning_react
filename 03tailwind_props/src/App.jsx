import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
 let newArr=[1,2,3]

  return (
    <>
    <h1 className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">tailwind test</h1>
 <Card name="masala chai" someobj={newArr}/>
    </>
  )
}

export default App
