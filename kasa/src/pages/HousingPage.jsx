import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './HousingPage.scss'
import CollapsibleTemplate from '../components/Collapse'
import records from '../datas/logements.json'
import Banner from '../components/Banner'
import Carrousel from '../components/Carrousel'
import Stars from '../components/Stars'

function HousingPage() {
  const [searchParams] = useSearchParams()
  const [query] = useState(searchParams.get('_id'))
  const record = records.find((element) => element.id === query)

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
  }
}

export default HousingPage
