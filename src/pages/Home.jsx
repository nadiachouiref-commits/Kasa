import { useState, useEffect } from 'react'

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
      {/* On affiche le titre de chaque logement pour tester */}
      {properties.map(property => (
        <p key={property.id}>{property.title}</p>
      ))}
    </div>
  )
}

export default Home