import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import styles from './About.module.css'
import bannerImage from '../assets/banner-about.jpg'

function About() {
  return (
    <div className={styles.about}>
      {/* Bannière sans texte */}
      <div className={styles.banner}>
        <Banner image={bannerImage} />
      </div>

      {/* Liste des Collapses */}
      <div className={styles.collapses}>
        <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale." />
        <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa." />
        <Collapse title="Service" content="La continuité du service est au coeur de notre engagement." />
        <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa." />
      </div>
    </div>
  )
}

export default About