import { createContext, FC, useState } from 'react'
import { Assortement } from '../components/Assortement/Assortement'
import { FilterAndCardPagination } from '../components/FilterAndCardPagination/FilterAndCardPagination'
import { CARDS, CardsServer } from '../data/data'

type HomeProps = {
	// searchValue: string,
}

export const CardContext = createContext(({}))

const Home:FC<HomeProps> = () => {
	const [cardsData, setCardsData] = useState<CardsServer[]>(CARDS)
	return (
		<>
			<CardContext.Provider value={{ cardsData, setCardsData }}>
				<Assortement />
				<FilterAndCardPagination />
			</CardContext.Provider>
		</>
	)
}

export default Home