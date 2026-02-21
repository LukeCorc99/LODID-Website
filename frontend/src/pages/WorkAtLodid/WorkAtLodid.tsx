import styles from './WorkAtLodid.module.css'

const perks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
      </svg>
    ),
    title: 'FLEXIBLE HOURS',
    body: 'We work around you. Whether you need evenings, weekends, or a mix — we build rotas that make sense.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    title: 'GREAT TEAM',
    body: "Small crew, big energy. Everyone pulls together and actually enjoys coming to work. No drama, just good vibes.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"/>
      </svg>
    ),
    title: 'FREE FOOD',
    body: "You'll eat well on every shift. Staff get a full meal on us — because hungry staff make worse burgers.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      </svg>
    ),
    title: 'SAFE ENVIRONMENT',
    body: "Respect is non-negotiable here. Every member of the team is treated fairly, and management has your back.",
  },
]

const roles = [
  {
    title: 'Kitchen Staff',
    type: 'Part-time / Full-time',
    desc: 'Prep, cook, plate. You keep the standard high and the line moving.',
  },
  {
    title: 'Counter Service',
    type: 'Part-time',
    desc: "First face our customers see. You take orders, handle payments, and keep things running smoothly at the front.",
  },
  {
    title: 'Weekend Grill',
    type: 'Weekend only',
    desc: 'Our busiest shifts. Fast-paced and high energy — if you thrive under pressure, this is yours.',
  },
]

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

      {/* Perks */}
      <section className={styles.perksSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>WHY LODID</p>
          <h2 className={styles.sectionTitle}>What You Get</h2>
        </div>
        <div className={styles.perksGrid}>
          {perks.map((perk) => (
            <div key={perk.title} className={styles.perkCard}>
              <div className={styles.perkIcon}>{perk.icon}</div>
              <h3 className={styles.perkTitle}>{perk.title}</h3>
              <p className={styles.perkBody}>{perk.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section className={styles.rolesSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrowLight}>NOW HIRING</p>
          <h2 className={styles.sectionTitleLight}>Open Positions</h2>
        </div>
        <div className={styles.rolesList}>
          {roles.map((role) => (
            <div key={role.title} className={styles.roleCard}>
              <div className={styles.roleLeft}>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <p className={styles.roleDesc}>{role.desc}</p>
              </div>
              <div className={styles.roleRight}>
                <span className={styles.roleBadge}>{role.type}</span>
                <a href="mailto:lodid@carrollsbar.ie" className={styles.roleApplyBtn}>
                  APPLY
                </a>
              </div>
            </div>
          ))}
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
