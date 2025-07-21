import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
function App() {
 const [loading,setLoading]=useState(true)
 const dispatch=useDispatch()
 useEffect(()=>{
const checkUser=async()=>{
  try {
    const userData=await authService.getCurrentUser()
      if (userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
  
  } catch (error) {
    console.log(`error checking user:${error}`)
    dispatch(logout())
  }finally{
    setLoading(false)
  }
}
 },[])

  return loading ? (<div>
    <h1 className="text-3xl font-bold underline text-amber-950">
    Hello world!
  </h1>
  </div>):null
}

export default App
