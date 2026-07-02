import { useState } from 'react'

// On reçoit la liste des images via les props
function Slideshow({ pictures }) {
  // index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0)

  // Image précédente
  const handlePrev = () => {
    // Si on est à la première image, on va à la dernière
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // Image suivante
  const handleNext = () => {
    // Si on est à la dernière image, on va à la première
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div>
      {/* Image actuelle */}
      <img src={pictures[currentIndex]} alt={`photo ${currentIndex + 1}`} />

      {/* On affiche les boutons seulement s'il y a plus d'une image */}
      {pictures.length > 1 && (
        <div>
          <button onClick={handlePrev}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
        </div>
      )}
    </div>
  )
}

export default Slideshow