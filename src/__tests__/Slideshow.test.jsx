import { render, screen, fireEvent } from '@testing-library/react'
import Slideshow from '../components/Slideshow'

/* Images de test */
const pictures = ['image1.jpg', 'image2.jpg', 'image3.jpg']

describe('Slideshow', () => {
  /* Test 1 : affiche la première image par défaut */
  it('affiche la première image par défaut', () => {
    render(<Slideshow pictures={pictures} />)
    expect(screen.getByAltText('photo 1')).toBeInTheDocument()
  })

  /* Test 2 : affiche les boutons si plusieurs images */
  it('affiche les boutons suivant et précédent', () => {
    render(<Slideshow pictures={pictures} />)
    expect(screen.getByText('›')).toBeInTheDocument()
    expect(screen.getByText('‹')).toBeInTheDocument()
  })

  /* Test 3 : n'affiche pas les boutons si une seule image */
  it("n'affiche pas les boutons si une seule image", () => {
    render(<Slideshow pictures={['image1.jpg']} />)
    expect(screen.queryByText('›')).not.toBeInTheDocument()
    expect(screen.queryByText('‹')).not.toBeInTheDocument()
  })

  /* Test 4 : passe à l'image suivante au clic */
  it("passe à l'image suivante au clic", () => {
    render(<Slideshow pictures={pictures} />)
    fireEvent.click(screen.getByText('›'))
    expect(screen.getByAltText('photo 2')).toBeInTheDocument()
  })

  /* Test 5 : revient à la première image depuis la dernière */
  it('revient à la première image depuis la dernière', () => {
    render(<Slideshow pictures={pictures} />)
    fireEvent.click(screen.getByText('›'))
    fireEvent.click(screen.getByText('›'))
    fireEvent.click(screen.getByText('›'))
    expect(screen.getByAltText('photo 1')).toBeInTheDocument()
  })

  /* Test 6 : va à la dernière image depuis la première */
  it('va à la dernière image depuis la première au clic précédent', () => {
    render(<Slideshow pictures={pictures} />)
    fireEvent.click(screen.getByText('‹'))
    expect(screen.getByAltText('photo 3')).toBeInTheDocument()
  })
})