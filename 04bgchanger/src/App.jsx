import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgcolor, setColor] = useState('white')

  const colors = ["bg-blue-500", "bg-orange-500", "bg-pink-500", "bg-gray-500", "bg-red-500", "bg-green-500", "bg-yellow-500"]
  // const changeColor = (color) => {
  //   setColor(color);
  // }

  return (
  
      <div className={`h-screen w-full ${bgcolor}`}>


        <div className="mx-auto max-w-md   rounded-xl bg-black shadow-md md:max-w-10/10">
          <div className="md:flex">
             
            {colors.map((color, index) => (
             
<div className="p-8">
                <button key={index} className={`${color} hover:${color} text-white font-bold py-2 px-4 rounded cursor-pointer`}
                  onClick={()=>setColor(color)}
                 >
                  Button
                </button>
              </div>

            ))}




          </div>
        </div>
      </div>
 
  )
}

export default App





