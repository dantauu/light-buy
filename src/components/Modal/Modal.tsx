import { useContext } from 'react'
import crossIcon from '../../../public/assets/img/cross.svg' 
import { ModalContext } from '../../app/App'
import { FormElement } from '../FormElement/FormElement'
import './Modal.scss'

export const Modal = ({ modalRef }: any) => {
    const { setShowModal } = useContext(ModalContext)
    return (
			<>
				<div ref={modalRef} className='modal'>
					<div className='modal-wrapper'>
						<form action='' className='form'>
							<div className='form-title'>
								<h1 className='form-title__inner'>Вход</h1>
							</div>
							<div className='form-input__items'>
								<FormElement placeholder='' type='text' />
								<FormElement placeholder='' type='text' />
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