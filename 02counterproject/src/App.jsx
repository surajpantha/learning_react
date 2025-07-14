import { useState } from 'react'

import './App.css'

function App() {
let [counter,setCounter]=useState(15)

let [message,setMessage]=useState('')

// let count=15;
const addValue=()=>{
 
 if (counter<20){
   setCounter(counter+1)

}
else{
   setMessage('max value reached')
}
}

const removeValue=()=>{
 
  if (counter>0){
       setCounter(counter-1)
       
  }else{
    setMessage('min value reached')
  }

}

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value:{counter}</h2>
     <button
     onClick={addValue}
     >Add value{counter}</button>
     <br /><br />
     <button
     onClick={removeValue}
     >remove value{counter}</button>
     <p>{message}</p>
    </>
  )
}

export default App
