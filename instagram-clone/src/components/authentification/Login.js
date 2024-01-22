import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import "./Login.css"
import { auth } from '../../firebase'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
  }

  return (
    <div className='login'>
      <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"></img>
      <input onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' value={email}></input>
      <input onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' value={password}></input>
      <button onClick={handleLogin}>Log in</button>
    </div>
  )
}

export default Login