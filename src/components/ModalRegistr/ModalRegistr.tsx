import { FormElement } from '../FormElement/FormElement'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {AuthParams, fetchRegister} from '../../redux/slices/authSlice'
import { AppDispatch } from '../../redux/store'
import { PayloadAction } from '@reduxjs/toolkit'
import './ModalRegister.scss'

export const ModalRegister = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { register, handleSubmit, setError, formState: { errors, } } = useForm({
		defaultValues: {
			email: '',
			password: '',
            fullName: ''
		},
		mode: 'all',
	})
	 const onSubmit = async (values: any) => {
			const userData = {
			  user: {
					email: values.email,
					password: values.password,
					fullName: values.fullName,
				},
			}
			const takeDataUser = (await dispatch( fetchRegister(userData))) as PayloadAction<AuthParams>

			if (takeDataUser.payload && Array.isArray(takeDataUser.payload)) {
				takeDataUser.payload.forEach((error: any) => {
					setError(error.path, {
						type: 'manual', 
						message: error.msg,
					})
				})
			} else {
				if ('token' in takeDataUser.payload) {
					window.localStorage.setItem('token', takeDataUser.payload.token)
				}
			}
		}

	return (
        <div className="container">
            <div className="register-wrapper">
			<div className='modal-register'>
				<div className='modal-wrapper__register'>
					<form onSubmit={handleSubmit(onSubmit)} className='form-register'>
						<div className='form-title'>
							<h1 className='form-title__inner'>Вход</h1>
						</div>
						<div className='form-input__items'>
							<FormElement 
                            placeholder='Имя' 
                            type='text'
                            error = {Boolean(errors.fullName?.message)}
                            helpertext={errors.fullName?.message}
                            {...register('fullName', {
                                required: 'Вы пропустили это поле !'
                            })}
                            />
							<FormElement
								placeholder='E-mail'
								type='email'
								error={Boolean(errors.email?.message)}
								helpertext={errors.email?.message}
								{...register('email', {
									required: 'Вы пропустили это поле !',
								})}
							/>
							<FormElement
								placeholder='Пароль'
								type='password'
								error={Boolean(errors.password?.message)}
								helpertext={errors.password?.message}
								{...register('password', {
									required: 'Вы пропустили это поле !',
								})}
							/>
							<div className='modal-content__button'>
								<button type='submit' className='modal-content-button__inner'>
									Зарегистрироваться
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
            </div>
        </div>
	)
}
