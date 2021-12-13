import { createAsyncThunk } from "@reduxjs/toolkit";
import { addOrder, getAllOrderApi, updateOrder } from "../../api/orderApi";
export const listOrderAction = createAsyncThunk(
    'orderSlice/listOrderAction',
    async () => {
        const {data} = await getAllOrderApi()
        return data
    }
)
export const addOrderAction = createAsyncThunk(
    'orderSlice/addOrder',
    async (e) => {
        const {data} = await addOrder(e)
        return data
    }
)

export const updateStatusAction = createAsyncThunk(
    'orderSlice/updateStatus',
    async (status ) => {
        console.log('status' ,status);
        const {data} = await updateOrder(status._id,status)
        console.log('daa',data)
        return data
    }
)