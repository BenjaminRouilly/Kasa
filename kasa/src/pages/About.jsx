import React from 'react'
import Banner from '../components/Banner'
import HousingDescription from '../components/HousingDescription'
import"./About.scss";

function About() {
  return (
    <>
        <Banner />
        <div className="about__container">
            <HousingDescription />
            <HousingDescription />
            <HousingDescription />
            <HousingDescription />
        </div>
    </>
  )
}

export default About
