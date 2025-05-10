import { FC, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../../../redux/slices/cardSlice"
import checkIcon from "../../../../public/assets/img/check.svg"
import plusIcon from "../../../../public/assets/img/plus.svg"
import { useNavigate } from "react-router-dom"
// import { selectIsAuth } from '../../../redux/slices/authSlice'
import "./CardElement.scss"
import { Slide, toast } from "react-toastify"
import { selectIsAuth } from "../../../redux/slices/authSlice"
import ModalError from "../../ModalError/ModalError"

interface ItemCardProps {
  id: number
  title: string
  description: string
  img: string
  price: number
}

export interface CardItem {
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
  const [isNotify, setIsNotify] = useState(false)
  const isAuth = useSelector(selectIsAuth)
  const [showMessage, setShowMessage] = useState(false)

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
    if (!isNotify) {
      notify()
      setIsNotify(true)
    }
  }

  const closeModalErr = () => {
    setShowMessage(false)
  }
  const notify = () => {
    toast("Товар добавлен", {
      transition: Slide,
      theme: "light",
      autoClose: 2300,
    })
  }

  return (
    <div className="card">
      <div onClick={() => navigate(`/more-card/${id}`)} className="card-img">
        <img
          className={`card-img__inner ${id === 7 && "modify"} ${
            id === 5 && "modify-pad"
          } ${id === 10 && "pad-toilet"}
            ${id === 11 && "pad-sos"}`}
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
        <div onClick={onClickAddBasket} className="card-button">
          <div className="card-button__img">
            {cardItem ? (
              <img src={checkIcon} alt="" />
            ) : (
              <img src={plusIcon} alt="" />
            )}
          </div>
          <div className="wrapper-card__button">
            <button className="card-button__inner">
              {cardItem ? "Добавлено" : "Добавить"}
            </button>
            {showMessage && (
              <ModalError
                onClose={closeModalErr}
                message="Необходимо авторизоваться"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
