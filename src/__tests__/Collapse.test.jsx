import { render, screen, fireEvent } from '@testing-library/react'
import Collapse from '../components/Collapse'

describe('Collapse', () => {
  /* Test 1 : le titre s'affiche bien */
  it('affiche le titre du collapse', () => {
    render(<Collapse title="Description" content="Contenu test" />)
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  /* Test 2 : le contenu est caché par défaut */
  it('le contenu est caché par défaut', () => {
    render(<Collapse title="Description" content="Contenu test" />)
    const content = screen.getByText('Contenu test').closest('div').parentElement
    expect(content).toHaveStyle('max-height: 0px')
  })

  /* Test 3 : le contenu s'affiche au clic */
  it('affiche le contenu après un clic', () => {
    render(<Collapse title="Description" content="Contenu test" />)
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Contenu test')).toBeInTheDocument()
  })

  /* Test 4 : le contenu se cache après deux clics */
  it('cache le contenu après deux clics', () => {
    render(<Collapse title="Description" content="Contenu test" />)
    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByRole('button'))
    const content = screen.getByText('Contenu test').closest('div').parentElement
    expect(content).toHaveStyle('max-height: 0')
  })
})