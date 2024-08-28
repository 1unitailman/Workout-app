import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";

import Menu from "./Menu";
import styles from './Hamburger.module.scss'

import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

export const Hamburger = () => {
  const {isShow, ref, setIsShow} = useOnClickOutside(false)
  
  const logoutHandler = () => {}
  
  return (
    <div className={styles.wrapper} ref={ref} >
      <button onClick={() => setIsShow(!isShow)}>
       {isShow ? <IoCloseCircleOutline color="white" /> : <RiMenu3Fill color="white"/> }
      </button>
      <Menu isShow={isShow} />
    </div>
  )
}


