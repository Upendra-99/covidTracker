import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"

export const Navbar = () => {

  const handleLogout = () => {
    localStorage.setItem("token", JSON.stringify(false));
  }

  return (
    <div className={styles.Navbar}>
      <div>
        <Link to="/Country">Table View</Link>
        <Link to="/login" onClick={handleLogout}>Logout</Link>
      </div>
      <div>
      </div>
    </div>
  )
}
