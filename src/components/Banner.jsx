import styles from './Banner.module.css'

// On reçoit l'image de fond et le texte via les props
function Banner({ image, text }) {
  return (
    <div 
      className={styles.banner}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Texte affiché sur la bannière */}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  )
}

export default Banner