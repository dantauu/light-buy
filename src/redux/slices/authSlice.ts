import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//Вынести axios в отдельный компонент

export interface AuthParams {
    email: string
    password: string
    token: string
}

interface BeforeAuthParams {
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

//Сохраняем в localstorage
axiosStance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export const fetchAuth = createAsyncThunk<AuthParams, BeforeAuthParams>(
    'auth/fetchAuth', async (params) => {
    const { data } = await axiosStance.post<AuthParams>('/auth/login', params.user)
    return data
})

export const fetchAuthMe = createAsyncThunk(
	'auth/fetchAuthMe', async () => {
		const { data } = await axiosStance.get('/auth/me')
		return data
	}
)

const initialState: AuthState = {
    data: null,
    status: 'loading',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        }
    },
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

        .addCase(fetchAuthMe.pending, (state) => {
			state.status = 'loading'; 
            state.data = null;
		})
		.addCase(fetchAuthMe.fulfilled, (state, action) => {
			state.status = 'loaded';
            state.data = action.payload;
		})
        .addCase(fetchAuthMe.rejected, (state) => {
            state.status = 'error';
            state.data = null;
        })

	},
})

export const selectIsAuth = (state: any) => Boolean(state.auth.data)
export const { logout } = authSlice.actions 
export default authSlice.reducer
