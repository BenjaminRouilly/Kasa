import React from 'react'
import { Link as NavLink } from 'react-router-dom';
import "./NavBar.css";
import logo from '../assets/logo.png'

function NavBar() {
  return <nav className='navbar'>
    <div className="navbar__logo">
        <img src={logo} alt="logo" />
    </div>
    <div>Accueil</div>
    <NavLink to="/">Accueil</NavLink>
    <NavLink to="/about">
      <div>A propos</div>
    </NavLink>
  </nav>
}

export default NavBar
