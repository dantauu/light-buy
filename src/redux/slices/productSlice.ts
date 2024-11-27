import { createSlice } from '@reduxjs/toolkit'
import { CARDS } from '../../data/data'
import { CardData } from '../../app/types/global'

interface ProducState {
	data: CardData[]
	oneProduct: any
}

const initialState: ProducState = {
	data: CARDS,
	oneProduct: null
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
        getOneProguct: (state, action) => {
            const product = state.data.find(data => data.id === action.payload);

            // console.log('product', product)
            state.oneProduct = product;
        }
    },
})

export const { getOneProguct } = productSlice.actions 

export default productSlice.reducer
