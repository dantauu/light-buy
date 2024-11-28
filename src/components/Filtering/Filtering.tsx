import { FC, useState } from "react"
import plus from '../../assets/img/plus.svg'
import minus from '../../assets/img/minus.svg'
import rubleIcon from '../../assets/img/ruble.png'
import './Filtering.scss'
import { CARDS, CardsServer } from "../../data/data"

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
	onClick: () => void
	name: string
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
		{ id: 1, name: 'Кухни' },
		{ id: 2, name: 'Уборной' },
		{ id: 3, name: 'Гостинной' },
		{ id: 4, name: 'Коридора' },
	]

export const Filtering: FC<FilteringProps> = ({  setCardsData }) => {
	const [select, setSelect] = useState('')
	 	const handleSelect = (name: string) => {
	 		setSelect(name)
		}

	const changeCategorys = (name: string) => {
		const filtered = CARDS.filter(card => card.filter === name)
		setCardsData(filtered)
		}

	//MENU
	const [isActive, setIsActive] = useState<boolean>(false)
	const onClickMenu = () => {
		setIsActive(!isActive)
	} 
	const [activity, setActivity] = useState<boolean>(false)
	const onClickOpenFull = () => {
		setActivity(!activity)
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
							<div
								id={item.name}
								key={index}
								onClick={() => {
									changeCategorys(item.name), handleSelect(item.name)
								}}
								className={`after-filter ${select === item.name && 'selected'}`}
							>
								<div className='after-filter__text'>
								  <p className='filter-discount__inner'>{item.name}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<ul className={`filter-drop ${isActive ? 'active' : ''}`}>
					<li
						onClick={() => {
							changeCategorys('Детской'),
							 handleSelect('Детской')
						}}
						className={`filter-drop__item 
							${select === 'Детской' ? 'selected' : ''}`}
					>
						<button className={`drop-item__inner ${select === 'Детской' ? 'selected' : ''}`}>Детской</button>
					</li>
					<li
						onClick={() => {
							changeCategorys('Спальной'),
							handleSelect('Спальной')
						}}
						className={`filter-drop__item ${select === 'Спальной' ? 'selected' : ''}`}
					>
						<button className={`drop-item__inner ${select === 'Спальной' ? 'selected' : ''}`}>Спальной</button>
					</li>
				</ul>
				<div style={{position: 'relative'}} className="">
				<label htmlFor='plus'>
					<div onClick={() => {onClickMenu(), onClickOpenFull()}} className={`open-full_wrapper 
						${activity ? 'activity' : ''}`}>
						<div className='open-full__img'>
							<img className='open-full-img__inner' src={!activity ? plus : minus} alt='' />
						</div>
						<div className='open-full__text' id='plus'>
							<p className='open-full__inner'>{activity ? 'Скрыть' : 'Показать все'}</p>
						</div>
					</div>
				</label>
				</div>
			</div>
		</div>
	)
}