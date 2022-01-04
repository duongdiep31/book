import { createSlice } from "@reduxjs/toolkit";
import { changePrd, createPrd, deletePrd, itemPrd, prdCategoryAction, relatedProductAction, searchItem, trendingPrd } from "../action/products";
 const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        loading: false
    },
    reducers: {},
    extraReducers:  (builder)  =>{
            builder.addCase(itemPrd.pending,(state,action)=>{
                    state.loading = true
            })
            builder.addCase(itemPrd.fulfilled, (state, action) => {
                        state.product = action.payload
                        state.loading = false

            })
            builder.addCase(createPrd.pending,(state,action)=>{
                state.loading = true
            })
            builder.addCase(createPrd.fulfilled, (state,aciton) => {
                        state.product += aciton.payload
                        state.loading = false
            })
            builder.addCase(deletePrd.pending,(state,action)=>{
                state.loading = true
            })
            builder.addCase(deletePrd.fulfilled, (state, action) => {
                state.product.list = state.product.list.filter(item => item._id !== action.payload._id)
                state.loading= false
            })
            builder.addCase(changePrd.fulfilled, (state,action) => {
                state.product += action.payload
            } )
            builder.addCase(searchItem.fulfilled, (state,action) => {
                state.product = action.payload
            })
            builder.addCase(relatedProductAction.fulfilled, (state,action) => {
                state.product = action.payload
            } )
            builder.addCase(trendingPrd.fulfilled, (state, action) => {
                state.product = action.payload
            })
            builder.addCase(prdCategoryAction.fulfilled, (state, action) => {
                state.product = action.payload
            })
        }
  })
export default productSlice