import { FC } from "react"
import './Card.scss'


type CardProps = {
		title?: string,
		description?: string,
		price?: number,
		img: string,
}

const Card: FC<CardProps> = ({ title, description, price, img }) => {
	return (
		<div className='card-wrapper'>
			<div className='card-img'>
				<img src={img} alt='' />
			</div>
			<div className='card-title'>
				<h3>{title}</h3>
			</div>
			<div className='card-description'>
				<p>{description}</p>
			</div>
			<div className='price-button'>
				<div className='card-price'>
					<p>от{price}</p>
				</div>
				<div className='card-button'>
					<button className="card-button__inner">Добавить</button>
				</div>
			</div>
		</div>
	)
}

export default Card
