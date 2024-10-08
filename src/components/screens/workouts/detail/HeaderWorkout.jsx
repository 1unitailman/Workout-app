import stylesLayout from '../../../layout/Layout.module.scss'

import cn from 'clsx'

import Header from '../../../layout/header/Header'

const HeaderWorkout = () => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/public/workout-bg.jpg')`,
				height: 356
			}}
		>
			<Header backLink='/workouts' />

		</div>
	)
}

export default HeaderWorkout
