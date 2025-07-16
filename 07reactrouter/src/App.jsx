import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/home'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="bg-black h-48">
<h1 className="text-3xl text-white font-bold underline text-center">
  REACTS ROUTER
  </h1>


    </div>
    
    </>
  )
}

export default App
