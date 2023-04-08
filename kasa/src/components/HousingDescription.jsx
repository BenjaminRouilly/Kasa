import React from "react";
import "./HousingDescription.scss";

function HousingDescription(props) {

    const [isContentVisible,setIsContentVisible] = React.useState(false);

    const collapse = ()=> {
        setIsContentVisible(!isContentVisible);
    }

    return (
        <div className="housing__description">
            <p className="description__header">
                <span>Description</span>
                <i className="fas-sharp fa-solid fa-chevron-down" onClick={collapse}></i>
            </p>
            {isContentVisible && <p className="description__content">{props.content}</p>}
        </div>
    );
}

export default HousingDescription