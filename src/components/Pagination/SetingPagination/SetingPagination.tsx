import { useState } from "react"
import { CARDS } from "../../../data/data"
import Card from "../../Card/Card"


export function SetingPagination() {
    const [ cardItems, setCardItem ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ cardPerPage ] = useState(10)

    const lastCardsIndex = currentPage * cardPerPage
    const firstCardsIndex = lastCardsIndex - cardPerPage
    const currentCard = CARDS.slice(firstCardsIndex, lastCardsIndex)

    return (
			<div className='container'>
				<Card cardItems={currentCard} />
			</div>
		)
}