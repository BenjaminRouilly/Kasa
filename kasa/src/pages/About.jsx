import React from 'react'
import BannerAbout from '../assets/imgapropos.png'
import CollapsibleTemplate from '../components/Collapse'
import '../styles/About.scss'

function About() {
  return (
    <>
      <div className="bannerAbout">
        <img src={BannerAbout} className="App-logo" alt="logo" />
      </div>
      <div className="columns">
        <CollapsibleTemplate label="Fiabilité" fontSize={24}>
          <p className="description_text_about">
            Chez Kasa, nous sommes fiers d'offrir un service de réservation
            d'hôtels fiable et de qualité supérieure. Nous nous engageons à
            honorer chaque réservation et à fournir des informations précises et
            à jour sur chaque établissement.
          </p>
        </CollapsibleTemplate>

        <CollapsibleTemplate label="Respect" fontSize={24}>
          <p className="description_text_about">
            Nous croyons que chaque client mérite un service respectueux et
            attentif. C'est pourquoi nous nous efforçons de créer une expérience
            de réservation personnalisée et facile pour chaque client, en
            répondant à leurs besoins individuels et en leur offrant un service
            de haute qualité à chaque étape.
          </p>
        </CollapsibleTemplate>
        <CollapsibleTemplate label="Service" fontSize={24}>
          <p className="description_text_about">
            Notre objectif est de fournir un service exceptionnel à chaque
            client, à chaque fois. Nous nous engageons à offrir une assistance
            rapide et courtoise à tout moment, ainsi qu'à fournir des
            informations détaillées sur chaque hôtel, pour que nos clients
            puissent faire des choix éclairés en toute confiance.
          </p>
        </CollapsibleTemplate>
        <CollapsibleTemplate
          label="Responsabilité"
          fontSize={24}
          className="testsalut"
        >
          <p className="description_text_about">
            Nous sommes conscients de notre responsabilité envers nos clients et
            envers l'environnement. Nous nous engageons à fournir des
            informations précises et à jour sur chaque établissement, à
            respecter les normes éthiques et environnementales les plus strictes
            et à travailler avec des partenaires responsables pour assurer une
            expérience de voyage durable et respectueuse de l'environnement.
          </p>
        </CollapsibleTemplate>
      </div>
    </>
  )
}

export default About
