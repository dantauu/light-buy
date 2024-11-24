import { FC, useState } from 'react'
import { Assortement } from '../components/Assortement/Assortement'
import { FilterAndCardPagination } from '../components/FilterAndCardPagination/FilterAndCardPagination'
import { CARDS, CardsServer } from '../data/data'

type HomeProps = {
	searchValue: string,
}

const Home:FC<HomeProps> = ({ searchValue }) => {
	const [cardsData, setCardsData] = useState<CardsServer[]>(CARDS)
	return (
		<>
			<Assortement setCardsData={(data: CardsServer[]) => setCardsData(data)} />
			<FilterAndCardPagination
				setCardsData={(data: CardsServer[]) => setCardsData(data)}
				cardsData={cardsData}
				searchValue={searchValue}
			/>
		</>
	)
}

export default Home