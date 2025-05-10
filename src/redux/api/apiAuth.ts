import axios from "axios"

export const axiosStance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4444",
})
