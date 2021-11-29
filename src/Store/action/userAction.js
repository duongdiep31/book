import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUser, removeUser, updateUser } from "../../api/user";
export const listUser = createAsyncThunk(
    'user/itemPrd',
    async () => {
        const {data} = await getAllUser()
        return data
    }
  )
export const deleteUser = createAsyncThunk(
    'user/removeUser',
    async (id) => {

        const {data} = await removeUser(id)
        console.log('data',data.db);
        return data.db
    }
)
export const changeUser = createAsyncThunk(
    'user/changeUser',
    async (user ) => {
        const {data} = await updateUser(user._id,user)
        return data
    }
)