import { useState } from "react"
import { CARDS } from "../../../data/data"
import plusIcon from '../../../assets/img/plus.svg'
import './Card.scss'
import { useNavigate } from "react-router-dom"

const Card = () => {

const [cardFirst, _] = useState(CARDS)
	const navigate = useNavigate()
	return (
		<div className='card-wrapper'>
			{cardFirst.slice(0, 6).map((item, index) => ( //index < 6 ? ()
			<div className='card' key={index}>
				<div onClick={() => navigate(`/more-card/${item.id}`)} className='card-img'>
				<img className={`card-img__inner 
					${index === 2 ? 'modify' : ''}
					${index === 1 && 'modify-pad'}`} 
					src={item.img} alt='' />
				</div>
			<div className='card-title'>
				<h3>{item.title}</h3>
			</div>
			<div className='card-description'>
				<p>{item.description}</p>
			</div>
			<div className='price-button'>
				<div className='card-price'>
					<p>{item.price} р</p>
				</div>
				<div className='card-button'>
					<div className="card-button__img">
						<img src={plusIcon} alt="" />
					</div>
					<div className="wrapper-card__button">
						<button className="card-button__inner">Добавить</button>
					</div>
				</div>
			</div>
			</div>
			))} {/*:null'*/}
		</div>
	)
}

export default Card

			
export const CardSecond = () => {
	const navigate = useNavigate()
	return (
		<div className='card-wrapper'>
			{CARDS.slice(6, 12).map((item, index) => ( //index < 6 ? ()
			<div className='card' key={index}>
				<div onClick={() => navigate(`/more-card/${item.id}`)} className='card-img'>
				<img className={`card-img__inner 
				${index === 3 && 'modify-fix'}
				${index === 4 && 'modify-next-fix'}`} 
				src={item.img} alt='' />
			</div>
			<div className='card-title'>
				<h3>{item.title}</h3>
			</div>
			<div className='card-description'>
				<p>{item.description}</p>
			</div>
			<div className='price-button'>
				<div className='card-price'>
					<p>{item.price} р</p>
				</div>
				<div className='card-button'>
					<div className="card-button__img">
						<img src={plusIcon} alt="" />
					</div>
					<div className="wrapper-card__button">
						<button className="card-button__inner">Добавить</button>
					</div>
				</div>
			</div>
			</div>
			))} {/*:null'*/}
		</div>
	)
}
