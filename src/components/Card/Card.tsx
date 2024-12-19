import { useContext } from "react"
import { CardElement } from './CardElement/CardElement'
import { SearchContext } from "../../app/App"
import { useSelector } from "react-redux"
import { Loading } from "../loading/Loading"
import { RootState } from "../../redux/store"
import { CardData } from "../../app/types/global"



export const Card = () => {
	const { searchValue }: any = useContext(SearchContext)
	// const { cardsData }: CardProps = useContext(CardContext)
  	const { data: cardsData, loading } = useSelector((state: any) => state.renderCard)
	if (loading) {
		return (
			<Loading />
		)
	}
	const cardses = cardsData.filter((obj: { title: string }) => {
		if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
			return true
		}
		return false
	})
		.slice(0, 6)
		.map((card: CardData, id: number) => (
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

// interface CardSecondProps {
// 	cardsData: CardsServer[]
// }

export const CardSecond = () => {
  	const { data: cardsData, loading } = useSelector( 
		(state: RootState) => state.renderCard
	)
	if (loading) {
		return (
			<Loading />
		)
	}
	return (
		<div className='card-wrapper'>
			{cardsData.slice(6, 12).map((card: CardData, id: number) => (
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

