import './Pagination.scss'

type PaginationPagesProps = {
	num: number
	isActive: boolean
	onClick: () => void;
}

type PaginationProps = {
	active: string
	onChange: (tag: string) => void
}

const PaginationPagesBtn = ({ num, onClick, isActive }: PaginationPagesProps) => {
	return (
		<div className={`pagination-one ${isActive && 'color'}`} onClick={onClick}>
			<button  className='pagination-btn'>{num}</button>
		</div>
	)
}

export const Pagination = ({ active, onChange }: PaginationProps) => {
    return (
			<div className='container'>
				<div className='pagination'>
					<PaginationPagesBtn
						isActive={active === 'card'}
						onClick={() => onChange('card')}
						num={1}
					/>
					<PaginationPagesBtn
						isActive={active === 'second-card'}
						onClick={() => onChange('second-card')}
						num={2}
					/>
					<PaginationPagesBtn
						isActive={active === ''}
						onClick={() => onChange('')}
						num={3}
					/>
				</div>
			</div>
		)
		{/*window.scrollTo()*/}
}
