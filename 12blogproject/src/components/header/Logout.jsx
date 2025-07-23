import React from "react";
import { useDispatch } from "react-redux";
import authService from '../../appwrite/auth'
import { logout } from "../../store/authSlice";


export default function LogoutBtn({}){

    const dispatch=useDispatch()
const logoutHandler = async () => {
  try {
    await authService.logout(); // wait until session is deleted
    dispatch(logout());         // then update state
  } catch (err) {
    console.error("Logout failed", err);
  }
};
return(
    <button onClick={logoutHandler}>
        Logout
    </button>
)
}