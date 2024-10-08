import styles from './Workout.module.scss'
import stylesLayout from '../../../layout/Layout.module.scss'

import cn from 'clsx'

import Header from '../../../layout/header/Header'
import ExerciseItem from './ExerciseItem'
import HeaderWorkout from './HeaderWorkout'

const Workout = ({exerciseLog}) => {
	return (
		<>
			<HeaderWorkout />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>

				<div className={styles.wrapper}>
					<ExerciseItem exerciseLog={exerciseLog}/>
				</div>
			</div>
		</>
	)
}

export default Workout
