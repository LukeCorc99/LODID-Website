import { useState, useEffect } from 'react'
import styles from './Menu.module.css'
import burgerImg from '../../assets/burger.jpg'
import chipsImg from '../../assets/chips.jpg'
import chickenImg from '../../assets/chicken.jpg'
import hotdogImg from '../../assets/hotdog.jfif'
import nachosImg from '../../assets/nachos.jpg'
import platterImg from '../../assets/platter.jpg'

type MenuItem = {
  name: string
  desc?: string
  badge?: string
  allergens?: string
  price?: string | null
}

type Section = {
  id: string
  label: string
  title: string
  subtitle?: string
  note?: string
  image: string
  items: MenuItem[]
}

const menu: Section[] = [
  {
    id: 'dawgs',
    label: 'DAWGS',
    title: 'DAWGS',
    subtitle: 'Served with Fries',
    image: hotdogImg,
    items: [
      {
        name: 'JAGER DAWG',
        desc: 'Jagermeister Drizzle, Chilli Jam, Orange Dill Pickle, Scallions',
        allergens: '1, 3, 6, 7, 9, 12',
        price: '13',
      },
      {
        name: 'PLAIN DAWG',
        desc: 'Mustard, Ketchup, Pickles, Crispy Onion',
        allergens: '1, 6, 8, 10',
        price: '11.50',
      },
    ],
  },
  {
    id: 'burgers',
    label: 'BURGERS',
    title: 'BURGERS',
    subtitle: 'Served with Fries',
    image: burgerImg,
    items: [
      {
        name: 'THE JAMESON BREW BURGER',
        desc: 'Beef Burger, Jameson Coffee Bacon Jam, Smoked Applewood Cheddar',
        allergens: '1, 3, 6, 7, 9, 10',
        price: '15.95',
      },
      {
        name: 'THE CLASSIC',
        desc: 'Beef Burger, Burger Sauce, Lettuce, Red Onion',
        allergens: '1, 3, 6, 7, 9, 10',
        price: '12.95',
      },
      {
        name: 'THE PULLED PORK BLAH',
        desc: 'Pork, Jam, Cheese Sauce, Pickles',
        allergens: '1, 3, 6, 7, 9, 10',
        price: '12.95',
      },
      {
        name: 'THE CHILI CHICKEN CLUB',
        desc: 'Fried Chicken, Bacon, Lettuce, Fried Egg, Chilli Jam, Cheese',
        allergens: '1, 3, 6, 7, 9, 10',
        price: '13.95',
      },
    ],
  },
  {
    id: 'fries',
    label: 'FRIES',
    title: 'FRIES',
    image: chipsImg,
    items: [
      {
        name: 'PLAIN FRIES',
        allergens: '1, 3, 6, 7',
        price: '5',
      },
      {
        name: 'SPICE BAG FRIES',
        desc: 'With Vegan Curry Sauce — ADD Shredded Chicken €2',
        allergens: '1, 3, 5, 6, 7, 8, 9, 10, 12',
        price: '7',
      },
      {
        name: 'TRUFFLE FRIES WITH PARMESAN',
        badge: 'VEGAN',
        allergens: '1, 3, 6, 7',
        price: '7.50',
      },
      {
        name: 'LODID FRIES',
        desc: 'BBQ Pulled Pork, Cheese Sauce, Tomato Concasse, Cortilldo Cabbage, Hot Garlic Honey, Smoked Sour Cream, Jalapeños',
        allergens: '1, 3, 5, 6, 7, 8, 9, 10, 12',
        price: '10.50',
      },
      {
        name: 'BUILD YOUR OWN LODID FRIES',
        desc: 'ADD Curry Sauce €2  ·  Garlic Sauce €1.50  ·  Cheese Sauce €1.50  ·  Pulled Pork €3  ·  Shredded Chicken €3',
        price: null,
      },
    ],
  },
  {
    id: 'tenders',
    label: 'TENDERS',
    title: 'TENDERS',
    note: 'Tossed in a sauce of your choice. Veg option available — mushroom fritters tossed in below sauces.',
    image: chickenImg,
    items: [
      {
        name: 'PLAIN TENDERS',
        allergens: '1, 3, 6, 7',
        price: '10.95',
      },
      {
        name: 'SHEEPDOG STICKY PEANUT BUTTER BBQ',
        allergens: '1, 3, 6, 7, 9, 10, 12',
        price: '12.95',
      },
      {
        name: 'HOT GARLIC HONEY',
        desc: 'House Hot Sauce, Chive Powder',
        allergens: '1, 3, 6, 7, 9, 10',
        price: '12.95',
      },
      {
        name: 'SESAME PONZU',
        desc: 'Napa Salad, Nduja Mayo',
        allergens: '1, 3, 6, 7, 9, 10',
        price: '12.95',
      },
    ],
  },
  {
    id: 'nachos',
    label: 'NACHOS',
    title: 'NACHOS',
    image: nachosImg,
    items: [
      {
        name: 'LODID NACHOS',
        desc: 'BBQ Pulled Pork, Cheese Sauce, Tomato Concasse, Cortilldo Cabbage, Hot Garlic Honey, Smoked Sour Cream, Jalapeños',
        allergens: '1, 3, 6, 7, 9, 10, 12',
        price: '11.50',
      },
      {
        name: 'LODID VEG NACHOS',
        desc: 'Roasted Piquillo Pepper, Mushroom Fritter, Cortilldo Cabbage, Tomato Concasse, Hot Garlic Honey, Smoked Sour Cream, Cheese Sauce',
        allergens: '1, 3, 6, 7, 9, 10, 12',
        price: '10.50',
      },
    ],
  },
  {
    id: 'platters',
    label: 'PLATTERS',
    title: 'SHARING PLATTER',
    image: platterImg,
    items: [
      {
        name: 'PLATTER FOR 4',
        desc: '1 of each Tender, Lodid Nachos/Fries Centre, Sticky Pork Belly',
        price: '25',
      },
      {
        name: 'PLATTER FOR 6',
        desc: '2 of each Tender, Lodid Nachos/Fries Centre, Sticky Pork Belly',
        price: '35',
      },
    ],
  },
  {
    id: 'sides',
    label: 'SIDES',
    title: 'SIDES',
    image: chipsImg,
    items: [
      {
        name: 'HOT HONEY AUBERGINE FRIES',
        price: '6.50',
      },
      {
        name: 'STICKY JÄGER PORK BELLY BITES',
        price: '8',
      },
    ],
  },
]

