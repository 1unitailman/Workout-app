import { useState } from 'react'

import Layout from '../../layout/Layout'

import { useForm } from 'react-hook-form'

import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/Loader'
import styles from './Auth.module.scss'

const isLoading = false 
const isLoadingAuth = false


const Auth = () => {
  const [type, setType] = useState('login')


  const {
    register, 
    handleSubmit,
    formState: {errors}
  } = useForm({
    mode: 'onChange'
  })


  const onSubmit = (data) => {
    mutate(data.email, data.password)
  }


  return (
    <>
      <Layout heading='Sign in' bgImage='./auth-bg.png' />
        <div className='wrapper-inner-page'>
          {(isLoading || isLoadingAuth) && <Loader />}
          <form onSubmit={handleSubmit(onSubmit)}>
          <Field
              error={errors?.email?.message}
              name='email'
              register={register}
              options={{
                required: 'Email is required'
              }}
              type='text'
              placeholder='Enter email'
            />

            <Field
              error={errors?.password?.message}
              name='password'
              register={register}
              options={{
                required: 'Password is required'
              }}
              type='password'
              placeholder='Enter email'
            />
            <div className={styles.wrapperButtons}>
              <Button clickHandler={() => setType('auth')}>Sign in</Button>
          
              <Button clickHandler={() => setType('register')}>Sign up</Button>
            </div>
          </form>
        </div>
    </>
    
  )
}

export default Auth