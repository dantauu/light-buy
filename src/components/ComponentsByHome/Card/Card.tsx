import { CardsServer } from "../../../data/data"
import { FC } from "react"
import { CardElement } from './CardElement/CardElement'


type CardProps = {
	searchValue: string
	cardsData: CardsServer[]
}

export const Card: FC<CardProps> = ({ searchValue, cardsData }) => {
	const cardses = cardsData.filter(obj => {
		if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
			return true
		}
		return false
	})
		.slice(0, 6)
		.map((card, id) => (
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
		<div className='card-wrapper'>
			{cardses} {/* ...card */}
		</div>
	)
}
export default Card

interface CardSecondProps {
	cardsData: CardsServer[]
}

export const CardSecond: FC<CardSecondProps> = ({ cardsData }) => {
	return (
		<div className='card-wrapper'>
			{cardsData.slice(6, 12).map((card, id) => (
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

