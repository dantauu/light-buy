import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthParams {
    email: string
    password: string
}

export interface BeforeAuthParams {
    user: {
        email: string
        password: string
    }
}

interface AuthState {
    data: AuthParams | null
    status: 'loading' | 'loaded' | 'error'
}

const axiosStance = axios.create({
	baseURL: 'http://localhost:4444',
})

export const fetchAuth = createAsyncThunk<AuthParams, BeforeAuthParams>(
    'auth/fetchAuth', async (params) => {
    const { data } = await axiosStance.post('/auth/login', params.user)
    return data
})

const initialState: AuthState = {
    data: null,
    status: 'loading',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
    reducers: {},
	extraReducers: (builder) => {
        builder
        .addCase(fetchAuth.pending, (state) => {
			state.status = 'loading'; 
            state.data = null;
		})
		.addCase(fetchAuth.fulfilled, (state, action) => {
			state.status = 'loaded';
            state.data = action.payload;
		})
        .addCase(fetchAuth.rejected, (state) => {
            state.status = 'error';
            state.data = null;
        })

	},
})

export default authSlice.reducer