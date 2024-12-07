import { CardsServer } from "../../data/data"
import { useContext } from "react"
import { CardElement } from './CardElement/CardElement'
import { SearchContext } from "../../app/App"
import { CardContext } from "../../pages/Home"


type CardProps = {
	cardsData: CardsServer[]
}

export const Card = () => {
	const { searchValue }: any = useContext(SearchContext)
	const { cardsData }: CardProps = useContext(CardContext)

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


export const CardSecond = () => {
	const { cardsData } = useContext(CardContext)
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

