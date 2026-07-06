import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Card from '../components/Card'

/* On entoure Card avec BrowserRouter car elle utilise Link */
const renderCard = (props) => {
  return render(
    <BrowserRouter>
      <Card {...props} />
    </BrowserRouter>
  )
}

describe('Card', () => {
  /* Test 1 : le titre s'affiche bien */
  it('affiche le titre du logement', () => {
    renderCard({ id: '123', title: 'Appartement cosy', cover: 'image.jpg' })
    expect(screen.getByText('Appartement cosy')).toBeInTheDocument()
  })

  /* Test 2 : l'image s'affiche avec le bon alt */
  it("affiche l'image avec le bon attribut alt", () => {
    renderCard({ id: '123', title: 'Appartement cosy', cover: 'image.jpg' })
    expect(screen.getByAltText('Appartement cosy')).toBeInTheDocument()
  })

  /* Test 3 : le lien pointe vers la bonne URL */
  it('le lien pointe vers la bonne page logement', () => {
    renderCard({ id: '123', title: 'Appartement cosy', cover: 'image.jpg' })
    expect(screen.getByRole('link')).toHaveAttribute('href', '/property/123')
  })

  /* Test 4 : sans props le composant ne plante pas */
  it('ne plante pas sans titre', () => {
    renderCard({ id: '123', cover: 'image.jpg' })
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})