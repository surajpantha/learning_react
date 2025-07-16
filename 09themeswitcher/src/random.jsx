import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useTheme, { ThemeProvider } from './context/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeButton'

function Random() {
  const { themeMode } = useTheme()


  

  return (


    <>
     <div>{themeMode}</div>
    </>

  )
}

export default Random
