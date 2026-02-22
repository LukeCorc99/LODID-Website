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
        <p>We respect your privacy. Full policy coming soon.</p>
      </>
    ),
  },
  cookies: {
    title: 'Cookie Policy',
    body: (
      <>
        <p>The only cookies we love more than the digital kind are the ones from our kitchen.</p>
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

    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
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
