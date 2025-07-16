import React, { use, useContext, useState } from "react";
import UserContext from "../context/UserContext";


function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const{setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
e.preventDefault()
setUser({username,password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)} 
            placeholder="username" 
            className="bg-white text-black m-4 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" required/>
            <input type="text" 
            value={password}  
            onChange={(e)=>setPassword(e.target.value)} placeholder="password"
             className="bg-white text-black m-4 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" required />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;