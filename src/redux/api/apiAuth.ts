import axios from "axios"

export const axiosStance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
})
