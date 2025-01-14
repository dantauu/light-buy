import { useDispatch, useSelector } from "react-redux"
import { setRenderData } from "../../../redux/slices/renderCardSlice"
import { useContext, useEffect, useState } from "react"
import { CardContext } from "../../../pages/Home"
import { setCategory } from "../../../redux/slices/assortSlice"
import { RootState } from "../../../redux/store"


const AssortementNav = [
	{ id: 1, name: 'Все' },
	{ id: 2, name: 'Колонки' },
	{ id: 3, name: 'Отопление' },
	{ id: 4, name: 'Сушилки' },
	{ id: 5, name: 'Видеоглазок' },
	{ id: 6, name: 'Камера' },
]

export const AssortementMobile = () => {
    const dispatch = useDispatch()
    const { cardsData } = useContext(CardContext)
	const { selectedCategory } = useSelector((state: RootState) => state.assort)
    const [select, setSelect] = useState<string>(selectedCategory)

    useEffect(() => {
            setSelect(selectedCategory)
        }, [selectedCategory])
    const handleSelect = (name: string) => {
            dispatch(setCategory(name))
            setSelect(name) 
            const filteredData = name === 'Все' ? cardsData : cardsData.filter((card: { category: string }) => 
                card.category === name)
            dispatch(setRenderData(filteredData)) 
        }
    return (
			<div className='assort-wrapper'>
				<div className='container'>
					<h2 className='assort-title assort__title-mobile'>Ассортимент</h2>
					<div className='mobile-wrapper'>
						<nav className='assort-nav'>
							<ul className='assort-list assort__list-mobile'>
								{AssortementNav.map((item, index) => (
									<li
										className={`assort-list__item list__item-mobile 
									${select === item.name ? 'select' : ''}`}
										key={index}
										onClick={() => {
											handleSelect(item.name)
										}}
									>
										<button className='assort-button assort__button-mobile'>{item.name}</button>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		)
}