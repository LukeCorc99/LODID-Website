import './App.css'
import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import WorkAtLodid from './pages/WorkAtLodid'
import OurStory from './pages/OurStory'
import Contact from './pages/Contact'
import Catering from './pages/Catering'
import Allergens from './pages/Allergens'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import Collection from './pages/Collection'
import Delivery from './pages/Delivery'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HashRouter>
      <div className="app">
        <Header isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/work-at-lodid" element={<WorkAtLodid />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/allergens" element={<Allergens />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
