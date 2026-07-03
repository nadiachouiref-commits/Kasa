import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Banner from '../components/Banner'
import styles from './Home.module.css'
import bannerImage from '../assets/banner-home.jpg'

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
    <div className={styles.home}>
      {/* Bannière avec image et texte */}
      <div className={styles.banner}>
        <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      </div>

      {/* Grille des logements */}
      <div className={styles.grid}>
        {properties.map(property => (
          <Card 
            key={property.id}
            id={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Home