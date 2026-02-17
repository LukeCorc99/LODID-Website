import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.css'
import lodidLogo from '../../assets/lodid logo.png'

interface HeaderProps {
  isMenuOpen: boolean
  onMenuToggle: () => void
}

function Header({ isMenuOpen, onMenuToggle }: HeaderProps) {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink

  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src={lodidLogo} alt="LODID" className={styles.logo} />
      </NavLink>

      <nav className={styles.mainNav}>
        <NavLink to="/" end className={navClass}>HOME</NavLink>
        <NavLink to="/menu" className={navClass}>MENU</NavLink>
        <NavLink to="/work-at-lodid" className={navClass}>WORK AT LODID</NavLink>
        <NavLink to="/our-story" className={navClass}>OUR STORY</NavLink>
        <NavLink to="/contact" className={navClass}>CONTACT</NavLink>
      </nav>

      <div className={styles.headerButtons}>
        <Link to="/collection" className={`${styles.orderBtn} ${styles.collectionBtn}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 18c-1.11 0-2 .89-2 2 0 1.11.89 2 2 2s2-.89 2-2-.89-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.44C5.11 14.37 5 14.67 5 15c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm6 16c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/>
          </svg>
          COLLECTION
        </Link>
        <Link to="/delivery" className={`${styles.orderBtn} ${styles.deliveryBtn}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
          DELIVERY
        </Link>
      </div>

      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
        onClick={onMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default Header
