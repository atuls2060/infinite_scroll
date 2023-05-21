import React, { useState } from 'react'
import '../style.css';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated")) || false

  const handleLogin = () => {
    if (email === "foo" && password === "bar") {
      localStorage.setItem("isAuthenticated", true)
    } else {
      alert("Wrong credentials!")
    }
  }


  if (isAuthenticated) {
    return <Navigate to="/home" />
  }

  return (
    <div>
      <div className='form_container'>
        <h3>Login</h3>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login