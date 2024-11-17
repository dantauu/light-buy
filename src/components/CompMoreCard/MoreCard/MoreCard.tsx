import { MORECARD } from "../../../data/data"
import { Link, useParams } from "react-router-dom"
import logoutIcon from '../../../assets/img/logout.svg'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import './MoreCard.scss'
import 'swiper/css'
import 'swiper/css/pagination' 


export const MoreCard = () => {
    const { id } = useParams()
	const card = MORECARD.find(card => card.id === id)
	//Slider
	const pagination = {
		clickable: true,
		renderBullet: function (index:number, className:string) {
			return '<span class="' + className + '">' + (index + 1) + '</span>'
		},
	}

    return (
			<div className='more-wrapper'>
				<div className='container'>
					<Link to='/' className='more-card__logout'>
						<div className='logout-wrapper'>
							<img className='logout-card__img' src={logoutIcon} alt='' />
						</div>
						<p className='logout-text'>Назад</p>
					</Link>
					<div className='more-card__info'>
						<div className='more-card__img'>
							<Swiper
								pagination={pagination}
								modules={[Pagination]}
								className='mySwiper'
							>
								<SwiperSlide>
									<img
										className={`more-card-img__inner 
										${id === '3' && 'modify-card'}
										${id === '2' && 'modify-padding'}`}
										src={card?.img}
										alt=''
									/>
								</SwiperSlide>
								<SwiperSlide>
									<img src={card?.imgTwo} alt='' />
								</SwiperSlide>
							</Swiper>
						</div>
						<div className='more-card__midle'>
							<div className='more-card__title'>
								<h2>{card?.title}</h2>
							</div>
							<div className='more-card__description'>
								<p>{card?.description}</p>
							</div>
						</div>
						<div className='more-card__right'>
							<div className='more-card__price'>
								<h3 className='more-card-price__inner'>
									{card?.price}р
								</h3>
							</div>
							<div className='more-card__btn'>
								<button className='more-card-btn__inner'>
									Добавить в корзину за
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}