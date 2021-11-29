import { createSlice } from "@reduxjs/toolkit";
import { changecate, createcate, deletecate, itemcate } from "../action/categories";
export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: []        
    },
    extraReducers:  (builder)  =>{
            builder.addCase(itemcate.fulfilled, (state, action) => {
                        state.category = action.payload
            })
            builder.addCase(createcate.fulfilled, (state,aciton) => {
                        state.category += aciton.payload
            })
           
            builder.addCase(deletecate.fulfilled, (state, action) => {
                state.category = state.category.filter(item => item._id !== action.payload._id)
            })
            builder.addCase(changecate.fulfilled, (state,action) => {
                state.category += action.payload
            } )
        }
  })
  export default categorySlice