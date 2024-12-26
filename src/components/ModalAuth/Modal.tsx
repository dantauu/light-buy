import { useContext, useEffect } from 'react'
import crossIcon from '../../../public/assets/img/cross.svg' 
import { ModalContext } from '../../app/App'
import { FormElement } from '../FormElement/FormElement'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AuthParams, fetchAuth, selectIsAuth } from '../../redux/slices/authSlice'
import { AppDispatch } from '../../redux/store'
import { PayloadAction } from '@reduxjs/toolkit'
import './Modal.scss'
import { useNavigate } from 'react-router-dom'

export const Modal = ({ modalRef }: any) => {
	const navigate = useNavigate()
	const goToNavigate = () => {
		navigate('/register')
	}
	const dispatch = useDispatch<AppDispatch>()
	const { register, handleSubmit, formState: {errors, isValid} } = useForm({
		defaultValues: {
			email: 'dantau@gmail.com',
			password: '99999'
		},
		mode: "all"
	})
	//Проверка на наличие токена и сохранение его в localstorage
	const onSubmit = async (values: any) => {
		const userData = { user: { email: values.email, password: values.password } }
		const takeDataUser = await dispatch(fetchAuth(userData)) as PayloadAction<AuthParams>

		if ('token' in takeDataUser.payload) {
			window.localStorage.setItem('token', takeDataUser.payload.token)
		}
	}
	console.log(errors, isValid)
    const { setShowModal } = useContext(ModalContext)

	const isAuth = useSelector(selectIsAuth)
	useEffect(() => {
		if (isAuth) {
			setShowModal(false)
		}
	}, [isAuth, setShowModal])
    return (
			<>
				<div ref={modalRef} className='modal'>
					<div className='modal-wrapper'>
						<form onSubmit={handleSubmit(onSubmit)} className='form'>
							<div className='form-title'>
								<h1 className='form-title__inner'>Вход</h1>
							</div>
							<div className='form-input__items'>
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
										Войти
									</button>
								</div>
							</div>
							<div onClick={() => setShowModal(false)} className='form-cross'>
								<img className='form-cross__img' src={crossIcon} alt='' />
							</div>
						</form>
						<div className='register-auth'>
							<div className=''>
								<p className=''>Не зарегистрированы ?</p>
							</div>
							<div className=''>
								<button
									onClick={() => {
										goToNavigate(), setShowModal(false)
									}}
									className='register-button'
								>
									Зарегистрироваться
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		)
}