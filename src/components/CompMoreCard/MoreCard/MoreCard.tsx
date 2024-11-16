import { MORECARD } from "../../../data/data"
import { Link, useParams } from "react-router-dom"
import logoutIcon from '../../../assets/img/logout.svg'
import './MoreCard.scss'

export const MoreCard = () => {
    const { id } = useParams()
	const card = MORECARD.find(card => card.id === id)

    return (
			<div className='more-wrapper'>
				<div className='container'>
					<Link to='/' className='more-card__logout'>
					  <div className="logout-wrapper">
						<img className='logout-card__img' src={logoutIcon} alt='' />
					  </div>
					  <p className="logout-text">
						Назад
					  </p>
					</Link>
					<div className='more-card__info'>
						<div className='more-card__img'>
							<img
								className={`more-card-img__inner 
								${id === '3' && 'modify-card'}
								${id === '2' && 'modify-padding'}`}
								src={card?.img}
								alt=''
							/>
						</div>
						<div className='more-card__right'>
							<div className='more-card__title'>
								<h2>{card?.title}</h2>
							</div>
							<div className='more-card__description'>
								<p>{card?.description}</p>
							</div>
							<div className='more-card__price'>
								<button className='more-card__btn'>
									Добавить в корзину за {card?.price}р
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}