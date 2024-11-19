import { Filtering } from '../../ComponentsByHome/Filtering/Filtering'
import Card, { CardSecond } from '../Card/Card'
import { Pagination } from '../../ComponentsByHome/Pagination/Pagination'
import './FilteringAndCardPagination.scss'
import { FC, useState } from 'react'

type FilterAndCardProps = {
	searchValue: string
}

export const FilterAndCardPagination:FC<FilterAndCardProps> = ({ searchValue }) => {
	const [tab, setTab] = useState('card')
	return (
		<>
			<div className='home-wrapper'>
				<div className='home-left'>
					<Filtering />
				</div>
				{tab === 'card' && (
					<div className='home-right'>
						<Card searchValue={searchValue} />
					</div>
				)}
				{tab === 'second-card' && <CardSecond />}
			</div>
			<Pagination active={tab} onChange={current => setTab(current)} />
		</>
	)
}
