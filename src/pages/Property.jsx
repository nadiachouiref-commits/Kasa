import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import styles from './Property.module.css'

function Property() {
  /* Récupère l'id du logement depuis l'URL */
  const { id } = useParams()

  /* Pour rediriger vers la page 404 si l'id n'existe pas */
  const navigate = useNavigate()

  /* useState pour stocker les données du logement */
  const [property, setProperty] = useState(null)

  /* useEffect pour récupérer les données au chargement de la page */
  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then(response => {
        /* Si l'id n'existe pas, on redirige vers la page 404 */
        if (!response.ok) {
          navigate('/404')
        }
        return response.json()
      })
      .then(data => setProperty(data))
  }, [id])

  /* Si les données ne sont pas encore chargées */
  if (!property) return <p>Chargement...</p>

  return (
    <div className={styles.property}>
      {/* Carrousel d'images */}
      <Slideshow pictures={property.pictures} />

      {/* Infos principales */}
      <div className={styles.info}>
        <div className={styles.infoLeft}>
          {/* Titre du logement */}
          <h1 className={styles.title}>{property.title}</h1>

          {/* Localisation */}
          <p className={styles.location}>{property.location}</p>

          {/* Tags */}
          <div className={styles.tags}>
            {property.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className={styles.infoRight}>
          {/* Nom et photo du host */}
          <div className={styles.host}>
            <p className={styles.hostName}>{property.host.name}</p>
            <img className={styles.hostPicture} src={property.host.picture} alt={property.host.name} />
          </div>

          {/* Rating étoiles */}
          <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map(star => (
              <span key={star} className={star <= property.rating ? styles.starActive : styles.starInactive}>★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Collapses */}
      <div className={styles.collapses}>
        <Collapse title="Description" content={property.description} />
        <Collapse title="Équipements" content={property.equipments.join(', ')} />
      </div>
    </div>
  )
}

export default Property