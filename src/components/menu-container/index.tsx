import styles from './styles.module.css'

import { ReactNode } from 'react'

interface MenuContainerProps {
  children: ReactNode
}

export const MenuContainer = ({ children }: MenuContainerProps) => {
  return <div className={styles.menuContainer}>{children}</div>
}
