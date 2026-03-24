import { useEffect } from 'react'
import styles from './InfoModal.module.css'

export type ModalType = 'cookies' | 'allergens' | 'contact' | 'privacy' | 'hours'

const modalContent: Record<ModalType, { title: string; body: React.ReactNode }> = {
  contact: {
    title: 'Contact',
    body: (
      <>
        <p>Get in touch - we don't bite. The burgers do though.</p>
      </>
    ),
  },
  allergens: {
    title: 'Allergens',
    body: (
      <>
        <p>Your safety matters. Full allergen information coming soon.</p>
      </>
    ),
  },
  privacy: {
    title: 'Privacy Policy',
    body: (
      <>
        <p>This privacy policy explains how LODID, operating as part of Carroll's Bar, Dominick Street, Galway, handles any personal data in connection with this website. We are committed to protecting your privacy in accordance with the General Data Protection Regulation (GDPR) and the Data Protection Acts 1988-2018.</p>
        <p><strong>Data controller</strong><br />Carroll's Bar, Dominick Street, Galway, Ireland.<br />Privacy enquiries: <a href="mailto:info@carrollsbar.ie">info@carrollsbar.ie</a></p>
        <p><strong>What data we collect and why</strong><br />This website does not collect personal data automatically. No accounts, forms, or tracking tools are in use. The only personal data we receive is what you voluntarily provide when you contact us by email (e.g. your name and email address). This data is used solely to respond to your enquiry. The legal basis for processing is our legitimate interest in responding to enquiries directed to us by the person making contact.</p>
        <p><strong>How long we keep your data</strong><br />Email correspondence is retained for up to 12 months unless an ongoing matter requires longer retention, after which it is deleted. It is not stored in any third-party system through this website.</p>
        <p><strong>Automated decision-making</strong><br />We do not carry out any automated decision-making or profiling using your personal data.</p>
        <p><strong>Third-party services</strong><br />This website contains plain hyperlinks to Google Maps, TikTok, Facebook, and Instagram. These are links only - no content from those platforms is embedded on this site, and no third-party cookies or trackers are loaded by this website as a result. If you follow those links, you will be subject to those platforms' own privacy policies.</p>
        <p><strong>Your rights under GDPR</strong><br />You have the right to access, rectify, or erase any personal data we hold about you, to restrict or object to its processing, and to data portability where applicable. To exercise any of these rights, contact us at <a href="mailto:info@carrollsbar.ie">info@carrollsbar.ie</a>.</p>
        <p><strong>Complaints</strong><br />If you believe your data has been handled unlawfully, you have the right to lodge a complaint with the Data Protection Commission (Ireland) at <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer">dataprotection.ie</a>.</p>
        <p style={{ fontSize: '13px', color: '#888', marginTop: '8px' }}>Last updated: March 2026</p>
      </>
    ),
  },
  hours: {
    title: 'Opening Times',
    body: (
      <>
        <p>We're open Wednesday to Sunday. Come hungry.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px' }}>
          <tbody>
            {[
              { day: 'Wednesday', time: '5:00pm – 10:00pm' },
              { day: 'Thursday',  time: '5:00pm – 10:00pm' },
              { day: 'Friday',    time: '5:00pm – 10:00pm' },
              { day: 'Saturday',  time: '3:00pm – 10:00pm' },
              { day: 'Sunday',    time: '5:00pm – 10:00pm' },
            ].map(({ day, time }) => (
              <tr key={day} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <td style={{ padding: '10px 0', fontWeight: 600 }}>{day}</td>
                <td style={{ padding: '10px 0', textAlign: 'right' }}>{time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>Closed Monday &amp; Tuesday.</p>
      </>
    ),
  },
  cookies: {
    title: 'Cookie Policy',
    body: (
      <>
        <p>This website has a minimal cookie footprint. We do not use analytics, advertising, or tracking cookies. Because we use only strictly necessary items, your consent is not required under SI 336/2011 Regulation 5(5) (Irish ePrivacy Regulations).</p>
        <p><strong>Strictly necessary storage only</strong><br />As a single-page application, your browser may store small sessionStorage items (such as navigation state) to keep the site functioning correctly. These items are automatically cleared when you close the browser tab. No personal data is contained in them and they are not used to identify or track you.</p>
        <p><strong>Third-party cookies</strong><br />All links to external services on this site (Google Maps, TikTok, Facebook, Instagram) are plain hyperlinks - not embedded widgets or iframes. Following those links will take you to those platforms, where their own cookie policies apply. No third-party cookies are set by this website itself.</p>
        <p><strong>Managing cookies</strong><br />You can view and clear cookies and site storage at any time through your browser settings. As we set no tracking cookies, doing so will not affect your experience on this site.</p>
        <p style={{ fontSize: '13px', color: '#888', marginTop: '8px' }}>Last updated: March 2026 · Version 1.0</p>
      </>
    ),
  },
}

interface InfoModalProps {
  type: ModalType | null
  onClose: () => void
}

function InfoModal({ type, onClose }: InfoModalProps) {
  useEffect(() => {
    if (!type) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    const header = document.querySelector('header') as HTMLElement | null
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    if (header) {
      const existingPadding = parseInt(getComputedStyle(header).paddingRight, 10)
      header.style.paddingRight = `${existingPadding + scrollbarWidth}px`
    }

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      if (header) header.style.paddingRight = ''
    }
  }, [type, onClose])

  if (!type) return null

  const { title, body } = modalContent[type]

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
    >
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 id="info-modal-title" className={styles.modalTitle}>{title}</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className={styles.modalBody}>
          {body}
        </div>
      </div>
    </div>
  )
}

export default InfoModal
