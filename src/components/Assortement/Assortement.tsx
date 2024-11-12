import { useState } from 'react'
import arrow from '../../assets/img/arrow.svg'
import './Assortement.scss'

const AssortementNav = [
	{ id: 1, name: 'Все' },
	{ id: 2, name: 'Колонки' },
	{ id: 3, name: 'Отопление' },
	{ id: 4, name: 'Сушилки' },
	{ id: 5, name: 'Ещё', img: arrow },
]

export const Assortement = () => {

	// const [drop, setDrop] = useState('drop-list-0')

	// const handleDrop = () => {
	// 	setDrop(true)
	// }

	const [select, setSelect] = useState<string>("Все");

	const handleSelect = (name: string) => {
		setSelect(name);
	}

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
								onClick={() => handleSelect(item.name)}
							>
								<button className='assort-button'>
									{item.name}
									<img className='arrow' src={item.img} alt='' />
								</button>
							</li>
						))}
					</ul>
				</nav>
				<div className="drop-down">
					<ul className="drop-list">
						<li className="drop-list__item">
							Видеоглазок 
						</li>
						<li className="drop-list__item">
							Камера 
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}





