import React, { useEffect, useState } from 'react'
import Style from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  let isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated")) || false

  const handleLogin = () => {
    if (email === "foo" && password === "bar") {
      localStorage.setItem("isAuthenticated", true)
      navigate("/home")
    } else {
      alert("Wrong credentials!")
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home")
    }
  }, [isAuthenticated, navigate])

  return (
    <div>
      <div className={Style.form_container}>
        <h3>Login</h3>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login