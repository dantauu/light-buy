import { configureStore } from '@reduxjs/toolkit'
import card from './slices/cardSlice'

export const store = configureStore({
	reducer: { 
        card
    },
})

export type RootState = ReturnType<typeof store.getState>