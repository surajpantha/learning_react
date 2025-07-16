import React, { useEffect,useState } from "react";


export default function Github(){
 
    const [result,setData]=useState({});
    useEffect(()=>{
        const fetchGithubData=async()=>{
            try{
const response=await fetch('https://api.github.com/users/surajpantha');
const result= await response.json()

setData(result)


            }
            catch (error){
console.error("error fetching data:",error)
setData({})
            }
        }
        fetchGithubData()
    },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white ">Github:{result.login}
        <img src={result.avatar_url} alt="hell"  className="h-20"/>
        
        </div>
    )
}