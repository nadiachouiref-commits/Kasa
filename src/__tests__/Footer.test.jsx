import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Footer', () => {
  /* Test 1 : le logo s'affiche */
  it('affiche le logo Kasa', () => {
    render(<Footer />)
    expect(screen.getByAltText('Kasa')).toBeInTheDocument()
  })

  /* Test 2 : le texte copyright s'affiche */
  it('affiche le texte copyright', () => {
    render(<Footer />)
    expect(screen.getByText('© 2020 Kasa. All rights reserved')).toBeInTheDocument()
  })
})