import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      {/* Logo qui redirige vers l'accueil */}
      <Link to="/">
        <img className={styles.logo} src="/logo.png" alt="Kasa" />
      </Link>

      {/* Navigation */}
      <nav className={styles.nav}>
        {/* NavLink souligne le lien de la page active */}
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header