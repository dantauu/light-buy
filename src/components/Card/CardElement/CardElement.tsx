import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../../redux/slices/cardSlice'
import checkIcon from '../../../../public/assets/img/check.svg'
import plusIcon from '../../../../public/assets/img/plus.svg'
import { useNavigate } from 'react-router-dom'
import { selectIsAuth } from '../../../redux/slices/authSlice'
import './CardElement.scss'
import ModalError from '../../ModalError/ModalError'

interface ItemCardProps {
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
  const isAuth = useSelector(selectIsAuth)
  const [ showMessage, setShowMessage ] = useState(false)

  const cardItem = useSelector((state: { card: { items: CardItem[] } }) =>
    Array.isArray(state.card.items)
      ? state.card.items.find((obj) => obj.id === id)
      : undefined
  )

  const onClickAddBasket = () => {
    if (!isAuth) {
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 2400) 
      return
    }
    const item: CardItem = {
      id,
      title,
      img,
      price,
      count: 1,
    }
    dispatch(addItem(item))
  }

  const closeModalErr = () => {
    setShowMessage(false)
  }
  

  return (
    <div className="card">
      <div onClick={() => navigate(`/more-card/${id}`)} className="card-img">
        <img
          className={`card-img__inner ${id === 7 && 'modify'} ${id === 5 && 'modify-pad'}`}
          src={img}
        />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
      <div className="price-button">
        <div className="card-price">
          <p>{price} р</p>
        </div>

        {showMessage && !isAuth && (
          <ModalError 
          message='Вы должны быть авторизовыны что бы добавить товар в корзину' 
          onClose={closeModalErr} />
        )}

        <div onClick={onClickAddBasket} className="card-button">
          <div className="card-button__img">
            {cardItem ? <img src={checkIcon} alt="" /> : <img src={plusIcon} alt="" />}
          </div>
          <div className="wrapper-card__button">
            <button className="card-button__inner">{cardItem ? 'Добавлено' : 'Добавить'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
