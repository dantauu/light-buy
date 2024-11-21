import plusIcon from '../../../../assets/img/plus.svg'
import { useNavigate } from 'react-router-dom'
import { FC } from 'react'
import './CardElement.scss'


type ItemCardProps = {
	id: number,
	title: string,
	description: string,
	img: string,
	price: number,
}

export const CardElement: FC<ItemCardProps> =
 ({ id, title, img, description, price }) => {
	const navigate = useNavigate()
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
				<div className='card-button'>
					<div className='card-button__img'>
						<img src={plusIcon} alt='' />
					</div>
					<div className='wrapper-card__button'>
						<button className='card-button__inner'>Добавить</button>
					</div>
				</div>
			</div>
		</div>
	)
}



