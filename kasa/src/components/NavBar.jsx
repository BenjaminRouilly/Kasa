import React from 'react'
import "./NavBar.css";
import logo from '../assets/logo.png'

function NavBar() {
  return <nav className='navbar'>
    <div className="navbar__logo">
        <img src="../assets/logo.png" alt='Logo'></img>
        <img src={logo} alt="logo" />
    </div>
    <div>Accueil</div>
    <div>A propos</div>
  </nav>
}

export default NavBar
