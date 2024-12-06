import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { useLocalStoreBasket } from '../../hooks/useLocalStoreBasket'

interface CardItem {
	id: number
	title: string
	price: number
	img: string
	count: number
}

interface intialStateProps {
	items: CardItem[]  
}

const storedItems = localStorage.getItem('basket')
const parsedItems: CardItem[] = storedItems ? JSON.parse(storedItems) : []

const initialState: intialStateProps = {
	items: parsedItems,
}

const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CardItem>) => {
			const existingItem = state.items.find(
				item => item.id === action.payload.id
			)
			if (!existingItem) {
				state.items.push({ ...action.payload, count: 1 })
			}
		},

		plusItem: (state, action: PayloadAction<number>) => {
			const existingItem = state.items.find(item => item.id === action.payload)
			if (existingItem) {
				existingItem.count++
			}
		},

		minusItem: (state, action: PayloadAction<number>) => {
			const existingItem = state.items.find(item => item.id === action.payload)
			if (existingItem && existingItem.count > 1) {
				existingItem.count--
			}
		},

		removeItem: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(obj => obj.id !== action.payload)
		},

		clearItem: state => {
			localStorage.removeItem('basket'),
			state.items = []
		},

		// Действие для загрузки данных из localStorage
		setItems: (state, action: PayloadAction<CardItem[]>) => {
			state.items = action.payload
		},
	},
})

export const { addItem, removeItem, clearItem, plusItem, minusItem, setItems } =
	cardSlice.actions
export default cardSlice.reducer
