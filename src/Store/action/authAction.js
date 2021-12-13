import { createAsyncThunk } from "@reduxjs/toolkit"
import { signin, signup } from "../../api/auth"

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (user) => {
        const  {data}  = await signin(user)
        console.log(data)
        return data
    }
)
export const orderAction = createAsyncThunk(
    'auth/signUp',
    async (order) => {
        const { data } = await signup(order)
        return data
    }
)
export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        return 'data'
    }
)