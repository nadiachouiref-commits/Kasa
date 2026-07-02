import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      {/* Code erreur */}
      <h1>404</h1>

      {/* Message d'erreur */}
      <p>Oups! La page que vous demandez n'existe pas.</p>

      {/* Lien pour retourner à l'accueil */}
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error