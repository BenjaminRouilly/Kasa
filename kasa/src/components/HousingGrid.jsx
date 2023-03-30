import React from 'react'
import "./HousingGrid.css";
import Housing from "./Housing.jsx";

function HousingGrid() {
  return (
    <div className="grid">
        <Housing />
        <Housing />
        <Housing />
        <Housing />
    </div>
  )
}

export default HousingGrid
