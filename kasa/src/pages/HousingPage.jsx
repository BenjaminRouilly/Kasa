import React from 'react'
import "./HousingPage.scss";
import HousingDescription from "../components/HousingDescription";

function HousingPage() {
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
        <HousingDescription />
        <HousingDescription />

    </div>
  );
}

export default HousingPage