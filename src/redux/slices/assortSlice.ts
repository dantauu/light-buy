import { createSlice } from "@reduxjs/toolkit"
import { CardData } from "../../app/types/global"
import { api } from "../api/api"

interface AssortState {
  data: CardData[]
  selectedCategory: string
}

const initialState: AssortState = {
  data: [],
  selectedCategory: "Все",
}

const assortSlice = createSlice({
  name: "assort",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload
      // state.data =
      // 	action.payload === 'Все'
      // 		? CARDS
      // 		: CARDS.filter(card => card.category === action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getCards.matchFulfilled,
      (state, action) => {
        state.data = action.payload
      }
    )
  },
})

export const { setCategory } = assortSlice.actions
export default assortSlice.reducer
