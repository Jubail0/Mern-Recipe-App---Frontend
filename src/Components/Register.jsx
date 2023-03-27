import React from 'react'

const Register = ({registerInfo, setRegisterInfo, handleRegisterSubmit}) => {

  

  const handleChange = (event)=>{
    const {name, value}= event.target;
    setRegisterInfo(prevState => ({
      ...prevState,
      [name]:value
    }))
  }
  return (
    <div className='register-wrapper'>
    <form className='register-form' onSubmit={handleRegisterSubmit}>
      <h2>Register</h2>

      <div className='form-grp'>
      <div className='fld-1'>
        <label htmlFor='username'>Username:</label>
        <input 
        name="username" 
        value={registerInfo.username} 
        onChange={handleChange} 
        type="text" 
        placeholder='Enter your username'/>
      </div>

      <div className='fld-2'>
        <label htmlFor='password'>Password:</label>
        <input 
        name="password" 
        value={registerInfo.password} 
        onChange={handleChange} 
        type="password" 
        placeholder='Enter your password'/>
      </div>
      </div>
      <button className="btn auth-btn">Register</button>
    </form>
  </div>
  )
}

export default Register