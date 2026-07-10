import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import About from '../pages/About'

const renderAbout = () => {
  return render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  )
}

describe('About', () => {
  /* Test 1 : affiche la page sans planter */
  it('affiche la page A Propos sans planter', () => {
    renderAbout()
    expect(document.body).toBeInTheDocument()
  })

  /* Test 2 : affiche le collapse Fiabilité */
  it('affiche le collapse Fiabilité', () => {
    renderAbout()
    expect(screen.getByText('Fiabilité')).toBeInTheDocument()
  })

  /* Test 3 : affiche le collapse Respect */
  it('affiche le collapse Respect', () => {
    renderAbout()
    expect(screen.getByText('Respect')).toBeInTheDocument()
  })

  /* Test 4 : affiche le collapse Service */
  it('affiche le collapse Service', () => {
    renderAbout()
    expect(screen.getByText('Service')).toBeInTheDocument()
  })

  /* Test 5 : affiche le collapse Sécurité */
  it('affiche le collapse Sécurité', () => {
    renderAbout()
    expect(screen.getByText('Sécurité')).toBeInTheDocument()
  })
})