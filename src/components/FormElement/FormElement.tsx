import '../Modal/Modal.scss'

interface FormElementProps {
    placeholder: string
    type: string
}

export const FormElement = ({ placeholder, type }: FormElementProps) => {
	return (
		<div className='modal-content__login'>
			<input placeholder={placeholder} type={type} className='modal-login' />
		</div>
	)
}