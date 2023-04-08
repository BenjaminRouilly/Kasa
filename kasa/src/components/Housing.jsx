import React from 'react'
import "./Housing.scss";
import { Link } from "react-router-dom";

function Housing({ id, cover, title }) {

  return (
      <div className='housing'>
          <Link to={{ 
              pathname: "/Housing",
              search: "?_id="+id }}>
              <img src={cover} alt={title} />
              <h3>{title}</h3>
          </Link>
      </div>
  )
}

export default Housing
