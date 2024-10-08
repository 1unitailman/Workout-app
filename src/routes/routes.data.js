import Auth from '../components/screens/auth/Auth'
import ExerciseLog from '../components/screens/exercise-log/ExerciseLog'
import Home from '../components/screens/home/Home'
import NewExercise from '../components/screens/new-exersice/NewExercise'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'
import Workout from '../components/screens/workouts/detail/Workout'
import ListWorkout from '../components/screens/workouts/list/ListWorkout'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: false
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: false
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: false,
	},

	{
		path: '/workout/:id',

		component: Workout,
		isAuth: true,
	},
	{
		path: '/workouts',

		component: ListWorkout,
		isAuth: true,
	},
	{
		path: '/exercise/:id',

		component: ExerciseLog,
		isAuth: true,
	},
]
