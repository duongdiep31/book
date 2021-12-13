import { createSlice } from "@reduxjs/toolkit";
import { addOrderAction, listOrderAction, updateStatusAction } from "../action/orderAction";
 const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: {
        order: [], loading: false
    },
    extraReducers: (builder) => {
            builder.addCase(listOrderAction.fulfilled, (state, action) => {
                state.order = action.payload
            })
            builder.addCase(addOrderAction.fulfilled, (state, action) => {
                state.order += action.payload
            })
            builder.addCase(updateStatusAction.fulfilled, (state, action) => {
                state.order += action.payload
            })
    }
 
  })
  export default orderSlice