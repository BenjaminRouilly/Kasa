import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import '../styles/HousingPage.scss'
import CollapsibleTemplate from '../components/Collapse'
import records from '../datas/logements.json'
import Banner from '../components/Banner'
import Carrousel from '../components/Carrousel'
import Stars from '../components/Stars'

function HousingPage() {
  /* Méthode useLocation pour récupérer l'URL courante et extraire l'ID du logement à partir de l'URL */
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  /* Méthode find() pour rechercher l'enregistrement de logement correspondant à cet ID dans le fichier JSON */
  const record = records.find((element) => element.id === id)

  if (record !== undefined) {
    return (
      <div>
        <div className="logement">
          <Banner />
          <div>
            <Carrousel slides={record.pictures} />
          </div>
          <div className="housing-page">
            <div className="housing-page__title">
              <h1 className="housing-title">{record.title}</h1>
              <h4 className="housing-location">{record.location}</h4>
              <div className="tags">
                {record.tags.map((element, index) => {
                  return (
                    <p className="tag" key={'tags-' + index.toString()}>
                      {element}
                    </p>
                  )
                })}
              </div>
            </div>
            <div className="housing-page__subtitle">
              <div className="host">
                <p className="host-name">{record.host.name}</p>
                <img
                  src={record.host.picture}
                  className="host-picture"
                  alt={record.title}
                />
              </div>

              <div className="stars">
                <Stars note={record.rating} />
              </div>
            </div>
          </div>
          <div className="collapsibles-container">
            <CollapsibleTemplate label="Description">
              <p className="description_text"> {record.description} </p>
            </CollapsibleTemplate>
            <CollapsibleTemplate label="Equipements">
              <div>
                {' '}
                {record.equipments.map((equip, i) => (
                  <p className="description_text" key={i}>
                    {' '}
                    {equip}{' '}
                  </p>
                ))}
              </div>
            </CollapsibleTemplate>
          </div>
        </div>
      </div>
    )
  } else {
    /* Navigate est utilisé pour naviguer vers la page Error404 en utilisant la propriété "to" qui spécifie l'URL de destination. 
    La propriété "replace" est également utilisée pour remplacer l'URL courante plutôt que d'ajouter une nouvelle entrée à l'historique de navigation. 
    Cela permet de masquer l'URL d'origine de l'utilisateur et de lui donner l'impression qu'il se trouve sur une page différente. */
    return <Navigate to="/Error404" replace={true} />
  }
}

export default HousingPage
