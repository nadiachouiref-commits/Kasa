import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      {/* Logo qui redirige vers l'accueil */}
      <Link to="/">
        <img src="/logo.png" alt="Kasa" />
      </Link>

      {/* Navigation */}
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  )
}

export default Header