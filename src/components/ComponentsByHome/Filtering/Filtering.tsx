import { FC } from "react"
import { Checkbox } from "../../shared/Checkbox"
import plus from '../../../assets/img/plus.svg'
import rubleIcon from '../../../assets/img/ruble.png'
import './Filtering.scss'

type FilterItemProps = {
    text: string,
}

type FilterInputItem = {
	text: string,
} 

const FilterItem: FC<FilterItemProps> = ({ text }) => {
    return (
			<>
				<label htmlFor='con'>
					<div className='after-filter'>
						<div className='after-filter__discount'>
							<Checkbox />
						</div>
						<div className='after-filter__text'>
							<p className='filter-discount__inner' id='con'>
								{text}
							</p>
						</div>
					</div>
				</label>
			</>
		)
}

const FilterInputItem: FC<FilterItemProps> = ({ text }) => {
	return (
		<label htmlFor='connect'>
			<div className='price-input__from'>
				<div className='price-wrapper__from'>
					<input className='input-from__inner' placeholder={text} type='number' id='connect' />
				</div>
				<div className='price-ruble'>
					<img src={rubleIcon} alt='' />
				</div>
			</div>
		</label>
	)
}



export const Filtering = () => {
    return (
			<div className='filter-main__wrapper'>
				<div className='container'>
					<h2 className='filter-title'>Фильтрация</h2>
					<FilterItem text='Со скидкой' />
					<FilterItem text='Новинки' />
					<div className='price-wrapper'>
						<h2 className='price-wrapper__text'>Цена от и до</h2>
						<div className='price-input__wrapper'>
							<FilterInputItem text='От' />
							<FilterInputItem text='До' />
						</div>
					</div>
					<div className='before-filter'>
						<h2 className='before-filter__title'>Для</h2>
						<div className='before-filter__wrapper'>
							<FilterItem text='Кухни' />
							<FilterItem text='Уборной' />
							<FilterItem text='Гостинной' />
							<FilterItem text='Коридора' />
							<FilterItem text='Детской' />
							<FilterItem text='Спальной' />
						</div>
					</div>
					<label htmlFor='plus'>
						<div className='open-full_wrapper'>
							<div className='open-full__img'>
								<img className='open-full-img__inner' src={plus} alt='' />
							</div>
							<div className='open-full__text' id="plus">
								<p className='open-full__inner'>Показать всё</p>
							</div>
						</div>
					</label>
					<div className='apply'>
						<button className='apply-button'>Применить</button>
					</div>
				</div>
			</div>
		)
}