import { useState } from 'react'
import styles from './HeroCarousel.module.css'

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

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const handleSlideChange = (index: number) => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsFading(false)
    }, 200)
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={`${styles.heroText} ${isFading ? styles.fading : ''}`}>
          <h1>
            {slides[currentSlide].title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className={styles.heroDescription}>
            {slides[currentSlide].description}
          </p>
          <button className={styles.readMoreBtn}>
            {slides[currentSlide].buttonText}
          </button>
        </div>
      </div>

      <div className={styles.carouselIndicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => handleSlideChange(index)}
          ></span>
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
