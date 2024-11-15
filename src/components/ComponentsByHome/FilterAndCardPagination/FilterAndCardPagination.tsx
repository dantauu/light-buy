import { Filtering } from '../../ComponentsByHome/Filtering/Filtering'
import Card, { CardSecond } from '../../ComponentsByHome/Card/Card'
import { Pagination } from '../../ComponentsByHome/Pagination/Pagination'
import './FilteringAndCardPagination.scss'
import { useState } from 'react'

export const FilterAndCardPagination = () => {
	const [tab, setTab] = useState('card')
	return (
		<>
			<div className='home-wrapper'>
				<div className='home-left'>
					<Filtering />
				</div>
				{tab === 'card' && (
					<div className='home-right'>
						<Card />
					</div>
				)}
				{tab === 'second-card' && <CardSecond />}
			</div>
			<Pagination active={tab} onChange={current => setTab(current)} />
		</>
	)
}
