import React, { useState } from 'react'
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className='login'>
      <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"></img>
      <input onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' value={email}></input>
      <input onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' value={password}></input>
      <button>Log in</button>
    </div>
  )
}

export default Login