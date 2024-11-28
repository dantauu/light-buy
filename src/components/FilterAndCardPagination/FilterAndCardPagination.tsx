import { Filtering } from '../Filtering/Filtering'
import Card, { CardSecond } from '../Card/Card'
import { Pagination } from '../Pagination/Pagination'
import './FilteringAndCardPagination.scss'
import { FC, useContext, useState } from 'react'
import { CardContext } from '../../pages/Home'

type FilterAndCardProps = {
	// searchValue: string
	// cardsData: CardsServer[]
	// setCardsData: (data: CardsServer[]) => void
}

export const FilterAndCardPagination: FC<FilterAndCardProps> = () => {
	const { cardsData, setCardsData }: any = useContext(CardContext)

	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = 3 

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber)
		console.log('Current page:', pageNumber)
	}

	return (
		<>
			<div className='container'>
				<div className='home-wrapper'>
					<div className='home-left'>
						<Filtering setCardsData={setCardsData} cardsData={cardsData} onClick={function (): void {} } name={''} />
					</div>
					<div className='home-right'>
						{currentPage === 1 && (
							<Card cardsData={cardsData} />
						)}
						{currentPage === 2 && <CardSecond cardsData={cardsData} />}
					</div>
				</div>
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					onChange={handlePageChange}
				/>
			</div>
		</>
	)
}
