import { useEffect } from 'react'
import styles from './InfoModal.module.css'

export type ModalType = 'cookies' | 'allergens' | 'contact' | 'privacy'

const modalContent: Record<ModalType, { title: string; body: React.ReactNode }> = {
  contact: {
    title: 'Contact',
    body: (
      <>
        <p>Get in touch — we don't bite. The burgers do though.</p>
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
        <p>LODID operates as part of Carroll's Bar, Dominick Street, Galway. We take your privacy seriously.</p>
        <p><strong>Information we collect</strong><br />When you use our website, we may collect basic usage data such as pages visited and time spent on site. We do not collect personal information unless you voluntarily provide it (e.g. by contacting us via email).</p>
        <p><strong>How we use your information</strong><br />Any information collected is used solely to improve your experience on our site. We do not sell, trade, or share your data with third parties.</p>
        <p><strong>Third-party links</strong><br />Our site may contain links to external sites (e.g. Google Maps, social media). We are not responsible for the privacy practices of those sites.</p>
        <p><strong>Contact</strong><br />If you have any questions about this policy, email us at <a href="mailto:info@carrollsbar.ie">info@carrollsbar.ie</a>.</p>
      </>
    ),
  },
  cookies: {
    title: 'Cookie Policy',
    body: (
      <>
        <p>This website uses cookies to ensure you get the best experience while browsing.</p>
        <p><strong>What are cookies?</strong><br />Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use it.</p>
        <p><strong>How we use cookies</strong><br />We use essential cookies to keep the site functioning correctly. We may also use analytics cookies to understand how visitors interact with our pages — this data is anonymous and used only to improve the site.</p>
        <p><strong>Managing cookies</strong><br />You can control or disable cookies through your browser settings at any time. Note that disabling cookies may affect the functionality of some parts of the site.</p>
        <p>By continuing to use this site, you consent to our use of cookies as described above.</p>
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
