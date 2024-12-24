import { combineReducers, configureStore } from '@reduxjs/toolkit'
import card from './slices/cardSlice'
import product from './slices/productSlice'
import assort from './slices/assortSlice'
import renderCard from './slices/renderCardSlice'
import auth from './slices/authSlice'
import { api } from './api/api'


const reducers = combineReducers({
		card,
		product,
		assort,
		renderCard,
		auth,
		[api.reducerPath]: api.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch