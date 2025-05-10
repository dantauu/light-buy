import { MORECARD } from "../../data/data"
import { Swiper, SwiperSlide } from "swiper/react"
import { BackBtn } from "../shared/BackBtn/BackBtn"
import { Pagination } from "swiper/modules"
import { useSelector, useDispatch } from "react-redux"
import { addItem } from "../../redux/slices/cardSlice"
import { FC, useState } from "react"
import { Slide, toast } from "react-toastify"
import "./MoreCard.scss"

type InformationProps = {
  name: string
  text: string | any
}

type MoreCardProps = {
  title: string
  img: string
  price: number
  id: number
}

interface CardItem {
  id: number
  title: string
  price: number
  img: string
  count: number
}

export const MoreInformationCard = ({ name, text }: InformationProps) => {
  return (
    <div className="more-card__country">
      <div className="more-card-country__text">
        <p className="more__card__country__text-mobile">{name}</p>
      </div>
      <div
        style={{
          borderBottom: "1px dotted rgb(203, 203, 203)",
          width: "230px",
        }}
      ></div>
      <div className="more-card-country__inner">
        <h3 className="more__card__country__inner-mobile">{text}</h3>
      </div>
    </div>
  )
}

export const MoreCardInformation: FC<MoreCardProps> = ({
  title,
  img,
  price,
  id,
}) => {
  const dispatch = useDispatch()
  const [isNotify, setIsNotify] = useState<boolean>(false)

  console.log(title, img, price)

  const onClickAddBasket = () => {
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
  const notify = () => {
    toast("Товар добавлен", {
      transition: Slide,
      theme: "light",
      autoClose: 2700,
    })
  }

  const cardItem = useSelector((state: any) =>
    state.card.items.find((obj: { id: number }) => obj.id === Number(id))
  )
  console.log(cardItem)
  const card = MORECARD.find((card) => Number(card.id) === id)

  //Slider
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  }

  return (
    <div className="more-wrapper">
      <div className="container">
        <BackBtn />
        <div className="more-card__info">
          <div className="more-card__img">
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className={`more-card-img__inner 
										${id === 7 && "modify-card"}
										${id === 2 && "modify-padding"}`}
                  src={card?.img}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src={card?.imgTwo} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="wrapper__mobile">
            <div className="more-card__midle">
              <MoreInformationCard
                name={"Страна производства"}
                text={card?.country}
              />
              <MoreInformationCard name={"Цвет"} text={card?.color} />
              <MoreInformationCard name={"Год выпуска"} text={card?.date} />
              <MoreInformationCard name="Поддержка AI" text={card?.supportAI} />
              <MoreInformationCard
                name="Управление с телефона"
                text={card?.management}
              />
              <MoreInformationCard name="Гарантия" text={card?.warranty} />
              <MoreInformationCard
                name="Срок гарантии"
                text={card?.warrantyTerm}
              />
              <MoreInformationCard name="Ширина" text={card?.width} />
              <MoreInformationCard name="Высота" text={card?.height} />
            </div>
            <div className="more-card__right">
              <div className="more-card__title">
                <h2>{card?.title}</h2>
              </div>
              <div className="gap-wrapper">
                <div className="more-card__price">
                  <h3 className="more-card-price__inner">{card?.price}р</h3>
                </div>
                <div onClick={onClickAddBasket} className="more-card__btn">
                  <button className="more-card-btn__inner">
                    {cardItem ? "Добавлено" : "Добавить в корзину"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-title">
          <h2 className="description-title__inner">Описание</h2>
        </div>
        <div className="more-card__description">
          <p>{card?.description}</p>
        </div>
      </div>
    </div>
  )
}
