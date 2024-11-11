import { CARDS } from "../../data/data"
import './Card.scss'


const Card = () => {
	return (
		<div className='card-wrapper'>
			{CARDS.map((item, index) => (
			<div className='card' key={index}>
				<div className='card-img'>
				<img className='card-img__inner' src={item.img} alt='' />
			</div>
			<div className='card-title'>
				<h3>{item.title}</h3>
			</div>
			<div className='card-description'>
				<p>{item.description}</p>
			</div>
			<div className='price-button'>
				<div className='card-price'>
					<p>от{item.price}</p>
				</div>
				<div className='card-button'>
					<button className="card-button__inner">Добавить</button>
				</div>
			</div>
			</div>
			))}
		</div>
	)
}
			
export default Card
