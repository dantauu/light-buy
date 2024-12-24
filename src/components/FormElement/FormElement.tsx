import { forwardRef } from 'react'
import '../Modal/Modal.scss'

interface FormElementProps {
    placeholder: string
    type: string
	error: boolean,
	helpertext: any
	name: string
}

export const FormElement = forwardRef<HTMLInputElement, FormElementProps>(
	({ placeholder, type, error, helpertext, name, ...props }: FormElementProps, ref) => {
	return (
		<div className='modal-content__login'>
			<input 
			placeholder={placeholder} 
			type={type} 
			ref={ref}
			name={name}
			className='modal-login'
			{...props}
			/>
			{error && <span className='login-error'>{helpertext}</span>}
		</div>
	)
  }
)