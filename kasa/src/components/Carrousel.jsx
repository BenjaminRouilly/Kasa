import { useState } from 'react'

const Carrousel = ({ slides }) => {
  const [position, setPosition] = useState(0)
  const currentLog = position
  return (
    <div className="carrousel">
      <img src={slides[position]} className="slideShow" alt="logo" />
      <div className="chevrons">
        {slides.length > 1 && (
          <>
            <i
              className="chevronCarrousel  fa-solid fa-chevron-left"
              onClick={() => {
                position === 0
                  ? setPosition(slides.length - 1)
                  : setPosition(position - 1)
              }}
            ></i>

            <span className="carrouselCounter">
              {' '}
              {[currentLog + 1]} / {slides.length}
            </span>

            <i
              className="chevronCarrousel  fa-solid fa-chevron-right"
              onClick={() => {
                position === slides.length - 1
                  ? setPosition(0)
                  : setPosition(position + 1)
              }}
            ></i>
          </>
        )}
      </div>
    </div>
  )
}

export default Carrousel
