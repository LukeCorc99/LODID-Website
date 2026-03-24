import { Link } from 'react-router-dom'
import type { ModalType } from '../InfoModal'
import styles from './InfoSection.module.css'

interface InfoSectionProps {
  onOpenModal: (type: ModalType) => void
}

function InfoSection({ onOpenModal }: InfoSectionProps) {
  return (
    <section className={styles.infoSection}>

      <div className={styles.infoCard}>
        <h2>LOCATION</h2>
        <p>Find us at Carroll's on Dominick Street, Galway</p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Carroll's+Bar+Dominick+Street+Galway+Ireland"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.infoBtn}
        >
          FIND US
        </a>
      </div>

      <div className={styles.infoCard}>
        <h2>OPENING TIMES</h2>
        <p>Wednesday to Sunday, from 5pm. Saturday from 3pm.</p>
        <button className={styles.infoBtn} onClick={() => onOpenModal('hours')}>VIEW HOURS</button>
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
