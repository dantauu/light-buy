import './ModalError.scss'

interface ModalProps {
	message: string
	onClose: () => void
}

const ModalError = ({ message, onClose }: ModalProps) => {
	return (
		<div className='modal-overlay'>
			<div className='modal-error'>
				<div className='modal-content-wrapper'>
					<p className='modal-content__inner'>{message}</p>
					<button onClick={onClose} className='modal-close-button'>
						Закрыть
					</button>
				</div>
			</div>
		</div>
	)
}

export default ModalError
