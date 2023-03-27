import React from 'react'
import Login from '../Components/Login'
import Register from '../Components/Register'
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {useCookies} from "react-cookie";

const Auth = () => {
  const navigate = useNavigate();
  const [_, setCookies] = useCookies(["access_token"])
 
  const [registerInfo, setRegisterInfo]=useState({
    username:"",
    password:""
  });

  const [loginInfo, setLoginInfo]=useState({
    username:"",
    password:""
  });

 

  const handleLoginSubmit = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login",{
        username:loginInfo.username,
        password:loginInfo.password
      })

    
      const { token, userID} = res?.data;
      setCookies("access_token", token)
      window.localStorage.setItem("userId",userID)
      alert(res?.data?.message)
      navigate("/")

    } catch (error) {
      console.log(error)
      alert(error.response?.data?.err)

      setLoginInfo({
        username:"",
        password:""
      })
    }
    

  }

  const handleRegisterSubmit = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/registration",{
        username:registerInfo.username,
        password:registerInfo.password
      })

      alert(res.data.message)

      setRegisterInfo({
        username:"",
        password:""
      })
      
     
    } catch (error) {
      console.log(error)
      alert(error.response?.data?.err)

      setRegisterInfo({
        username:"",
        password:""
      })
    }

   
  }



  return (
    <div className='auth-wrapper'>
    <Login loginInfo={loginInfo} setLoginInfo={setLoginInfo} handleLoginSubmit={handleLoginSubmit} />
    <Register registerInfo={registerInfo} setRegisterInfo={setRegisterInfo} handleRegisterSubmit={handleRegisterSubmit} />
    </div>
  )
}

export default Auth