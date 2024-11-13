import { useState } from "react"
import { CARDS } from "../../data/data"
import loadingIcon from '../../assets/img/loading.png'
import './Card.scss'

type loading = {
	loading: symbol,
}

const Card = ({loading}: loading) => {

const [items, _] = useState(CARDS)
	if (loading) {
		return (
			<img src={loadingIcon} alt="" />
		)
	} else
	return (
		<div className='card-wrapper'>
			{items.map((item, index) => ( //index < 6 ? ()
			<div className='card' key={index}>
				<div className='card-img'>
				<img className={`card-img__inner ${index === 2 ? 'modify' : ''}`} src={item.img} alt='' />
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
			))} {':null'}
		</div>
	)
}
			
export default Card
