import React from 'react'
import "../styles/HousingGrid.scss";
import Housing from "./Housing.jsx";
import records from "../datas/logements.json"

function HousingGrid() {

  return (
    <div className='grid'>
          {
              records.map( record => {
                  return (
                      <Housing key={record.id} id={record.id} cover={record.cover} title={record.title} />
                  )
              })
          }
    </div>
  )
}

export default HousingGrid
