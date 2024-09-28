import cn from 'clsx'

import stylesLayout from '../../layout/Layout.module.scss'

import Header from '../../layout/header/Header'
import BeforeAfter from './BeforeAfter.jsx'

const Profile = () => {
	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/public/profile-bg.jpg')`,
					height: 356
				}}
			>
				<Header />

				<div className={stylesLayout.center}>
					<>
						<img
							src='public\header\user.svg'
							alt='Profile'
							height='56'
							draggable={false}
						/>
						<h1 className={stylesLayout.heading}>UserName</h1>
					</>
				</div>
			</div>

			<BeforeAfter />
		</>
	)
}

export default Profile
