import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Logo Kasa en blanc */}
      <img className={styles.logo} src="/logo-white.png" alt="Kasa" />

      {/* Texte copyright */}
      <p className={styles.text}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer