import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <div className='signup'>
      <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"></img>
      <input type='email' placeholder='Email'></input>
      <input type='text' placeholder='Username'></input>
      <input type='password' placeholder='Password'></input>
      <button>Sign Up</button>
    </div>
  )
}

export default Signup