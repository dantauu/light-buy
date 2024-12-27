import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosStance } from "../api/apiAuth";


//Вынести axios в отдельный компонент

export interface ServerErrors {
	type: string
	value: string
	msg: string
	path: string
	location: string
}

export interface AuthParams {
    token: string
    message?: string
    msg?: string
    email: string
    password: string
    name: string
}

export interface BeforeAuthParams {
	user: {
		email: string
		password: string
        name?: string
	}
}

interface AuthState {
    data: AuthParams | null
    status: 'loading' | 'loaded' | 'error'
    errors?: ServerErrors[]
}

//Сохраняем в localstorage
axiosStance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

//Получение пользователя
export const fetchAuthMe = createAsyncThunk(
    'auth/fetchAuthMe', async () => {
        const { data } = await axiosStance.get('/auth/me')
		return data
	}
)

//Авторизация
export const fetchAuth = createAsyncThunk<AuthParams, BeforeAuthParams>(
    'auth/fetchAuth', async (params, { rejectWithValue }) => {
        try {
        const { data } = await axiosStance.post<AuthParams>(
            '/auth/login', params.user
        )
            return data
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message)
        }
})

//Регистрация
export const fetchRegister = createAsyncThunk<AuthParams, BeforeAuthParams>(
	'auth/fetchRegister', async (params, { rejectWithValue }) => {
		try {
			const { data } = await axiosStance.post<AuthParams>(
				'auth/register', params.user
			)
			return data 
		} catch (error: any) {
			return rejectWithValue(error.response?.data || error.message)
		}
	}
)

const initialState: AuthState = {
    data: null,
    status: 'loading',
    errors: []
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
            state.errors = []
		})
		.addCase(fetchAuth.fulfilled, (state, action) => {
			state.status = 'loaded';
            state.data = action.payload;
            state.errors = []
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


         .addCase(fetchRegister.pending, (state) => {
            state.status = 'loading';
            state.data = null;
            state.errors = []
        })
         .addCase(fetchRegister.fulfilled, (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
            state.errors = []
        })
         .addCase(fetchRegister.rejected, (state) => {
            state.status = 'error';
            state.data = null;
        })

	},
})

export const selectIsAuth = (state: any) => Boolean(state.auth.data)
export const { logout } = authSlice.actions 
export default authSlice.reducer
