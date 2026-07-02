import { useState } from 'react'

// On reçoit le titre et le contenu via les props
function Collapse({ title, content }) {
  // isOpen gère l'état ouvert/fermé, fermé par défaut
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Clic sur le titre pour ouvrir/fermer */}
      <button onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>

      {/* On affiche le contenu seulement si isOpen est true */}
      {isOpen && <p>{content}</p>}
    </div>
  )
}

export default Collapse