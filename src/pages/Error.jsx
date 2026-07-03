import { Link } from 'react-router-dom'
import styles from './Error.module.css'

function Error() {
  return (
    <div className={styles.error}>
      {/* Code erreur */}
      <h1 className={styles.code}>404</h1>

      {/* Message d'erreur */}
      <p className={styles.message}>Oups! La page que vous demandez n'existe pas.</p>

      {/* Lien pour retourner à l'accueil */}
      <Link to="/" className={styles.link}>Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error