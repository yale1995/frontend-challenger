import styles from './styles.module.css'
import { SearchIconRegular } from '../icons'

export const SearchInput = () => {
  return (
    <div className={styles.searchInputContainer}>
      <SearchIconRegular className={styles.searchInputIcon} />
      <input placeholder="Search menu items" className={styles.searchInput} />
    </div>
  )
}
