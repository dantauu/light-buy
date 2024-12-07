import { createContext, useState } from 'react'
import { Assortement } from '../components/Assortement/Assortement'
import { FilterAndCardPagination } from '../components/FilterAndCardPagination/FilterAndCardPagination'
import { CARDS, CardsServer } from '../data/data'

interface CardContextProps {
	cardsData: CardsServer[],
	setCardsData: React.Dispatch<React.SetStateAction<CardsServer[]>>
}

const ContextValue: CardContextProps = {
	cardsData: CARDS,
	setCardsData: () => {}
}

export const CardContext = createContext<CardContextProps>((ContextValue))

const Home = () => {
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