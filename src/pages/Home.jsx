import { useState, useEffect } from 'react'
import Card from '../components/Card'

function Home() {
  // useState pour stocker la liste des logements
  const [properties, setProperties] = useState([])

  // useEffect pour récupérer les données au chargement de la page
  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
  }, [])

  return (
    <div>
      <h1>Page Accueil</h1>
      {/* On affiche une Card pour chaque logement */}
      {properties.map(property => (
        <Card 
          key={property.id}
          title={property.title}
          cover={property.cover}
        />
      ))}
    </div>
  )
}

export default Home