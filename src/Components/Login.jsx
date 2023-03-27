import React from 'react'

const Login = ({loginInfo, setLoginInfo, handleLoginSubmit}) => {
  

  const handleChange = (event)=>{
    const {name, value}= event.target;
    setLoginInfo(prevState => ({
      ...prevState,
      [name]:value
    }))
  }



  return (
    <div className='login-wrapper'>
        <form className='login-form' onSubmit={handleLoginSubmit}>
          <h2>Login</h2>

          <div className='form-grp'>
          <div className='fld-1'>
            <label htmlFor='username'>Username:</label>
            <input 
            name="username" 
            value={loginInfo.username} 
            onChange={handleChange} 
            type="text" 
            placeholder='Enter your username'
            required/>
          </div>

          <div className='fld-2'>
            <label htmlFor='password'>Password:</label>
            <input 
            name="password" 
            value={loginInfo.password} 
            onChange={handleChange} 
            type="password" 
            placeholder='Enter your password'
            required/>
          </div>

          </div>
          <button type='submit' className='btn auth-btn'>Login</button>
        </form>
      </div>
  )
}

export default Login