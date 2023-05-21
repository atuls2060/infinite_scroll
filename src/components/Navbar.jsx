import React from 'react'
import Styles from "./navbar.module.css"
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className={Styles.navbar}>
      <Link to="/home"> <h2>Scroll</h2></Link>
      <button>Log out</button>
    </div>
  )
}

export default Navbar