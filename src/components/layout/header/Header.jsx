import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth'
import { Hamburger } from '../hamburger/Hamburger';
import styles from './Header.module.scss'

import { FaArrowLeft } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<FaArrowLeft fill='#fff' fontSize={25} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth')
					}}
				>
					<CgProfile fill='#fff' fontSize={25} />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header

