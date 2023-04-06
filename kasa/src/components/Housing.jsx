import React from 'react'
import "./Housing.scss";
import { Link } from "react-router-dom";

function Housing() {
  return (
    <Link to="/housing">
      <div className="housing">
        <div className="housing__subtitle">Titre de la location</div>
      </div>
    </Link>
  );
}

export default Housing
