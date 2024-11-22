import { Filtering } from '../../ComponentsByHome/Filtering/Filtering'
import Card, { CardSecond } from '../Card/Card'
import { Pagination } from '../../ComponentsByHome/Pagination/Pagination'
import './FilteringAndCardPagination.scss'
import { FC, useState } from 'react'
import { CardsServer } from '../../../data/data'

type FilterAndCardProps = {
	searchValue: string
	cardsData: CardsServer[]
	setCardsData: (data: CardsServer[]) => void
}

export const FilterAndCardPagination: FC<FilterAndCardProps> = ({
	searchValue,
	cardsData,
	setCardsData
}) => {
	const [tab, setTab] = useState('card')
	return (
		<>
		<div className="container">
			<div className='home-wrapper'>
				<div className='home-left'>
					<Filtering setCardsData={setCardsData} cardsData={cardsData} />
				</div>
				{tab === 'card' && (
					<div className='home-right'>
						<Card cardsData={cardsData} searchValue={searchValue} />
					</div>
				)}
				{tab === 'second-card' && <CardSecond cardsData={cardsData} />}
			</div>
			<Pagination active={tab} onChange={current => setTab(current)} />
				</div>
		</>
	)
}
