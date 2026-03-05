import { Link } from 'react-router-dom'
import styles from './InfoSection.module.css'

function InfoSection() {
  return (
    <section className={styles.infoSection}>

      <div className={styles.infoCard}>
        <h2>LOCATION</h2>
        <p>Find us at Carroll's on Dominick Street, Galway</p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Carroll's+Bar+Dominick+Street+Sligo+Ireland"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.infoBtn}
        >
          FIND US
        </a>
      </div>

      <div className={styles.infoCard}>
        <h2>ABOUT US</h2>
        <p>Learn more about our story and values</p>
        <Link to="/our-story" className={styles.infoBtn}>LEARN MORE</Link>
      </div>

      <div className={styles.infoCard}>
        <h2>WORK AT LODID</h2>
        <p>Join our team and be part of something delicious</p>
        <Link to="/work-at-lodid" className={styles.infoBtn}>APPLY NOW</Link>
      </div>

    </section>
  )
}

export default InfoSection
