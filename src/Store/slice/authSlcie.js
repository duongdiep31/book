import { createSlice } from "@reduxjs/toolkit";
import {  logout, signIn } from "../action/authAction";
 const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auth: {}, isAuthenticated: false, loading: false,
        message: '',
        loading: false

    },
    extraReducers:  (builder)  =>{
        builder.addCase(signIn.pending, (state, action ) => {
                state.loading = true
        })
            builder.addCase(signIn.fulfilled, (state, action) => {
                        state.auth = action.payload
                        state.loading = false
            })
            builder.addCase(logout.fulfilled, (state, action) => {
                state.auth = undefined
            })
        }
  })
  export default authSlice