import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../../redux/slices/cardSlice'
import { FC } from 'react'
import checkIcon from '../../../assets/img/check.svg'
import plusIcon from '../../../assets/img/plus.svg'
import { useNavigate } from 'react-router-dom'
import './CardElement.scss'

type ItemCardProps = {
	id: number
	title: string
	description: string
	img: string
	price: number
}

interface CardItem {
	id: number
	title: string
	price: number
	img: string
	count: number
}

export const CardElement: FC<ItemCardProps> = ({
	id,
	title,
	img,
	description,
	price,
}) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()


	const cardItem = useSelector((state: { card: { items: CardItem[] } }) =>
		state.card.items.find((obj: { id: number }) => obj.id === id)
	)

	const onClickAddBasket = () => {
		const item: CardItem = {
			id,
			title,
			img,
			price,
			count: 1,
		}
		dispatch(addItem(item))
	}

	return (
		<div className='card'>
			<div onClick={() => navigate(`/more-card/${id}`)} className='card-img'>
				<img
					className={`card-img__inner 
					${id === 7 && 'modify'}
					${id === 5 && 'modify-pad'}`}
					src={img}
					alt=''
				/>
			</div>
			<div className='card-title'>
				<h3>{title}</h3>
			</div>
			<div className='card-description'>
				<p>{description}</p>
			</div>
			<div className='price-button'>
				<div className='card-price'>
					<p>{price} р</p>
				</div>
				<div onClick={onClickAddBasket} className='card-button'>
					<div className='card-button__img'>
						{cardItem ? (
							<img src={checkIcon} alt='' />
						) : (
							<img src={plusIcon} alt='' />
						)}
					</div>
					<div className='wrapper-card__button'>
						<button className='card-button__inner'>
							{cardItem ? 'Добавлено' : 'Добавить'}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
