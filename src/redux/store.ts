import { configureStore } from '@reduxjs/toolkit'
import card from './slices/cardSlice'
import product from './slices/productSlice'
import assort from './slices/assortSlice'


export const store = configureStore({
	reducer: {
		card,
		product,
		assort
	},
})

export type RootState = ReturnType<typeof store.getState>