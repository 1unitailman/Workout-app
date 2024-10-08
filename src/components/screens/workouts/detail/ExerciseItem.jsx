import cn from 'clsx'

import styles from './Workout.module.scss'
import { useNavigate } from 'react-router-dom'

const ExerciseItem = ({exerciseLog}) => {
	const nav = useNavigate()

	return (
		<div
			className={cn(styles.item, {
				// [styles.completed]: exerciseLog.isCompleted
			})}
		>
			<button
				aria-label='Move to exercise'
				onClick={() => nav(`/exercise/${exerciseLog.id}`)}
			>
				<span>Exercise name</span>
				<img
					//src={}
					height='34'
					alt=''
					draggable={false}
				/>
			</button>
		</div>
	)
}

export default ExerciseItem
