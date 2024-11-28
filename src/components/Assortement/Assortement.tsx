import { FC, useContext, useRef, useState } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import arrow from '../../assets/img/arrow.svg'
import './Assortement.scss'
import { CARDS } from '../../data/data'
import { CardContext } from '../../pages/Home'

const AssortementNav = [
	{ id: 1, name: 'Все' },
	{ id: 2, name: 'Колонки' },
	{ id: 3, name: 'Отопление' },
	{ id: 4, name: 'Сушилки' },
]

const More = [
	{ name: 'Ещё' }
]

interface CategoryProps {
	// setCardsData: (data: CardsServer[]) => void
}

export const Assortement: FC<CategoryProps> = () => {
	const { setCardsData }: any = useContext(CardContext)
	
	const [select, setSelect] = useState<string>('Все')

	const handleSelect = (name: string) => {
		setSelect(name)
	}

	const changeCategory = (name: string) => {
		if (name === 'Все') {
			setCardsData(CARDS)
		} else {
			const filtered = CARDS.filter(card => card.category === name)
			setCardsData(filtered)
		}
	}

	//--Popup menu
	const [isActive, setIsActive] = useState<boolean>(false)

	const dropDownRef = useRef(null)

	const handleClickOutside = () => {
		setIsActive(false)
	}

	const onClick = () => {
		setIsActive(!isActive)
	}

	useClickOutside(dropDownRef, handleClickOutside)
	//--

	return (
		<div className='assort-wrapper'>
			<div className='container'>
				<nav className='assort-nav'>
					<h2 className='assort-title'>Ассортимент</h2>
					<ul className='assort-list'>
						{AssortementNav.map((item, index) => (
							<li
								className={`assort-list__item 
									${select === item.name ? 'select' : ''}`}
								key={index}
								onClick={() => {
									handleSelect(item.name)
									changeCategory(item.name)
								}}
							>
								<button className='assort-button'>{item.name}</button>
							</li>
						))}
						{More.map((item, id) => (
							<button
								key={id}
								onClick={() => {
									handleSelect(item.name), onClick()
								}}
								className={`assort-button 
								${select === item.name ? 'selected' : ''}`}
							>
								Ещё
								<img className='arrow' src={arrow} alt='' />
							</button>
						))}
					</ul>
				</nav>
				<div className='drop-wrapper'>
					<div
						ref={dropDownRef}
						className={`drop-down ${isActive ? 'active' : ''}`}
					>
						<ul className='drop-list'>
							<li className='drop-list__item'>
								<button
									onClick={() => changeCategory('Видеоглазок')}
									className='drop-list__btn'
								>
									Видеоглазок
								</button>
							</li>
							<li className='drop-list__item'>
								<button
									onClick={() => changeCategory('Камера')}
									className='drop-list__btn'
								>
									Камера
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}





