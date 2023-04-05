import React from 'react'
import "./Housing.css";
import { Link } from "react-router-dom";

function Housing() {
  return (
    <div className="housing">
      <Link to="/housing">
      <div className="housing__subtitle">Titre de la location</div>
      </Link>
    </div>
  );
}

export default Housing
