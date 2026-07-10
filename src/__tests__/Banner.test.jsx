import { render, screen } from '@testing-library/react'
import Banner from '../components/Banner'

describe('Banner', () => {
  /* Test 1 : le composant s'affiche sans planter */
  it('affiche le banner sans planter', () => {
    render(<Banner image="image.jpg" text="Chez vous, partout et ailleurs" />)
    expect(screen.getByText('Chez vous, partout et ailleurs')).toBeInTheDocument()
  })

  /* Test 2 : sans texte le banner s'affiche quand même */
  it('affiche le banner sans texte', () => {
    const { container } = render(<Banner image="image.jpg" />)
    expect(container.firstChild).toBeInTheDocument()
  })

  /* Test 3 : l'image de fond est bien appliquée */
  it("applique l'image de fond correctement", () => {
    const { container } = render(<Banner image="image.jpg" text="Test" />)
    expect(container.firstChild).toHaveStyle('background-image: url(image.jpg)')
  })
})