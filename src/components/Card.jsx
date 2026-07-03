import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card({ id, title, cover }) {
  return (
    <Link to={`/property/${id}`} className={styles.link}>
      <div className={styles.card}>
        {/* Image de couverture */}
        <img className={styles.image} src={cover} alt={title} />

        {/* Titre du logement */}
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  )
}

export default Card