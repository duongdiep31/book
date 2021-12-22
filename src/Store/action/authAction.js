import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { signin, signup } from "../../api/auth"

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (user) => {
        try {
        const  {data}  = await signin(user)
        console.log(data)
        toast.success('SuccessFully')
        return data
        } catch (error) {
            toast.error("Error Sign In")
        }
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