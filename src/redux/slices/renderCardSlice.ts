import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CardData } from "../../app/types/global"
import { api } from "../api/api"

interface renderCardSliceProps {
    data: CardData[] | [],
    loading: boolean
}

const initialState: renderCardSliceProps = {
    data: [],
    loading: true
}


const renderCardSlice = createSlice({
	name: 'renderCard',
	initialState,
	reducers: {
		setRenderData: (state: any, action: PayloadAction<CardData[]>) => {
		    state.data = action.payload
		},
		setLoading: (state: any, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		},
	},
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.getCards.matchFulfilled,
            (state, action) => {
                state.data = action.payload
            }
        )
    }
})

export const { setRenderData, setLoading } = renderCardSlice.actions
export default renderCardSlice.reducer