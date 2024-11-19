import { FC } from 'react'
import { Assortement } from '../../components/ComponentsByHome/Assortement/Assortement'
import { FilterAndCardPagination } from '../../components/ComponentsByHome/FilterAndCardPagination/FilterAndCardPagination'

type HomeProps = {
	searchValue: string,
}

const Home:FC<HomeProps> = ({ searchValue }) => {
	return (
		<>
			<Assortement />
			<FilterAndCardPagination searchValue={searchValue} />
		</>
	)
}

export default Home