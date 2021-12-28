import { createAsyncThunk } from "@reduxjs/toolkit";
import { addOrder, getAllOrderApi, updateOrder } from "../../api/orderApi";
export const listOrderAction = createAsyncThunk(
    'orderSlice/listOrderAction',
    async (page) => {
        const {data} = await getAllOrderApi(page)
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
    async (data ) => {
       return updateOrder(data)
       .then(response=> response.data)
    }
)