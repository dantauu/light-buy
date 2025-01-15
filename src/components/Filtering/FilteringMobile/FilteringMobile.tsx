import { useContext, useEffect, useState } from "react"
import { FilterInputItem } from "../Filtering"
import crossIcon from '../../../../public/assets/img/cross.svg'
import { CardContext } from "../../../pages/Home"
import { useDispatch } from "react-redux"
import { setRenderData } from "../../../redux/slices/renderCardSlice"
import { Transition } from "react-transition-group"


const FilterItems = [
	{ id: 1, name: 'Кухни' },
	{ id: 2, name: 'Уборной' },
	{ id: 3, name: 'Гостинной' },
	{ id: 4, name: 'Коридора' },
	{ id: 5, name: 'Детской' },
	{ id: 6, name: 'Спальной' },
]

export const FilteringMobile = () => {
    const dispatch = useDispatch()
    const { cardsData } = useContext(CardContext)
	const [_showFilter, setShowFilter] = useState<boolean>(false)
    const [select, setSelect] = useState<string | null>(null)
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')

    useEffect(() => {
        applyFilters()
    }, [minPrice, maxPrice])

    const applyFilters = () => {
            let filteredPrice = cardsData
            const minPriceNum = parseInt(minPrice) || 1
            const maxPriceNum = parseInt(maxPrice) || Infinity
    
            filteredPrice = filteredPrice.filter(card => {
                const price = card.price
                return price >= minPriceNum && price <= maxPriceNum
            })
            dispatch(setRenderData(filteredPrice))
        }
        const changeCategorys = (name: string) => {
		    const filtered = cardsData.filter(card => card.filter === name)
		    dispatch(setRenderData(filtered))
		}

    const handleSelect = (name: string) => {
			setSelect(name)
		}
    const clickCross = () => {
			setSelect(null)
			dispatch(setRenderData(cardsData))
		}
    return (
			<>
				<Transition in={true} timeout={300} mountOnEnter unmountOnExit>
                    {(state) => (
                        <div className={`filtering__mobile ${state}`}>
                            <div className='container container__filter-mobile'>
						<div className='mobile__filter-wrapper'>
							<div onClick={() => setShowFilter(false)} className='cross'>
								<img className='cross-icon' src={crossIcon} alt='' />
							</div>
							<h2 className='filter-title'>Фильтрация</h2>
							<div className='price-wrapper'>
								<h2 className='price-wrapper__text'>Цена от и до</h2>
								<div className='price-input__wrapper'>
									<FilterInputItem
										onChange={setMinPrice}
										text='От'
										onClick={() => {}}
										id='minPrice'
									/>
									<FilterInputItem
										onChange={setMaxPrice}
										onClick={() => {}}
										text='До'
										id='maxPrice'
									/>
								</div>
							</div>
							<div className='before-filter'>
								<h2 className='before-filter__title'>Для</h2>
								<div className='before-filter__wrapper'>
									{FilterItems.map((item, index) => (
										<div
											id={item.name}
											key={index}
											onClick={() => {
												changeCategorys(item.name), handleSelect(item.name)
											}}
											className='after-filter'
										>
											<div
												className={`after-filter__text ${
													select === item.name && 'selectedId'
												}`}
											>
												<p className='filter-discount__inner'>{item.name}</p>
											</div>
											<div
												onClick={e => {
													e.stopPropagation(), clickCross()
												}}
												className='after-filter-cross__img'
											>
												{select === item.name ? (
													<img className='cross-img__inner' src={crossIcon} />
												) : null}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
                        </div>
                    )}
				</Transition>
			</>
		)
}