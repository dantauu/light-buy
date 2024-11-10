import arrow from '../../assets/img/arrow.svg'
import './Assortement.scss'

const AssortementNav = [
	{ id: 1, name: 'Все' },
	{ id: 2, name: 'Колонки' },
	{ id: 3, name: 'Отопление' },
	{ id: 4, name: 'Сушилки' },
	{ id: 5, name: 'Видеоглазок' },
	{ id: 6, name: 'Камеры' },
	{ id: 7, name: 'Ещё', img: arrow },
]
export const Assortement = () => {
	return (
		<div className='assort-wrapper'>
			<div className='container'>
				<nav className='assort-nav'>
					<h2 className='assort-title'>Ассортимент</h2>
					<ul className='assort-list'>
						{AssortementNav.map((item, index) => (
							<li className='assort-list__item' key={index}>
								<button className='assort-button'>
									{item.name}
									<img className='arrow' src={item.img} alt='' />
								</button>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	)
}





