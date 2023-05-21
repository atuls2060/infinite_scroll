import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  let isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated")) || false

  if (!isAuthenticated) {
    alert("Login first")
    return <Navigate to="/" />
  }
  return (
    <>
      {children}
    </>
  )
}

export default PrivateRoutes