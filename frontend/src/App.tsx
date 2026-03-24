import './App.css'
import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import MobileMenu from './components/MobileMenu'
import Footer from './components/Footer'
import InfoModal, { type ModalType } from './components/InfoModal'
import Home from './pages/Home'
import Menu from './pages/Menu'
import WorkAtLodid from './pages/WorkAtLodid'
import Catering from './pages/Catering'
import Collection from './pages/Collection'
import Delivery from './pages/Delivery'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeModal, setActiveModal] = useState<ModalType | null>(null)

  const openModal = (type: ModalType) => setActiveModal(type)
  const closeModal = () => setActiveModal(null)

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="app">
        <Header isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <Routes>
          <Route path="/" element={<Home onOpenModal={openModal} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/work-at-lodid" element={<WorkAtLodid />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
        <Footer onOpenModal={openModal} />
        <InfoModal type={activeModal} onClose={closeModal} />
      </div>
    </HashRouter>
  )
}

export default App
