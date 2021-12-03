import { createAsyncThunk } from "@reduxjs/toolkit"
import { signin, signup } from "../../api/auth"

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (user) => {
        const  {data}  = await signin(user)
        return data
    }
)
export const signUp = createAsyncThunk(
    'auth/signUp',
    async (userData) => {
        const { data } = await signup(userData)
        return data
    }
)
export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        return 'data'
    }
)