import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CardsServer } from "../../data/data";

const API_URL = 'https://6762e08317ec5852cae76a64.mockapi.io'
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['cards'],
	baseQuery: async (args, api, extraOption) => {
		await delay(2000)
		return fetchBaseQuery({
			baseUrl: API_URL,
		})(args, api, extraOption)
	},
	endpoints: builder => ({
		getCards: builder.query<CardsServer[], void>({
			query: () => '/dataCards',
		}),
	}),
})

export const { useGetCardsQuery } = api