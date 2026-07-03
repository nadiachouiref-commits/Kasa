import { useState } from 'react'
import styles from './Slideshow.module.css'

function Slideshow({ pictures }) {
  /* Index de l'image actuellement affichée */
  const [currentIndex, setCurrentIndex] = useState(0)

  /* Image précédente */
  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  /* Image suivante */
  const handleNext = () => {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className={styles.slideshow}>
      {/* Image actuelle */}
      <img className={styles.image} src={pictures[currentIndex]} alt={`photo ${currentIndex + 1}`} />

      {/* Boutons et compteur seulement s'il y a plus d'une image */}
      {pictures.length > 1 && (
        <>
          <button className={styles.prev} onClick={handlePrev}>‹</button>
          <button className={styles.next} onClick={handleNext}>›</button>
          {/* Compteur d'images */}
          <p className={styles.counter}>{currentIndex + 1}/{pictures.length}</p>
        </>
      )}
    </div>
  )
}

export default Slideshow