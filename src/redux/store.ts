import { combineReducers, configureStore } from '@reduxjs/toolkit'
import card from './slices/cardSlice'
import product from './slices/productSlice'
import assort from './slices/assortSlice'
import { api } from './api/api'


const reducers = combineReducers({
	card,
		product,
		assort,
		[api.reducerPath]: api.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>