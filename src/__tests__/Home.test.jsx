import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

/* Mock de fetch pour simuler le backend */
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: '123', title: 'Appartement cosy', cover: 'image.jpg' },
      { id: '456', title: 'Studio moderne', cover: 'image2.jpg' },
    ])
  })
)

const renderHome = () => {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

describe('Home', () => {
  /* Test 1 : la page s'affiche sans planter */
  it('affiche la page accueil sans planter', async () => {
    renderHome()
    expect(document.body).toBeInTheDocument()
  })

  /* Test 2 : affiche les logements après chargement */
  it('affiche les logements après chargement', async () => {
    renderHome()
    const card = await screen.findByText('Appartement cosy')
    expect(card).toBeInTheDocument()
  })
})