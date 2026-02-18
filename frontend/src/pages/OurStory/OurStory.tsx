import { useState } from 'react'
import styles from './OurStory.module.css'

const chapters = [
  {
    number: '01',
    year: '2021',
    title: 'THE SPARK',
    body: "It started with a simple question: why does great street food have to mean sacrificing quality? LODID was born out of frustration with the ordinary — and a stubborn belief that burgers could be done properly, without compromise."
  },
  {
    number: '02',
    year: '2022',
    title: 'FINDING A HOME',
    body: "Carroll's Bar Beergarden on Dominick Street became the perfect base. A spot already loved by Sligo, with a crowd who appreciated good food and good times. We set up, fired up the grill, and got to work."
  },
  {
    number: '03',
    year: '2023',
    title: 'BUILDING THE MENU',
    body: "Months of testing, tasting, and scrapping ideas until only the best made the cut. Every patty, sauce, and side went through the same filter — would we drive across town for it? If the answer was yes, it stayed."
  },
  {
    number: '04',
    year: '2024',
    title: 'THE WORD SPREADS',
    body: "We didn't advertise. We didn't need to. People came back, and they brought friends. The queues got longer, the weekend specials sold out faster, and Sligo started to take notice. LODID became a habit."
  },
  {
    number: '05',
    year: '2026',
    title: 'WHERE WE ARE NOW',
    body: "Still at Carroll's. Still obsessing over every detail. The menu has grown, the kitchen has levelled up, but the mission hasn't changed — make food worth talking about, and leave people happier than we found them."
  }
]

function OurStory() {
  const [current, setCurrent] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const goTo = (index: number) => {
    if (index === current) return
    setIsFading(true)
    setTimeout(() => {
      setCurrent(index)
      setIsFading(false)
    }, 200)
  }

  const prev = () => goTo((current - 1 + chapters.length) % chapters.length)
  const next = () => goTo((current + 1) % chapters.length)

  return (
    <main className={styles.page}>

      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroBannerInner}>
          <p className={styles.heroEyebrow}>WHO WE ARE</p>
          <h1 className={styles.heroTitle}>OUR STORY</h1>
          <p className={styles.heroSubtitle}>
            It started with a burger and a big idea.
          </p>
        </div>
      </section>

      {/* Story Carousel */}
      <section className={styles.storySection}>
        <div className={styles.carouselWrapper}>

          <button className={styles.arrowBtn} onClick={prev} aria-label="Previous chapter">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={`${styles.slide} ${isFading ? styles.fading : ''}`}>
            <div className={styles.chapterNumber}>{chapters[current].number}</div>
            <div className={styles.chapterContent}>
              <span className={styles.year}>{chapters[current].year}</span>
              <h2 className={styles.chapterTitle}>{chapters[current].title}</h2>
              <p className={styles.chapterBody}>{chapters[current].body}</p>
            </div>
          </div>

          <button className={styles.arrowBtn} onClick={next} aria-label="Next chapter">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

        </div>

        <div className={styles.indicators}>
          {chapters.map((_, i) => (
            <span
              key={i}
              className={`${styles.indicator} ${i === current ? styles.indicatorActive : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </section>

      {/* Closing statement */}
      <section className={styles.closingSection}>
        <p className={styles.closingQuote}>"We're not done yet."</p>
        <p className={styles.closingText}>
          Come find us at Carroll's Bar Beergarden, Dominick Street, Sligo.
        </p>
      </section>

    </main>
  )
}

export default OurStory
