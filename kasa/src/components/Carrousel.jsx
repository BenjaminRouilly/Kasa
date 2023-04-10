import React from 'react'
import records from "../datas/logements.json"

function Carrousel({ id, position }) {
    const sheet = records.find(element => element.id === id)
    if (sheet !== undefined) {
        let max = sheet.pictures.length
        if (position > max) position = 1
        if (position === 0) position = max

        return (
            <div className='carrousel-housing'>
                <img src={sheet.pictures[position]} alt={sheet.title} />
            </div>
        )
    }
}

export default Carrousel