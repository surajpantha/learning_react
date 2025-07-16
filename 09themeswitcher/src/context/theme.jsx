import { createContext,useContext, useState,useEffect } from "react";

 const ThemeContext=createContext({
    themeMode:"light",//the main poitn of giving default value here is that if someone use the context outside the contextprovider wrapper such as in this case it is themeprovider then it will use the value defined here else it will use the value defined by state for example i have created a random.jsx file for it's application
    darkTheme:()=>{},
    lightTheme:()=>{},
})


export const ThemeProvider=({children})=>{
   const [themeMode,setThemeMode]=useState("light")
   
   const lightTheme=()=>{
    setThemeMode("light")
   }
    const darkTheme=()=>{
    setThemeMode("dark")
   }

 
 
    return (
        <>
        <ThemeContext.Provider  value={{themeMode,darkTheme,lightTheme}}>
            {children}
        </ThemeContext.Provider>
        
        </>
    )

 }


 export default function useTheme(){
    return useContext(ThemeContext)
 }