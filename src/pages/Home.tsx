import { createContext, useState } from 'react'
import { Assortement } from '../components/Assortement/Assortement'
import { FilterAndCardPagination } from '../components/FilterAndCardPagination/FilterAndCardPagination'
import { CardsServer } from '../data/data'
import { useGetCardsQuery } from '../redux/api/api'

interface CardContextProps {
	cardsData: CardsServer[],
	setCardsData: React.Dispatch<React.SetStateAction<CardsServer[]>>
}

const ContextValue: CardContextProps = {
	cardsData: [],
	setCardsData: () => {}
}

export const CardContext = createContext<CardContextProps>((ContextValue))

const Home = () => {
	const {  error } = useGetCardsQuery()
	const [cardsData, setCardsData] = useState<CardsServer[]>([])

	if(error) {
		return <div className="">ОШИБКА !!</div>
	}

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