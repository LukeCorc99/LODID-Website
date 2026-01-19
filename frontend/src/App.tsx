import './App.css'
import lodidLogo from './assets/lodid logo.png'
import { useState } from 'react'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFading, setIsFading] = useState(false)

  const handleSlideChange = (index: number) => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsFading(false)
    }, 200)
  }

  const slides = [
    {
      title: "THIS IS WHY YOUR\nDIET FAILED.",
      description: "Worth every bite.",
      buttonText: "READ MORE"
    },
    {
      title: "CALORIES DON'T COUNT\nWHEN YOU'RE HAPPY.",
      description: "Happiness guaranteed.",
      buttonText: "ORDER ONLINE"
    },
    {
      title: "LIFE'S TOO SHORT\nFOR BORING FOOD.",
      description: "Taste the difference.",
      buttonText: "VIEW MENU"
    }
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <img src={lodidLogo} alt="LODID" className="logo" />

        <nav className="main-nav">
          <a href="#" className="nav-link">HOME</a>
          <a href="#" className="nav-link">MENU</a>
          <a href="#" className="nav-link">WORK AT LODID</a>
          <a href="#" className="nav-link">OUR STORY</a>
          <a href="#" className="nav-link">CONTACT</a>
        </nav>

        <div className="header-buttons">
          <button className="order-btn collection-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 18c-1.11 0-2 .89-2 2 0 1.11.89 2 2 2s2-.89 2-2-.89-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.44C5.11 14.37 5 14.67 5 15c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm6 16c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/>
            </svg>
            COLLECTION
          </button>
          <button className="order-btn delivery-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
            DELIVERY
          </button>
        </div>

        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>HOME</a>
          <a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>MENU</a>
          <a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>WORK AT LODID</a>
          <a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>OUR STORY</a>
          <a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
        </nav>
        <div className="mobile-buttons">
          <button className="order-btn collection-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 18c-1.11 0-2 .89-2 2 0 1.11.89 2 2 2s2-.89 2-2-.89-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.44C5.11 14.37 5 14.67 5 15c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm6 16c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/>
            </svg>
            COLLECTION
          </button>
          <button className="order-btn delivery-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
            DELIVERY
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className={`hero-text ${isFading ? 'fading' : ''}`}>
            <h1>
              {slides[currentSlide].title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
            <p className="hero-description">
              {slides[currentSlide].description}
            </p>
            <button className="read-more-btn">
              {slides[currentSlide].buttonText}
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Additional Sections */}
      <section className="info-section">
        <div className="info-card">
          <h2>OUR MENU</h2>
          <p>Explore our delicious range of burgers, sides, and more</p>
          <button className="info-btn">VIEW MENU</button>
        </div>
        <div className="info-card">
          <h2>LOCATION</h2>
          <p>Find us at Carroll's Bar Beergarden</p>
          <button className="info-btn">FIND US</button>
        </div>
        <div className="info-card">
          <h2>ABOUT US</h2>
          <p>Learn more about our story and values</p>
          <button className="info-btn">LEARN MORE</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p className="copyright">Copyright © LODID 2026 | Website by Luke Corcoran</p>
          </div>
          <div className="footer-links">
            <a href="#!" onClick={(e) => e.preventDefault()}>CATERING</a>
            <span className="separator">|</span>
            <a href="#!" onClick={(e) => e.preventDefault()}>WORK AT LODID</a>
            <span className="separator">|</span>
            <a href="#!" onClick={(e) => e.preventDefault()}>ALLERGENS</a>
            <span className="separator">|</span>
            <a href="#!" onClick={(e) => e.preventDefault()}>PRIVACY</a>
            <span className="separator">|</span>
            <a href="#!" onClick={(e) => e.preventDefault()}>COOKIES</a>
          </div>
          <div className="social-icons">
            <a href="#!" onClick={(e) => e.preventDefault()} className="social-icon" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#!" onClick={(e) => e.preventDefault()} className="social-icon" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a href="#!" onClick={(e) => e.preventDefault()} className="social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#!" onClick={(e) => e.preventDefault()} className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
