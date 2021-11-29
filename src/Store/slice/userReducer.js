import { createSlice } from "@reduxjs/toolkit";
import { changeUser, deleteUser, listUser } from "../action/userAction";
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: []        
    },
    reducers: {},
    extraReducers:(builder)=>{
            builder.addCase(listUser.fulfilled, (state, action) => {
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