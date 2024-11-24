import { FC } from 'react'
import glass from '../../assets/img/glass.png'

type HeaderProps = {
	searchValue: string
	setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export const Search:FC<HeaderProps> = ({ searchValue, setSearchValue }) => {
	return (
		<label htmlFor='hI'>
			<div className='header-input'>
				<div className='header-input__img'>
					<img src={glass} alt='glass' />
				</div>
				<div className='header-target__input'>
					<input
                        value={searchValue}
                        onChange={event => setSearchValue(event.target.value)}
						placeholder='Поиск товара...'
						id='hI'
						type='text'
						className='header-input__inner'
					/>
				</div>
			</div>
		</label>
	)
}

