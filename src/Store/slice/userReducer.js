import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUser, removeUser, updateUser } from "../../api/user";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getAllUser, removeUser, updateUser } from "../../api/user";
const userList = createAsyncThunk(
    'user/userList',
    async (token) => {
        const { data } = await getAllUser(token)
        return data
    }
)
const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async (id, token) => {
        const { data } = await removeUser(id, token)
        return data
    }
)
const changeUser = createAsyncThunk(
    'user/changeUser',
    async (user, token) => {
        return updateUser(user._id, user, token).then(response => response.data)
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(userList.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(userList.fulfilled, (state, action) => {
            state.user = action.payload
            state.loading = false
        })
        builder.addCase(deleteUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.user.list = state.user.list.filter(item => item._id !== action.payload._id)
            state.loading = false
        })
        builder.addCase(changeUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(changeUser.fulfilled, (state, action) => {
            state.user.list += action.payload
            state.loading = false
        })
    }
})
export default userSlice