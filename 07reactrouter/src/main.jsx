import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github from './components/github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//         {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route path='github' element={<Github/>}/>
      {/*
      notes for me:- in route there is another attribute called loader for calling apis and loading data 
      ****for reference :-docs of react router dom or chai aur code video of reactrouter */}
 </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
