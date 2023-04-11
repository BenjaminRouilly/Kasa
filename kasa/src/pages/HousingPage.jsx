import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import "./HousingPage.scss";
import HousingDescription from "../components/HousingDescription";
import records from "../datas/logements.json";
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Carrousel from '../components/Carrousel';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as etoilePleine } from '@fortawesome/free-solid-svg-icons'
import { faStar as etoileVide } from '@fortawesome/free-regular-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

/* function HousingPage() {
  return (
    <div className="housing-page">
        <div className="housing__title">            
        </div>
        <div className="housing__owner">  
            <h3>Blip Blop</h3>
            <div className="housing__owner__badge"></div>
            <div className="housing__owner__stars">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
        </div>
        <HousingDescription content="siuhnbvusihbikusdbiodiubsd3"/>
        <HousingDescription />

    </div>
  );
} */


function HousingPage() {
  const [searchParams] = useSearchParams();
  const [query] = useState(searchParams.get('_id'));
  const record = records.find(element => element.id === query)
  const arrayStars = [1, 2, 3, 4, 5]
  let position = 1
 
  if (record !== undefined) {
      return (
          <div>
              <div className='logement'>
              <Banner />
              <div>
                  <Carrousel id={record.id} position={position} />
                  <button className='button-left' onClick={() =>Carrousel(record.id, position--)}>
                      <FontAwesomeIcon key={"btn_"+Math.random().toString()} icon={faChevronLeft} />
                  </button>
                  <button className='button-right' onClick={Carrousel(record.id, position++)}>
                      <FontAwesomeIcon key={"btn_"+Math.random().toString()} icon={faChevronRight} />
                  </button>
              </div>
              <div className='ficheLogement'>
                  <div className='div-description'>
                      <h1>{record.title}</h1>
                      <h4>{record.location}</h4>
                      <div className='div-tags'>
                          {
                              record.tags.map((element, index) => {
                                  return(<p className='tags' key={"tags-"+index.toString()}>{element}</p>)
                              })
                          }
                      </div>
                  </div>
                  <div className='bloc-stars'>
                      <div className='div-etoiles'>
                          <p>{record.host.name}</p>
                          <img src={record.host.picture} alt={record.title} />
                      </div>
                      
                      <div className='stars'>
                          {
                              arrayStars.map(element => {
                                  const nbreEtoiles = parseInt(record.rating)
                                  if (element <= nbreEtoiles) {
                                      return(
                                          <FontAwesomeIcon 
                                              key={"fa_"+Math.random().toString()} 
                                              icon={etoilePleine} 
                                              className="span1"
                                          />
                                      )
                                  } else {
                                      return(
                                          <FontAwesomeIcon 
                                              key={"fa_"+Math.random().toString()} 
                                              icon={etoilePleine}
                                              className="span2"
                                          />
                                      )
                                  }
                              })
                          }
                      </div>
                  </div>
              </div>
              <div className='collapses'>

                  <div className='description'>
                      <div className='description-header'>
                          <div>Description</div>
                          <div className='description-chevron'>
                              <FontAwesomeIcon 
                                  key={"fa_"+Math.random().toString()} 
                                  icon={faChevronUp}
                                  className="fa-chevron-up"
                              />
                          </div>
                      </div>
                      <div className='fond-description'>
                          <p className='description-content'>{record.description}</p>
                      </div>
                  </div>

                  <div className='equipements'>
                      <div className='equipements-header'>
                          <div>Équipements</div>
                          <div className='description-chevron'>
                              <FontAwesomeIcon 
                                  key={"fa_"+Math.random().toString()} 
                                  icon={faChevronUp}
                                  className="fa-chevron-up"
                              />
                          </div>
                      </div>
                      <div className='fond-description'>
                          {
                              record.equipments.map((element, index) => {
                                  return(<p className='equipement-content' key={"equip-"+index.toString()}>{element}</p>)
                              })
                          }
                      </div>
                  </div>

                  </div>
              </div>
              <Footer />
          </div>
      )
  }
}

export default HousingPage
