import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUser, removeUser, updateUser } from "../../api/user";
export const userList = createAsyncThunk(
    'user/userList',
    async (token) => {
        const {data} = await getAllUser(token)
        return data
    }
)
export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async (id,token) => {
        const {data} = await removeUser(id,token)
        return data.db
    }
)
export const changeUser = createAsyncThunk(
    'user/changeUser',
    async (user,token ) => {
        return updateUser(user._id,user,token).then(response=> response.data)
    }
)