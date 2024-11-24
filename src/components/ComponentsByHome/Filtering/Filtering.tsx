import { FC } from "react"
import { Checkbox } from "../../shared/Checkbox"
import plus from '../../../assets/img/plus.svg'
import rubleIcon from '../../../assets/img/ruble.png'
import './Filtering.scss'
import { CARDS, CardsServer } from "../../../data/data"

type FilterItemProps = {
	text: string
	onClick: (text: string) => void
	id: string
}

type FilterInputItem = {
	text: string,
} 

type FilteringProps = {
	cardsData: CardsServer[]
	setCardsData: (data: CardsServer[]) => void
}

const FilterItem: FC<FilterItemProps> = ({ text, onClick, id }) => {
	return (
		<>
			<label htmlFor={id}>
				<div className='after-filter'>
				 <div className='after-filter__discount' 
				 onClick={() => onClick(text)}>
						<Checkbox id={id} />
					</div>
					<div className='after-filter__text'>
						<p className='filter-discount__inner' id={id}>
							{text}
						</p>
					</div>
				</div>
			</label>
		</>
	)
}

const FilterInputItem: FC<FilterItemProps> = ({ text, id }) => {
	return (
		<label htmlFor={id}>
			<div className='price-input__from'>
				<div className='price-wrapper__from'>
					<input className='input-from__inner' placeholder={text} type='number' id={id} />
				</div>
				<div className='price-ruble'>
					<img src={rubleIcon} alt='' />
				</div>
			</div>
		</label>
	)
}

	const FilterItems = [
		{ name: 'Кухни' },
		{ id: 2, name: 'Уборной' },
		{ id: 3, name: 'Гостинной' },
		{ id: 4, name: 'Коридора' },
		{ id: 5, name: 'Детской' },
		{ id: 6, name: 'Спальной' },
	]

export const Filtering: FC<FilteringProps> = ({ setCardsData }) => {
	const changeCategorys = (name: string) => {

		console.log(name)
		const filtered = CARDS.filter(card => card.filter === name)
		setCardsData(filtered)
	}
	return (
		<div className='filter-main__wrapper'>
			<div className='container'>
				<h2 className='filter-title'>Фильтрация</h2>
				<div className='price-wrapper'>
					<h2 className='price-wrapper__text'>Цена от и до</h2>
					<div className='price-input__wrapper'>
						<FilterInputItem text='От' onClick={() => {}} id={'от'} />
						<FilterInputItem onClick={() => {}} text='До' id={'до'} />
					</div>
				</div>
				<div className='before-filter'>
					<h2 className='before-filter__title'>Для</h2>
					<div className='before-filter__wrapper'>
						{FilterItems.map((item, index) => (
							<FilterItem
								key={index}
								id={item.name}
								text={item.name}
								onClick={() => {
									changeCategorys(item.name)
								}}
							/>
						))}
					</div>
				</div>
				<label htmlFor='plus'>
					<div className='open-full_wrapper'>
						<div className='open-full__img'>
							<img className='open-full-img__inner' src={plus} alt='' />
						</div>
						<div className='open-full__text' id='plus'>
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