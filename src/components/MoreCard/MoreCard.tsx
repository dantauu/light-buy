import { MORECARD } from "../../data/data"
import { useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react'
import { BackBtn } from "../shared/BackBtn/BackBtn"
import { Pagination } from 'swiper/modules'
import './MoreCard.scss'

type InformationProps = {
	name: string,
	text: string | undefined,
}

export const MoreInformationCard = ({ name, text }:InformationProps) => {
	return (
		<div className='more-card__country'>
			<div className='more-card-country__text'>
				<p>{name}</p>
			</div>
			<div style={{ borderBottom: '1px dotted rgb(203, 203, 203)', width: '230px' }}></div>
			<div className='more-card-country__inner'>
				<h3>{text}</h3>
			</div>
		</div>
	)
}

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
					<BackBtn />
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
										${id === '7' && 'modify-card'}
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
							<MoreInformationCard
								name={'Страна производства'}
								text={card?.country}
							/>
							<MoreInformationCard name={'Цвет'} text={card?.color} />
							<MoreInformationCard
								name={'Год выпуска'}
								text={card?.date.toString()}
							/>
							<MoreInformationCard name='Поддержка AI' text={card?.supportAI} />
							<MoreInformationCard
								name='Управление с телефона'
								text={card?.management}
							/>
							<MoreInformationCard name='Гарантия' text={card?.warranty} />
							<MoreInformationCard
								name='Срок гарантии'
								text={card?.warrantyTerm.toString()}
							/>
							<MoreInformationCard
								name='Ширина'
								text={card?.width.toString()}
							/>
							<MoreInformationCard
								name='Высота'
								text={card?.height.toString()}
							/>
						</div>
						<div className='more-card__right'>
							<div className='more-card__title'>
								<h2>{card?.title}</h2>
							</div>
							<div className='more-card__price'>
								<h3 className='more-card-price__inner'>{card?.price}р</h3>
							</div>
							<div className='more-card__btn'>
								<button className='more-card-btn__inner'>
									Добавить в корзину
								</button>
							</div>
						</div>
					</div>
					<div className='more-card__description'>
						<p>{card?.description}</p>
					</div>
				</div>
			</div>
		)
}