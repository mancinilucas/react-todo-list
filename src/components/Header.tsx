import styles from './Header.module.scss'

import Logo from '../assets/logo.svg'

export function Header(){
  return(
    <header className={styles.header}>
      <img src={Logo} alt="logo" />
    </header>
  )
}