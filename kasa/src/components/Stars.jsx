import { useState } from 'react'

const Stars = ({ note }) => {
  /* Hook useState pour stocker la note dans fullStars  */
  const [fullStars] = useState(Math.floor(note))
  /* Le nombre d'étoiles vides sera le résultat de 5 - la note */
  const emptyStars = 5 - fullStars

  return (
    <div className="stars">
      {[...Array(fullStars)].map((_, i) => (
        <i key={i} className="fas fa-star" style={{ color: '#ff6060' }}></i>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={i + fullStars} className="far fa-star"></i>
      ))}
    </div>
  )
}

export default Stars
