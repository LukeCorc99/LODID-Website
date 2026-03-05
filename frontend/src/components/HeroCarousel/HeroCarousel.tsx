import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './HeroCarousel.module.css'

type Slide = {
  title: string
  description: string
  buttonText: string
  to?: string     // internal React Router route
  href?: string   // external URL
}

const slides: Slide[] = [
  {
    title: "DELICIOUS\nMENU.",
    description: "Dawgs, burgers, fries, tenders and more. Something for everyone.",
    buttonText: "VIEW MENU",
    to: "/menu",
  },
  {
    title: "CATERING\nSERVICES.",
    description: "Let LODID bring the flavour to your next event. Get in touch today.",
    buttonText: "CATERING",
    to: "/catering",
  },
  {
    title: "FIND\nUS.",
    description: "In Carroll's on Dominick Street, Galway.",
    buttonText: "GET DIRECTIONS",
    href: "https://www.google.com/maps/search/?api=1&query=Carroll's+Bar+Dominick+Street+Sligo+Ireland",
  },
]

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const handleSlideChange = (index: number) => {
    if (index === currentSlide) return
    setIsFading(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsFading(false)
    }, 200)
  }

  const slide = slides[currentSlide]

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={`${styles.heroText} ${isFading ? styles.fading : ''}`}>
          <h1>
            {slide.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className={styles.heroDescription}>{slide.description}</p>

          {slide.to ? (
            <Link to={slide.to} className={styles.readMoreBtn}>
              {slide.buttonText}
            </Link>
          ) : (
            <a
              href={slide.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMoreBtn}
            >
              {slide.buttonText}
            </a>
          )}
        </div>
      </div>

      <div className={styles.carouselIndicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
