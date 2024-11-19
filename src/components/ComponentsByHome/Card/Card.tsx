import { CARDS } from "../../../data/data"
import { FC } from "react"
import { CardElement } from './CardElement/CardElement'


type CardProps = {
	searchValue: string,
}

export const Card:FC<CardProps> = ({ searchValue }) => {
	
	const cardses = CARDS.filter(obj => {
		if(obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
			return true
		}
		return false
	}).slice(0, 6).map((card, id) => (
		<CardElement
			title={card.title}
			description={card.description}
			id={card.id}
			price={card.price}
			img={card.img}
			key={id}
		/>
	))
	return (
		<div className="card-wrapper">
			{cardses} {/* ...card */} 
		</div>
	)
}
export default Card

export const CardSecond = () => {
	return (
		<div className="card-wrapper">
		{CARDS.slice(6, 12).map((card, id) => (
		<CardElement
			title={card.title}
			description={card.description}
			id={card.id}
			price={card.price}
			img={card.img}
			key={id}
			/>
		))}
	</div>
	)
}

