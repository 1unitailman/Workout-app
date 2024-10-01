import { useForm, Controller } from 'react-hook-form'

import Loader from '../../ui/Loader'
import Field from '../../ui/field/Field'
import Button from '../../ui/button/Button'

import Layout from '../../layout/Layout'
import styles from './NewExercise.module.scss'


const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const isLoading = false
const isLoadingAuth = false

const NewExercise = () => {
	const {
		register,
		handleSubmit,
    control,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = (data) => {
		mutate(data.email, data.password)
	}

	return (
		<>
			<Layout
				heading='New Exercise'
				bgImage='./public/new-exercise-bg.jpg'
				backLink='/new-workout'
			>
				<div style={{marginTop: 140}}
					className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Enter name'
					/>

					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'Times is required'
						}}
						placeholder='Enter times'
					/>

					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`src/components/screens/new-exersice/exercisesImages/${name}`}
										src={`src/components/screens/new-exersice/exercisesImages/${name}`}
										alt={name}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>
					<Button>Create</Button>
				</form>
			</div>
			</Layout>
		</>
	)
}

export default NewExercise
