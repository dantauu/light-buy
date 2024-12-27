import axios from "axios"

export const axiosStance = axios.create({
	baseURL: 'http://localhost:4444',
})
