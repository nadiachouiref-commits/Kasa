import { useState } from 'react'
import styles from './Collapse.module.css'

function Collapse({ title, content }) {
  /* isOpen gère l'état ouvert/fermé, fermé par défaut */
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.collapse}>
      {/* Bouton titre avec flèche */}
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {title}
        {/* Flèche qui change selon l'état */}
        <span className={styles.arrow}>{isOpen ? '∧' : '∨'}</span>
      </button>

      {/* Contenu affiché seulement si isOpen est true */}
      {isOpen && <p className={styles.content}>{content}</p>}
    </div>
  )
}

export default Collapse