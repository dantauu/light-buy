import { useContext } from 'react'
import glass from '../../assets/img/glass.png'
import { SearchContext } from '../../app/App'


export const Search = () => {
	const { searchValue, setSearchValue }: any = useContext(SearchContext)	
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
						placeholder='Найти на LightBuy...'
						id='hI'
						type='text'
						className='header-input__inner'
					/>
				</div>
			</div>
		</label>
	)
}

