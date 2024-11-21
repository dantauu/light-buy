import { FC, useState } from 'react'
import { Assortement } from '../../components/ComponentsByHome/Assortement/Assortement'
import { FilterAndCardPagination } from '../../components/ComponentsByHome/FilterAndCardPagination/FilterAndCardPagination'
import { CARDS, CardsServer } from '../../data/data'

type HomeProps = {
	searchValue: string,
}

const Home:FC<HomeProps> = ({ searchValue }) => {
	const [cardsData, setCardsData] = useState<CardsServer[]>(CARDS)
	return (
		<>
			<Assortement
				setCardsData={(data: CardsServer[]) => setCardsData(data)}
			/>
			<FilterAndCardPagination
				cardsData={cardsData}
				searchValue={searchValue}
			/>
		</>
	)
}

export default Home