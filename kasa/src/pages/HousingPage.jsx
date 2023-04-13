import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './HousingPage.scss'
import Collapse from '../components/Collapse'
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
          <div className="ficheLogement">
            <div className="div-description">
              <h1>{record.title}</h1>
              <h4>{record.location}</h4>
              <div className="div-tags">
                {record.tags.map((element, index) => {
                  return (
                    <p className="tags" key={'tags-' + index.toString()}>
                      {element}
                    </p>
                  )
                })}
              </div>
            </div>
            <div className="bloc-stars">
              <div className="div-host">
                <p>{record.host.name}</p>
                <img src={record.host.picture} alt={record.title} />
              </div>

              <div className="stars">
                <Stars note={record.rating} />
              </div>
            </div>
          </div>
          <div className="collapesCollection">
            <div>
              <Collapse
                title="Description"
                content={record.tags.map((element, index) => {
                  return (
                    <p className="tags" key={'tags-' + index.toString()}>
                      {element}
                    </p>
                  )
                })}
              />
            </div>
            <div>
              <Collapse
                title="Equipements"
                content={record.equipments.map((element, index) => {
                  return (
                    <p
                      className="equipement-content"
                      key={'equip-' + index.toString()}
                    >
                      {element}
                    </p>
                  )
                })}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HousingPage
