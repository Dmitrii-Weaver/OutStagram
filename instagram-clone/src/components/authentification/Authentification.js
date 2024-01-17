import React, { useState } from 'react'
import './Authentification.css'
import Login from './Login.js'
import Signup from './Signup.js'

const Authentification = () => {

  const [active, setActive] = useState("login")
  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login")
  }
  return (
    <div className='auth'>
      <div className='auth_left'>
        <img src='https://i.imgur.com/P3Vm1Kq.png'></img>
      </div>
      <div className='auth_right'>
        {active === "login" ? (<Login />) : (<Signup />)}
        <div className='auth_more'>
          <span>
            {active === "login" ? (<>Don't have an account? <button onClick={handleChange}>Sign up</button></>) : (<>Already have an account? <button onClick={handleChange}>Log in</button></>)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Authentification