import { configureStore } from '@reduxjs/toolkit'
import card from './slices/cardSlice'
import product from './slices/productSlice'


export const store = configureStore({
	reducer: { 
        card,
        product
    },
})

export type RootState = ReturnType<typeof store.getState>