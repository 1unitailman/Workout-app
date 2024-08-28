import { useAuth } from '../../../hooks/useAuth'
import { Hamburger } from '../hamburger/Hamburger';
import styles from './Header.module.scss'

import { FaArrowLeft } from "react-icons/fa6";

const Header = () => {
  const {isAuth} = useAuth()

  return (
    <header className={styles.header}>
      <button onClick={() => {}}>
        <FaArrowLeft fontSize={25}/>
      </button>
      <Hamburger />
    </header>
  )
}

export default Header