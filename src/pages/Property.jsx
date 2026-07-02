import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'

function Property() {
  // Récupère l'id du logement depuis l'URL
  const { id } = useParams()

  // Pour rediriger vers la page 404 si l'id n'existe pas
  const navigate = useNavigate()

  // useState pour stocker les données du logement
  const [property, setProperty] = useState(null)

  // useEffect pour récupérer les données au chargement de la page
  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then(response => {
        // Si l'id n'existe pas, on redirige vers la page 404
        if (!response.ok) {
          navigate('/404')
        }
        return response.json()
      })
      .then(data => setProperty(data))
  }, [id])

  // Si les données ne sont pas encore chargées
  if (!property) return <p>Chargement...</p>

  return (
    <div>
      {/* Carrousel d'images */}
      <Slideshow pictures={property.pictures} />

      {/* Titre du logement */}
      <h1>{property.title}</h1>

      {/* Localisation */}
      <p>{property.location}</p>

      {/* Description */}
      <Collapse title="Description" content={property.description} />

      {/* Équipements */}
      <Collapse title="Équipements" content={property.equipments.join(', ')} />
    </div>
  )
}

export default Property