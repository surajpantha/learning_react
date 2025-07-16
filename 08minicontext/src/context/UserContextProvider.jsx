import React from "react";
import UserContext from "./UserContext";

 const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState("")
    return (
        <>
        <UserContext  value={{user,setUser}}>
            {children}
        </UserContext>
        
        </>
    )

 }


 export default UserContextProvider