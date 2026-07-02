// On reçoit les données du logement via les props
function Card({ title, cover }) {
  return (
    <div>
      {/* Image de couverture du logement */}
      <img src={cover} alt={title} />

      {/* Titre du logement */}
      <p>{title}</p>
    </div>
  )
}

export default Card