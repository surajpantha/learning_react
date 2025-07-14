import { useState, useCallback ,useEffect,useRef} from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook

  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()[]~`'
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

      setPassword(pass)
    }

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
    
window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-screen flex items-center'>



        <div className=' ma-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500 '>
          <h1 class="text-3xl font-bold underline text-white-200">Password Generator</h1>

          <div className='flex shadow rounded-lg overflow-hidden m-4'>
            <input type="text"
              value={password}
              className='outline-none w-full  p-3 bg-white'
              placeholder="Password"
              readOnly
              ref={passwordRef} />
              <button className="outline-none  text-white px-3 py-0 5 shrink-0" onClick={copyToClipBoard}>copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
                min={8}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {
                  setLength(e.target.value)
                }} />
              <label>Length:{length}</label>
            </div>
         
        
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                default={numberAllowed}
                id="numberInput"

                className='cursor-pointer'
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }} />
              <label htmlFor='numberInput' className='cursor-pointer'>numbers</label>
            </div>

             <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                default={charAllowed}
                id="charInput"

                className='cursor-pointer'
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }} />
              <label htmlFor='charInput'  className='cursor-pointer'>characters</label>
            </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default App
