import { createSlice } from "@reduxjs/toolkit"
import { CARDS } from "../../data/data"
import { CardData } from "../../app/types/global"
// import { CARDS } from "../../data/data"

interface AssortState {
	data: CardData[]
	selectedCategory: string
}

const initialState: AssortState = {
    data: CARDS,
	selectedCategory: 'Все'
}


const assortSlice = createSlice({
    name: 'assort',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload
            state.data = action.payload === 'Все' ? CARDS : 
            CARDS.filter((card) => card.category === action.payload)
        }
    }
})

export const { setCategory } = assortSlice.actions
export default assortSlice.reducer