const allergenKey = [
  { num: 1,  name: 'Cereals (gluten)' },
  { num: 2,  name: 'Crustaceans' },
  { num: 3,  name: 'Eggs' },
  { num: 4,  name: 'Fish' },
  { num: 5,  name: 'Peanuts' },
  { num: 6,  name: 'Soy beans' },
  { num: 7,  name: 'Milk' },
  { num: 8,  name: 'Nuts' },
  { num: 9,  name: 'Celery' },
  { num: 10, name: 'Mustard' },
  { num: 11, name: 'Sesame seed' },
  { num: 12, name: 'Sulphites' },
  { num: 13, name: 'Lupin' },
  { num: 14, name: 'Molluscs' },
]

function Menu() {
  const [activeId, setActiveId] = useState(menu[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-145px 0px -55% 0px', threshold: 0 }
    )
    menu.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // HashRouter owns the URL hash, so <a href="#id"> would be treated as a
  // route change. Use scrollIntoView() instead — it respects scroll-margin-top.
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>DELICIOUS FOOD WITH FLAVOUR</p>
        <h1 className={styles.heroTitle}>OUR MENU</h1>
        <p className={styles.heroSub}>Made fresh. Flavoured right. Every time.</p>
      </section>

      {/* ── Sticky category nav ──────────────────────────── */}
      <nav className={styles.categoryNav} aria-label="Jump to menu section">
        <div className={styles.navInner}>
          {menu.map(s => (
            <button
              key={s.id}
              className={`${styles.navLink} ${activeId === s.id ? styles.navLinkActive : ''}`}
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Menu sections ────────────────────────────────── */}
      {menu.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`${styles.menuSection} ${i % 2 !== 0 ? styles.menuSectionAlt : ''}`}
        >
          {/* Banner */}
          <div className={styles.banner}>
            <img src={section.image} alt={section.title} className={styles.bannerImg} />
            <div className={styles.bannerOverlay} />
            <div className={styles.bannerContent}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.subtitle && (
                <p className={styles.sectionSubtitle}>{section.subtitle}</p>
              )}
            </div>
          </div>

          {/* Optional note (e.g. Tenders) */}
          {section.note && (
            <div className={styles.sectionNote}>
              <p>{section.note}</p>
            </div>
          )}

          {/* Items grid */}
          <div className={styles.itemsWrapper}>
            <div className={styles.itemsGrid}>
              {section.items.map(item => (
                <div
                  key={item.name}
                  className={`${styles.itemCard} ${item.price === null ? styles.itemCardSpan : ''}`}
                >
                  <div className={styles.itemHeader}>
                    <div className={styles.itemNameGroup}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      {item.badge && <span className={styles.badge}>{item.badge}</span>}
                    </div>
                    {item.price != null
                      ? <span className={styles.price}>€{item.price}</span>
                      : <span className={styles.priceFlex}>MAKE IT YOURS</span>
                    }
                  </div>
                  {item.desc && <p className={styles.itemDesc}>{item.desc}</p>}
                  {item.allergens && <p className={styles.itemAllergens}>{item.allergens}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Allergen key ─────────────────────────────────── */}
      <section className={styles.allergenSection}>
        <div className={styles.allergenInner}>
          <h3 className={styles.allergenHeading}>ALLERGEN INFORMATION</h3>
          <div className={styles.allergenGrid}>
            {allergenKey.map(a => (
              <div key={a.num} className={styles.allergenEntry}>
                <span className={styles.allergenNum}>{a.num}</span>
                <span className={styles.allergenName}>{a.name}</span>
              </div>
            ))}
          </div>
          <p className={styles.allergenDisclaimer}>
            Please inform a member of staff of any allergies or dietary requirements before ordering.
            Menu items may contain or come into contact with allergens not listed above.
          </p>
        </div>
      </section>

    </main>
  )
}

export default Menu
