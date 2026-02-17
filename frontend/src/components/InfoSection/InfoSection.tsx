import styles from './InfoSection.module.css'

function InfoSection() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoCard}>
        <h2>OUR MENU</h2>
        <p>Explore our delicious range of burgers, sides, and more</p>
        <button className={styles.infoBtn}>VIEW MENU</button>
      </div>
      <div className={styles.infoCard}>
        <h2>LOCATION</h2>
        <p>Find us at Carroll's Bar Beergarden</p>
        <button className={styles.infoBtn}>FIND US</button>
      </div>
      <div className={styles.infoCard}>
        <h2>ABOUT US</h2>
        <p>Learn more about our story and values</p>
        <button className={styles.infoBtn}>LEARN MORE</button>
      </div>
    </section>
  )
}

export default InfoSection
