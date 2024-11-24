import arrowLeftIcon from '../../assets/img/arrow-left.svg'
import arrowRightIcon from '../../assets/img/arrow-right.svg'
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
					<button className='arrow-pagitanion'>
						<img className='pagination-left' src={arrowLeftIcon} alt='' />
					</button>
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
					<button className='arrow-pagitanion'>
						<img src={arrowRightIcon} alt='' className='pagination-right' />
					</button>
				</div>
			</div>
		)
		{/*window.scrollTo()*/}
}
