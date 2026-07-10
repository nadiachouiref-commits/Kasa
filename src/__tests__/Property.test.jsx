import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Property from '../pages/Property'

/* Mock de fetch pour simuler le backend */
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      id: '123',
      title: 'Appartement cosy',
      location: 'Paris 17e',
      pictures: ['image1.jpg', 'image2.jpg'],
      description: 'Une belle description',
      equipments: ['Wifi', 'Cuisine'],
      tags: ['Cosy', 'Paris'],
      rating: '4',
      host: {
        name: 'Nathalie Jean',
        picture: 'host.jpg'
      }
    })
  })
)

const renderProperty = () => {
  return render(
    <MemoryRouter initialEntries={['/property/123']}>
      <Routes>
        <Route path="/property/:id" element={<Property />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('Property', () => {
  /* Test 1 : affiche le chargement au départ */
  it('affiche le chargement au départ', () => {
    renderProperty()
    expect(screen.getByText('Chargement...')).toBeInTheDocument()
  })

  /* Test 2 : affiche le titre du logement */
  it('affiche le titre du logement', async () => {
    renderProperty()
    const title = await screen.findByText('Appartement cosy')
    expect(title).toBeInTheDocument()
  })

  /* Test 3 : affiche la localisation */
  it('affiche la localisation', async () => {
    renderProperty()
    const location = await screen.findByText('Paris 17e')
    expect(location).toBeInTheDocument()
  })

  /* Test 4 : affiche le nom du propriétaire */
  it('affiche le nom du propriétaire', async () => {
    renderProperty()
    const host = await screen.findByText('Nathalie Jean')
    expect(host).toBeInTheDocument()
  })
})