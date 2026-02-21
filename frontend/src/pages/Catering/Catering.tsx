import styles from './Catering.module.css'

const packages = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
    label: 'PRIVATE PARTIES',
    description: 'Birthdays, anniversaries, celebrations — whatever the occasion, we bring the feast. Minimum 20 guests.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 6h-2.18c.07-.44.18-.88.18-1.35C18 2.53 16.5 1 14.65 1c-1.09 0-2.04.52-2.65 1.32L12 2.68l-.35-.36C11.04 1.52 10.09 1 9 1 7.15 1 5.65 2.53 5.65 4.65c0 .47.11.91.18 1.35H4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5.35-3.65c.74 0 1.35.61 1.35 1.3 0 .74-.61 1.35-1.35 1.35H13V3.65c0-.69.56-1.3 1.65-1.3zM9 3.35c1.09 0 1.65.61 1.65 1.3V5H9c-.74 0-1.35-.61-1.35-1.35C7.65 2.96 8.26 3.35 9 3.35zM4 19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-6H4v6z"/>
      </svg>
    ),
    label: 'CORPORATE EVENTS',
    description: 'Office parties, team days, product launches. We handle the food so you can focus on the people.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
      </svg>
    ),
    label: 'SPECIAL OCCASIONS',
    description: "Weddings, sports club nights, community events. Tell us the vibe and we'll make it happen.",
  },
]

const steps = [
  {
    number: '01',
    title: 'Get in Touch',
    description: 'Drop us a message with your date, headcount, and what you have in mind.',
  },
  {
    number: '02',
    title: 'We Plan Together',
    description: "We'll put together a tailored menu and quote that fits your event and budget.",
  },
  {
    number: '03',
    title: 'We Show Up',
    description: 'On the day, we arrive on time with fresh food and handle everything from setup to service.',
  },
]

function Catering() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>FEED THE CROWD</p>
          <h1 className={styles.heroTitle}>CATERING</h1>
          <p className={styles.heroSubtitle}>
            LODID burgers at your event. Seriously good food, zero stress.
          </p>
          <a href="mailto:lodid@carrollsbar.ie" className={styles.heroBtn}>GET A QUOTE</a>
        </div>
      </section>

      {/* Packages */}
      <section className={styles.packagesSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>WHAT WE OFFER</p>
          <h2 className={styles.sectionTitle}>We Cater For Everything</h2>
        </div>
        <div className={styles.packagesGrid}>
          {packages.map((pkg) => (
            <div key={pkg.label} className={styles.packageCard}>
              <div className={styles.packageIcon}>{pkg.icon}</div>
              <h3 className={styles.packageLabel}>{pkg.label}</h3>
              <p className={styles.packageDesc}>{pkg.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrowLight}>SIMPLE AS THAT</p>
          <h2 className={styles.sectionTitleLight}>How It Works</h2>
        </div>
        <div className={styles.stepsGrid}>
          {steps.map((step, i) => (
            <div key={step.number} className={styles.stepCard}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
              {i < steps.length - 1 && <div className={styles.stepConnector} />}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <p className={styles.ctaTitle}>Ready to make it happen?</p>
        <p className={styles.ctaSubtitle}>Reach out and we'll get back to you within 24 hours.</p>
        <a href="mailto:lodid@carrollsbar.ie" className={styles.ctaBtn}>CONTACT US</a>
      </section>

    </main>
  )
}

export default Catering
