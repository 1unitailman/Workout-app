import { useForm, Controller } from 'react-hook-form'
import reactSelect from 'react-select'

import Loader from '../../ui/Loader'
import Field from '../../ui/field/Field'
import Button from '../../ui/button/Button'

import Layout from '../../layout/Layout'
import ReactSelect from 'react-select'


const isLoading = false
const isLoadingAuth = false

const NewWorkout = () => {
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
				heading='New Workout'
				bgImage='./public/new-workout-bg.jpg'
				backLink='/'
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

					<Controller
						name='exerciseIds'
						control={control}
						render={({ field: { value, onChange } }) => (
							<ReactSelect 
								classNamePrefix='select2-selection'
								placeholder='Exercises...'
								isMulti
							/> 
						)}
					/>
					<Button>Create</Button>
				</form>
			</div>
			</Layout>
		</>
	)
}

export default NewWorkout
