import React from 'react'
import Styles from "./navbar.module.css"
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    navigate("/")
  }
  return (
    <div className={Styles.navbar}>
      <Link to="/home"> <h2>Scroll</h2></Link>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Navbar