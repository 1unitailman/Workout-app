import { useNavigate, useNavigation } from "react-router-dom"

import Layout from "../../layout/Layout"

import Button from "../../ui/button/Button"

import styles from './Home.module.scss'

import { useAuth } from "../../../hooks/useAuth"

function Home() {
	const {isAuth} = useAuth()

	const navigate = useNavigate()

	return (
		<Layout bgImage='/public/home-bg.jpg'>
			<Button 
				clickHandler={() => navigate(!isAuth ? '/new-workout' : '/auth')}>
					{isAuth ? 'New' : 'Log in'}
			</Button>
			<h1 className = {styles.heading}>Exercises for shoulders</h1>
		</Layout>
	)
}

export default Home
