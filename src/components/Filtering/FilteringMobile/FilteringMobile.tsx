import { FC, useContext, useEffect, useState } from "react"
import { FilterItemProps } from "../Filtering"
import crossIcon from "../../../../public/assets/img/cross.svg"
import { CardContext } from "../../../pages/Home"
import { useDispatch } from "react-redux"
import { setRenderData } from "../../../redux/slices/renderCardSlice"
import rubleIcon from "../../../../public/assets/img/ruble.png"
import { FilterItemsMobile } from "../../../data/data"

const FilterInputItem: FC<FilterItemProps> = ({ text, id, onChange }) => {
  return (
    <label htmlFor={id}>
      <div className="price__input__form-mobile">
        <div className="price-wrapper__from">
          <input
            className="input-from__inner input__form__inner-mobile"
            placeholder={text}
            type="number"
            id={id}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <div className="price-ruble">
          <img className="price__ruble-mobile" src={rubleIcon} alt="" />
        </div>
      </div>
    </label>
  )
}

export const FilteringMobile = ({ setIsActive }: any) => {
  const dispatch = useDispatch()
  const { cardsData } = useContext(CardContext)
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
  const changeCategorys = (name: string) => {
    const filtered = cardsData.filter((card) => card.filter === name)
    dispatch(setRenderData(filtered))
  }

  return (
    <>
      <div className="container container__filter-mobile">
        <div className="mobile__filter-wrapper">
          <div
            onClick={() => setIsActive(false)}
            className="cross cross__mobile"
          >
            <img
              className="cross-icon cross__icon-mobile"
              src={crossIcon}
              alt=""
            />
          </div>
          <h2 className="filter-title title-mobile">Фильтрация</h2>
          <div className="price-wrapper price__wrapper-mobile">
            <h2 className="price-wrapper__text price__text-mobile">
              Цена от и до
            </h2>
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
            <h2 className="before-filter__title filter__title-mobile">Для</h2>
            <div className="before-filter__wrapper before__filter-mobile">
              {FilterItemsMobile.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    changeCategorys(item.name)
                  }}
                  className=""
                >
                  <div
                    onClick={() => setIsActive(false)}
                    className="after-filter__text after__mobile"
                  >
                    <div className="">
                      <p
                        className="filter-discount__inner
                                                discount__mobile"
                      >
                        {item.name}
                      </p>
                    </div>
                    <div className="">
                      <img className="mobile__img" src={item.img} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
