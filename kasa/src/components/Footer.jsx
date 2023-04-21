import React from 'react'
import '../styles/Footer.scss'
import logo_black from '../assets/logo_black.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo_black} alt="logo" width="100" />
      </div>
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
