
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/UserContext'
import { useContext } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

// const {user,setUser}=useContext(UserContext)
  return (
    <><UserContextProvider>

    
    
 <Login/>

 <Profile/>
  
     </UserContextProvider>
      
    </>
  )
}

export default App
