import { useContext, useEffect, useRef, useState } from 'react'
import { CardContext } from '../../pages/Home'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setCategory } from '../../redux/slices/assortSlice'
import { setRenderData } from '../../redux/slices/renderCardSlice'
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
	const dispatch = useDispatch()
	const { cardsData } = useContext(CardContext)
	const { selectedCategory } = useSelector((state: RootState) => state.assort)
	const [select, setSelect] = useState<string>(selectedCategory)

	useEffect(() => {
		setSelect(selectedCategory)
	}, [selectedCategory])

	const handleSelect = (name: string) => {
		dispatch(setCategory(name))
		setSelect(name) 
		const filteredData = name === 'Все' ? cardsData : cardsData.filter((card: { category: string }) => 
			card.category === name)
		dispatch(setRenderData(filteredData)) // засунуть в Redux
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
									}}
								>
									<button className='assort-button'>{item.name}</button>
								</li>
							))}
							{More.map((item, id) => (
								<button
									key={id}
									onClick={() => {
										setSelect(item.name)
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
										strokeWidth='2.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
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
											handleSelect('Видеоглазок')
											toggleMenu()
										}}
										className={`drop-list__btn 
										${select === 'Видеоглазок' && 'select-drop'}`}
									>
										Видеоглазок
									</button>
								</li>
								<li className='drop-list__item'>
									<button
										onClick={() => {
											handleSelect('Камера')
											toggleMenu()
										}}
										className={`drop-list__btn 
											${select === 'Камера' && 'select-drop'}`}
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





