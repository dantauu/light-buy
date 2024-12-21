import { useContext } from 'react'
import crossIcon from '../../../public/assets/img/cross.svg' 
import { ModalContext } from '../../app/App'
// import { CSSTransition } from 'react-transition-group'
import './Modal.scss'

export const Modal = () => {
    const { setShowModal } = useContext(ModalContext)
    return (
			<>
					<div className='modal'>
						<div className='modal-wrapper'>
							<form action='' className='form'>
								<div className='form-title'>
									<h1 className='form-title__inner'>Войти</h1>
								</div>
								<div className='form-input__items'>
									<div className='modal-content__login'>
										<input type='text' className='modal-login' />
									</div>
									<div className='modal-content__password'>
										<input type='password' className='modal-login' />
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