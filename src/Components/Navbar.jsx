import React from 'react'
import { NavLink } from 'react-router-dom'
import {useCookies} from "react-cookie";
import { getUserID } from '../Utils/getUserID';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
 const navigate = useNavigate();
 const [cookies, setCookies] = useCookies(["access_token"]); 

 const logout = ()=>{
  setCookies("access_token","")
  localStorage.clear();
  navigate("/auth")
 }

  return (
    <div className="navbar">
      <div className='nav-links'>
        <NavLink to="." end className={({isActive})=> isActive ? "active" :null}>Home</NavLink>
        {cookies.access_token && <>
        <NavLink to="createRecipe" className={({isActive})=> isActive ? "active" :null}>Create recipe</NavLink>
        <NavLink to="savedRecipe" className={({isActive})=> isActive ? "active" :null}>Saved recipe</NavLink> </>}
        {
          !cookies.access_token?
          <NavLink to="auth" className={({isActive})=> isActive ? "active" :null}>Login/Register </NavLink> :
          <button className='logout-btn' onClick={logout}>Logout</button> }     
    </div>
    </div>
  )
}

export default Navbar