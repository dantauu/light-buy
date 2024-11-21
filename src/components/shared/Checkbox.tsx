import './Checkbox.scss'

export const Checkbox = () => {
    return (
			<>
				<label className='check'>
					<input type='checkbox'/>
					<div className='checkmark'></div>
				</label>
			</>
		)
}