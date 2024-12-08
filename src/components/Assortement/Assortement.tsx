import { useContext, useRef, useState } from 'react'
import { CARDS } from '../../data/data'
import { CardContext } from '../../pages/Home'
import { useClickOutside } from '../../hooks/useClickOutside'
import './Assortement.scss'

const AssortementNav = [
	{ id: 1, name: 'Все' },
	{ id: 2, name: 'Колонки' },
	{ id: 3, name: 'Отопление' },
	{ id: 4, name: 'Сушилки' },		
]

const More = [
	{ name: 'Ещё' }
]


export const Assortement = () => {
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
	const [arrowRotated, setArrowRotated] = useState<boolean>(false)

	const dropDownRef = useRef(null)

	const toggleMenu = () => {
		setIsActive(!isActive)
		setArrowRotated(!arrowRotated)
	} 

	// const handleClickOutside = () => {
	// 	setIsActive(false)
	// }

	useClickOutside(dropDownRef, () => {
		if (isActive) setTimeout(() => {setArrowRotated(false), setIsActive(false)}, 130)
	})


	return (
		<div className='assort-wrapper'>
			<div className='container'>
				<h2 className='assort-title'>Ассортимент</h2>
				<div className='mobile-wrapper'>
					<nav className='assort-nav'>
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
										handleSelect(item.name)
										toggleMenu()
									}}
									className={`assort-button more-mobile 
								${select === item.name ? 'selected' : ''}`}
								>
									Ещё
									<svg
										className={`arrow ${arrowRotated ? 'rotated' : ''}`}
										width='11'
										height='18'
										viewBox='0 0 11 18'
										fill='none'
										stroke='currentColor'
										stroke-width='2.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										{/* Стрелка */}
										<path d='M1.99333 15.9819L8.88445 8.95963L1.8325 2.09886' />
									</svg>
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
										onClick={() => {
											changeCategory('Видеоглазок')
											toggleMenu()
										}}
										className='drop-list__btn'
									>
										Видеоглазок
									</button>
								</li>
								<li className='drop-list__item'>
									<button
										onClick={() => {
											changeCategory('Камера')
											toggleMenu()
										}}
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
		</div>
	)
}





