import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'

/* On entoure Header avec BrowserRouter car il utilise Link */
const renderHeader = () => {
  return render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

describe('Header', () => {
  /* Test 1 : le logo s'affiche */
  it('affiche le logo Kasa', () => {
    renderHeader()
    expect(screen.getByAltText('Kasa')).toBeInTheDocument()
  })

  /* Test 2 : le lien Accueil s'affiche */
  it('affiche le lien Accueil', () => {
    renderHeader()
    expect(screen.getByText('Accueil')).toBeInTheDocument()
  })

  /* Test 3 : le lien A Propos s'affiche */
  it('affiche le lien A Propos', () => {
    renderHeader()
    expect(screen.getByText('A Propos')).toBeInTheDocument()
  })

  /* Test 4 : le lien Accueil pointe vers la bonne URL */
  it('le lien Accueil pointe vers /', () => {
    renderHeader()
    expect(screen.getByText('Accueil').closest('a')).toHaveAttribute('href', '/')
  })
})