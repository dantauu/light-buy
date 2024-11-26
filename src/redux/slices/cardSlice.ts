import { createSlice } from "@reduxjs/toolkit";

interface CardItem {
	id: number
	title: string
	price: number
	img: string
	count: number
}

const initialState = {
    items: [] as CardItem[],
}


const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		addItem(state, action) {
			const existingItem = state.items.find(
				item => item.id === action.payload.id
			)
			if (!existingItem) {
				state.items.push({...action.payload, count: 1})
			}
		},
		
		plusItem(state, action) {
			const existingItem = state.items.find(item => item.id === action.payload)
			if (existingItem) {
				existingItem.count++
			}
		},

		minusItem(state, action) {
			const existingItem = state.items.find(item => item.id === action.payload)
			if (existingItem && existingItem.count > 0) {
				existingItem.count--
			}
		},

		removeItem(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload)
		},
		clearItem(state) {
			state.items = []
		},
	},
})

export const { addItem, removeItem, clearItem, plusItem, minusItem } = cardSlice.actions
export default cardSlice.reducer