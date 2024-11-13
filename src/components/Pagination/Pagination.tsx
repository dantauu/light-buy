import arrowLeftIcon from '../../assets/img/arrow-left.svg'
import arrowRightIcon from '../../assets/img/arrow-right.svg'
import './Pagination.scss'

type PaginationPagesProps = {
    num: number,
}

const PaginationPagesBtn = ({ num }: PaginationPagesProps) => {
	return (
        <div className='pagination-one'>
		    <button className='pagination-btn'>{num}</button>
	    </div>
    )
}

export const Pagination = () => {
    return (
			<div className='container'>
				<div className='pagination'>
					<button className='arrow-pagitanion'>
						<img className='pagination-left' src={arrowLeftIcon} alt='' />
					</button>
					<PaginationPagesBtn num={1} />
					<PaginationPagesBtn num={2} />
					<button className='arrow-pagitanion'>
						<img src={arrowRightIcon} alt='' className='pagination-right' />
					</button>
				</div>
			</div>
		)
}
