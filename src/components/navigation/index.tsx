import { useEffect } from 'react'
import styles from './styles.module.css'

export const Navigation = () => {
  useEffect(() => {
    const links = document.querySelectorAll(`.${styles.item}`)

    links.forEach((link) => {
      if (link.getAttribute('href') === window.location.pathname) {
        link.classList.add(styles.active)
      }
    })
  }, [])

  return (
    <nav className={styles.navContainer}>
      <div className={styles.listItems}>
        <a href="/" className={styles.item}>
          Menu
        </a>
        <a href="/signin" className={styles.item}>
          Entrar
        </a>
        <a href="/contact" className={styles.item}>
          Contato
        </a>
      </div>
    </nav>
  )
}
