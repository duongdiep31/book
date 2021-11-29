import { createSlice } from "@reduxjs/toolkit";
import { changePrd, createPrd, deletePrd, itemPrd } from "../action/products";
export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: []        
    },
    reducers: {},
    extraReducers:  (builder)  =>{
            builder.addCase(itemPrd.fulfilled, (state, action) => {
                        state.product = action.payload
            })
            builder.addCase(createPrd.fulfilled, (state,aciton) => {
                        state.product += aciton.payload
            })
           
            builder.addCase(deletePrd.fulfilled, (state, action) => {
                state.product = state.product.filter(item => item._id !== action.payload._id)
            })
            builder.addCase(changePrd.fulfilled, (state,action) => {
                state.product += action.payload
            } )
        }
  })
  export default productSlice