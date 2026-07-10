import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Error from '../pages/Error'

const renderError = () => {
  return render(
    <BrowserRouter>
      <Error />
    </BrowserRouter>
  )
}

describe('Error', () => {
  /* Test 1 : affiche le code 404 */
  it('affiche le code 404', () => {
    renderError()
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  /* Test 2 : affiche le message d'erreur */
  it("affiche le message d'erreur", () => {
    renderError()
    expect(screen.getByText(/Oups/i)).toBeInTheDocument()
  })

  /* Test 3 : affiche le lien retour accueil */
  it("affiche le lien retour à l'accueil", () => {
    renderError()
    expect(screen.getByText("Retourner sur la page d'accueil")).toBeInTheDocument()
  })

  /* Test 4 : le lien pointe vers l'accueil */
  it("le lien pointe vers /", () => {
    renderError()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })
})