import styles from './WorkAtLodid.module.css'

const steps = [
  {
    number: '01',
    title: 'Send a Message',
    desc: 'Email us with your name, what role interests you, and a little about yourself. No CV required.',
  },
  {
    number: '02',
    title: 'Come In for a Chat',
    desc: "We'll invite you in for a casual conversation — no formal interview, just getting to know each other.",
  },
  {
    number: '03',
    title: 'Start Your First Shift',
    desc: 'If it feels right on both sides, we get you on the rota. Simple.',
  },
]

function WorkAtLodid() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>JOIN THE TEAM</p>
          <h1 className={styles.heroTitle}>WORK AT LODID</h1>
          <p className={styles.heroSubtitle}>
            We hire for attitude and train for skill. If you care about quality
            and enjoy a good shift, you'll fit right in.
          </p>
          <a href="mailto:lodid@carrollsbar.ie" className={styles.heroBtn}>
            APPLY NOW
          </a>
        </div>
      </section>

      {/* How to Apply */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>NO HASSLE</p>
          <h2 className={styles.sectionTitle}>How to Apply</h2>
        </div>
        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.stepCard}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <p className={styles.ctaTitle}>Sound like your kind of place?</p>
        <p className={styles.ctaSubtitle}>
          Drop us a line — we'd love to hear from you.
        </p>
        <a href="mailto:lodid@carrollsbar.ie" className={styles.ctaBtn}>
          GET IN TOUCH
        </a>
      </section>

    </main>
  )
}

export default WorkAtLodid
