import { FC, useContext, useEffect, useState } from "react"
import plus from "../../../public/assets/img/plus.svg"
import minus from "../../../public/assets/img/minus.svg"
import rubleIcon from "../../../public/assets/img/ruble.png"
import filterIcon from "../../../public/assets/img/filter.svg"
import crossIcon from "../../../public/assets/img/cross.svg"
import { CardContext } from "../../pages/Home"
import { useDispatch } from "react-redux"
import { setRenderData } from "../../redux/slices/renderCardSlice"
import "./Filtering.scss"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { FilteringMobile } from "./FilteringMobile/FilteringMobile"

export type FilterItemProps = {
  text: string
  onClick: (text: string) => void
  onChange: (value: string) => void
  id: string
}

const FilterItems = [
  { id: 1, name: "Кухни" },
  { id: 2, name: "Уборной" },
  { id: 3, name: "Гостинной" },
  { id: 4, name: "Коридора" },
]

const FilterInputItem: FC<FilterItemProps> = ({ text, id, onChange }) => {
  return (
    <label htmlFor={id}>
      <div className="price-input__from">
        <div className="price-wrapper__from">
          <input
            className="input-from__inner"
            placeholder={text}
            type="number"
            id={id}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <div className="price-ruble">
          <img src={rubleIcon} alt="" />
        </div>
      </div>
    </label>
  )
}

export const Filtering = () => {
  const isMobile = useMediaQuery("(max-width: 719px)")
  const dispatch = useDispatch()
  const { cardsData } = useContext(CardContext)
  const [select, setSelect] = useState<string | null>(null)
  const handleSelect = (name: string) => {
    setSelect(name)
  }

  const clickCross = () => {
    setSelect(null)
    dispatch(setRenderData(cardsData))
  }
  const changeCategorys = (name: string) => {
    const filtered = cardsData.filter((card) => card.filter === name)
    dispatch(setRenderData(filtered))
  }

  //MENU
  const [isActive, setIsActive] = useState<boolean>(false)
  const onClickMenu = () => {
    setIsActive(!isActive)
  }
  const [activity, setActivity] = useState<boolean>(false)
  const onClickOpenFull = () => {
    setActivity(!activity)
  }

  //PRICE
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  useEffect(() => {
    applyFilters()
  }, [minPrice, maxPrice])

  const applyFilters = () => {
    let filteredPrice = cardsData
    const minPriceNum = parseInt(minPrice) || 1
    const maxPriceNum = parseInt(maxPrice) || Infinity

    filteredPrice = filteredPrice.filter((card) => {
      const price = card.price
      return price >= minPriceNum && price <= maxPriceNum
    })
    dispatch(setRenderData(filteredPrice))
  }
  return (
    <>
      {isMobile ? (
        <>
          <div className="filter-svg">
            <div className="filter-svg__text">
              <h2 className="filter-svg-text__inner">Фильтрация</h2>
            </div>
            <div onClick={() => onClickMenu()} className="filter-svg__img">
              <img className="filter-svg-img__inner" src={filterIcon} alt="" />
            </div>
          </div>
          {isActive && <FilteringMobile setIsActive={setIsActive} />}
        </>
      ) : (
        <>
          <div className="filter-main__wrapper">
            <div className="container">
              <h2 className="filter-title">Фильтрация</h2>
              <div className="price-wrapper">
                <h2 className="price-wrapper__text">Цена от и до</h2>
                <div className="price-input__wrapper">
                  <FilterInputItem
                    onChange={setMinPrice}
                    text="От"
                    onClick={() => {}}
                    id="minPrice"
                  />
                  <FilterInputItem
                    onChange={setMaxPrice}
                    onClick={() => {}}
                    text="До"
                    id="maxPrice"
                  />
                </div>
              </div>
              <div className="before-filter">
                <h2 className="before-filter__title">Для</h2>
                <div className="before-filter__wrapper">
                  {FilterItems.map((item, index) => (
                    <div
                      id={item.name}
                      key={index}
                      onClick={() => {
                        changeCategorys(item.name), handleSelect(item.name)
                      }}
                      className="after-filter"
                    >
                      <div
                        className={`after-filter__text ${
                          select === item.name && "selectedId"
                        }`}
                      >
                        <p className="filter-discount__inner">{item.name}</p>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation(), clickCross()
                        }}
                        className="after-filter-cross__img"
                      >
                        {select === item.name ? (
                          <img className="cross-img__inner" src={crossIcon} />
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <ul className={`filter-drop ${isActive ? "active" : ""}`}>
                <li className="filter-drop__item">
                  <button
                    onClick={() => {
                      changeCategorys("Детской"), handleSelect("Детской")
                    }}
                    className={`drop-item__inner ${
                      select === "Детской" ? "selectedId" : ""
                    }`}
                  >
                    Детской
                  </button>
                  <div
                    onClick={() => clickCross()}
                    className="after-filter-cross__img"
                  >
                    {select === "Детской" ? (
                      <img src={crossIcon} className="cross-img__inner" />
                    ) : null}
                  </div>
                </li>
                <li className="filter-drop__item">
                  <button
                    onClick={() => {
                      changeCategorys("Спальной"), handleSelect("Спальной")
                    }}
                    className={`drop-item__inner ${
                      select === "Спальной" ? "selectedId" : ""
                    }`}
                  >
                    Спальной
                  </button>
                  <div onClick={clickCross} className="after-filter-cross__img">
                    {select === "Спальной" ? (
                      <img src={crossIcon} className="cross-img__inner" />
                    ) : null}
                  </div>
                </li>
              </ul>
              <div style={{ position: "relative" }} className="">
                <label htmlFor="plus">
                  <div
                    onClick={() => {
                      onClickMenu(), onClickOpenFull()
                    }}
                    className={`open-full_wrapper ${
                      activity ? "activity" : ""
                    }`}
                  >
                    <div className="open-full__img">
                      <img
                        className="open-full-img__inner"
                        src={!activity ? plus : minus}
                        alt=""
                      />
                    </div>
                    <div className="open-full__text" id="plus">
                      <p className="open-full__inner">
                        {activity ? "Скрыть" : "Показать все"}
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
