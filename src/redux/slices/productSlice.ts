import { createSlice } from '@reduxjs/toolkit'
import { CardData } from '../../app/types/global'
import { api } from '../api/api'

interface ProducState {
	data: CardData[]
	oneProduct: any | null
}

const initialState: ProducState = {
	data: [],
	oneProduct: null
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
        getOneProguct: (state, action) => {
            const product = state.data.find(data => data.id === action.payload);
            // console.log('product', product)
            state.oneProduct = product || null;
        },
	},
		extraReducers: (builder) => {
			builder.addMatcher(
			api.endpoints.getCards.matchFulfilled,
			(state, action) => {
				state.data = action.payload
			}
		)}
    },
)

export const { getOneProguct } = productSlice.actions 

export default productSlice.reducer
