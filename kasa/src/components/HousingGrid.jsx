import React from 'react'
import '../styles/HousingGrid.scss'
import Housing from './Housing.jsx'
import records from '../datas/logements.json'

/* Grille qui va mapper le contenu du fichier JSON, chaque élément retourne un composant Housing à partir du JSON */
function HousingGrid() {
  return (
    <div className="grid">
      {records.map((record) => {
        return (
          <Housing
            key={record.id}
            id={record.id}
            cover={record.cover}
            title={record.title}
          />
        )
      })}
    </div>
  )
}

export default HousingGrid
