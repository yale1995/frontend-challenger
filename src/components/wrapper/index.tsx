import styles from './styles.module.css'
import { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      <section className={styles.contentContainer}>{children}</section>
    </div>
  )
}
