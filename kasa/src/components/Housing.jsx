import React from 'react'
import '../styles/Housing.scss'
import { Link } from 'react-router-dom'

function Housing({ id, cover, title }) {
  return (
    <div className="housing">
      <Link to={`/housing/${id}`}>
        <div className="housing_display">
          <img src={cover} alt={title} className="housing_img" />
          <h3 className="housing_title">{title}</h3>
        </div>
      </Link>
    </div>
  )
}

export default Housing
