import { useContext, useEffect } from 'react'
import crossIcon from '../../../public/assets/img/cross.svg' 
import { ModalContext } from '../../app/App'
import { FormElement } from '../FormElement/FormElement'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AuthParams, fetchAuth, selectIsAuth } from '../../redux/slices/authSlice'
import { AppDispatch } from '../../redux/store'
import './Modal.scss'
import { PayloadAction } from '@reduxjs/toolkit'

export const Modal = ({ modalRef }: any) => {
	const dispatch = useDispatch<AppDispatch>()
	const { register, handleSubmit, formState: {errors, isValid} } = useForm({
		defaultValues: {
			email: 'dantau@gmail.com',
			password: '99999'
		},
		mode: "onChange"
	})
	//Проверка на наличие токена и сохранение его в localstorage
	const onSubmit = async (values: any) => {
		const userData = { user: { email: values.email, password: values.password } }
		const takeDataUser = await dispatch(fetchAuth(userData)) as PayloadAction<AuthParams>

		if (!takeDataUser.payload) {
			alert('Are you vvel nepravelno ?')
		}
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
					</div>
				</div>
			</>
		)
}