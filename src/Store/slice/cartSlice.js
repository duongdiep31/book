import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router";
import { addtocart, getCartitem } from "../action/cartAction";
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []        
    },
    extraReducers:  (builder)  =>{
            builder.addCase(getCartitem.fulfilled, (state, action) => {
                        state.cart = action.payload
            })
            builder.addCase(addtocart.fulfilled, (state,aciton) => {
                        state.cart += aciton.payload,
                        <Navigate to='/cart' />
            })
            builder.addCase(deletecate.fulfilled, (state, action) => {
                state.cart = state.cart.filter(item => item._id !== action.payload)
            })
        }
  })
  export default cartSlice