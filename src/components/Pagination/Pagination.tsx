import arrowLeftIcon from '../../../public/assets/img/arrow-left.svg'
import arrowRightIcon from '../../../public/assets/img/arrow-right.svg'
import './Pagination.scss'

type PaginationPagesProps = {
	num: number
	isActive: boolean
	onClick: () => void
}

type PaginationProps = {
	totalPages: number 
	currentPage: number 
	onChange: (pageNumber: number) => void 
}

const PaginationPagesBtn = ({ num, onClick, isActive, }: PaginationPagesProps) => {
	return (
		<div className={`pagination-one ${isActive && 'color'}`} onClick={onClick}>
			<button className='pagination-btn'>{num}</button>
		</div>
	)
}

export const Pagination = ({ totalPages, currentPage, onChange }: PaginationProps) => {
	const handlePageChange = (pageNumber: number) => {
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			onChange(pageNumber)
		}
	}

	const handleArrowClick = (direction: 'left' | 'right') => {
		let newPage = currentPage
		if (direction === 'right') {
			newPage++
		} else {
			newPage--
		}
		handlePageChange(newPage)
	}

	const renderPageButtons = () => {
		const buttons = []
		for (let i = 1; i <= totalPages; i++) {
			buttons.push(
				<PaginationPagesBtn
					key={i}
					isActive={currentPage === i}
					onClick={() => handlePageChange(i)}
					num={i}
				/>
			)
		}
		return buttons
	}

	return (
		<div className='container'>
			<div className='pagination'>
				<button
					onClick={() => handleArrowClick('left')}
					className='arrow-pagitanion'
					disabled={currentPage === 1}
				>
					<img className='pagination-left' src={arrowLeftIcon} alt='' />
				</button>
				{renderPageButtons()}
				<button
					onClick={() => handleArrowClick('right')}
					className='arrow-pagitanion'
					disabled={currentPage === totalPages}
				>
					<img src={arrowRightIcon} alt='' className='pagination-right' />
				</button>
			</div>
		</div>
	)
}
