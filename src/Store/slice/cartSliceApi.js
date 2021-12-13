import { createSlice } from "@reduxjs/toolkit";
import { addtocartApi, getAllCartApi, removeCart } from "../action/cartAction";
 const cartSliceApi = createSlice({
    name: 'cartApi',
    initialState: {
        cartApi: [], loading: false
    },
    extraReducers: (builder) => {
            builder.addCase(getAllCartApi.pending,(state, action) =>{
                state.loading = true
            })
            builder.addCase(getAllCartApi.fulfilled, (state, action) => {
                state.cartApi = action.payload
                state.loading = false
            })
            builder.addCase(addtocartApi.pending, (state, action) => {
                state.loading = true
            })
            builder.addCase(addtocartApi.fulfilled, (state, action) => {
                state.cartApi.push(action.payload)
                state.loading = false
            })
            builder.addCase(removeCart.fulfilled, (state, action) => {
                state.cartApi = state.cartApi.filter(item => item._id !== action.payload)
            })
    }
 
  })
  export default cartSliceApi