import React from 'react'
import { NavLink } from 'react-router-dom';
import "./NavBar.scss";
import logo from '../assets/logo.png'

function NavBar() {
  return <nav className='navbar'>
    <NavLink to="/">
      <div className="navbar__logo">
          <img src={logo} alt="logo" />
      </div>
    </NavLink>
    <NavLink to="/">Accueil</NavLink>
    <NavLink to="/about">
      <div>A propos</div>
    </NavLink>
  </nav>
}

export default NavBar