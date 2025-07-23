import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header ,Footer} from './components'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }

      } catch (error) {
        console.log(`error checking user:${error}`)
        dispatch(logout())
      } finally {
        setLoading(false)
      }
    }
      checkUser()
  }
, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
