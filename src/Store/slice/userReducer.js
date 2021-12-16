import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUser, removeUser, updateUser } from "../../api/user";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getAllUser, removeUser, updateUser } from "../../api/user";
 const userList = createAsyncThunk(
    'user/userList',
    async (token) => {
        const {data} = await getAllUser(token)
        return data
    }
)
 const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async (id,token) => {
        const {data} = await removeUser(id,token)
        return data.db
    }
)
 const changeUser = createAsyncThunk(
    'user/changeUser',
    async (user,token ) => {
        console.log('user',user);
        return updateUser(user._id,user,token).then(response => response.data)
        
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: []        
    },
    extraReducers:(builder)=>{
     
            builder.addCase(userList.fulfilled, (state, action) => {
                        state.user = action.payload
            })
            builder.addCase(deleteUser.fulfilled, (state, action) => {
                state.user = state.user.filter(item => item._id !== action.payload._id)
            })
            builder.addCase(changeUser.fulfilled, (state,action) => {
                state.user += action.payload
            } )
        }
  })
  export default userSlice