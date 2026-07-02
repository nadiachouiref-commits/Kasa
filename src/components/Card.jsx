import { Link } from 'react-router-dom'

// On reçoit l'id, le titre et l'image via les props
function Card({ id, title, cover }) {
  return (
    <Link to={`/property/${id}`}>
      <div>
        {/* Image de couverture */}
        <img src={cover} alt={title} />

        {/* Titre du logement */}
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default Card