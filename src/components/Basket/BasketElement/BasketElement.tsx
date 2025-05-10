import minusIcon from "../../../../public/assets/img/minus.svg"
import plusIcon from "../../../../public/assets/img/plus.svg"
import krestIcon from "../../../../public/assets/img/cross.svg"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  minusItem,
  plusItem,
  removeItem,
} from "../../../redux/slices/cardSlice"

type BasketElementProps = {
  img: string
  title: string
  price: number
  id: number
  count: number
}

export const BasketElement: FC<BasketElementProps> = ({ id, img, title }) => {
  const dispatch = useDispatch()

  const itemCalculate = useSelector((state: any) =>
    state.card.items.find((item: { id: number }) => item.id === id)
  )

  const onClickRemove = () => {
    dispatch(removeItem(id))
  }

  const onClickPlusItem = () => {
    dispatch(plusItem(id))
  }

  const onClickMinus = () => {
    dispatch(minusItem(id))
  }
  return (
    <div className="basket-card__wrapper">
      <div className="container">
        <div className="basket-card">
          <div className="basket-img__title">
            <div className="basket-card__img">
              <img
                className={`basket__card__img-inner ${id === 7 && "basket__help"}`}
                src={img}
              />
            </div>
            <div className="basket-card__title">
              <p>{title}</p>
            </div>
          </div>
          <div className="bascet-card__count">
            <div
              onClick={onClickMinus}
              className="basket-card-count-img__minus"
            >
              <img src={minusIcon} />
            </div>
            <div className="basket-card-count__inner">
              <p>{itemCalculate.count}</p>
            </div>
            <div
              onClick={onClickPlusItem}
              className="basket-card-count-img__plus"
            >
              <img src={plusIcon} />
            </div>
          </div>
          <div className="basket-card__price">
            <p>{itemCalculate.price * (itemCalculate.count || 1)}р</p>
          </div>
          <div onClick={onClickRemove} className="basket-card__krest">
            <img className="basket-krest__img" src={krestIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}
