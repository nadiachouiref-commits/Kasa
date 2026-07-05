import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Property from './pages/Property'
import Error from './pages/Error'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      {/* Header affiché sur toutes les pages */}
      <Header />
      <main>
        {/* Les routes changent selon l'URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      {/* Footer affiché sur toutes les pages */}
      <Footer />
    </BrowserRouter>
  )
}

export default App