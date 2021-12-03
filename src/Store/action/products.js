import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, insert, remove, update } from "../../api/product";
export const itemPrd = createAsyncThunk(
    'product/itemPrd',
    async () => {
        const {data} = await getAll()
        return data
    }
  )
export const createPrd = createAsyncThunk(
    'product/createPrd',
    async (product) => {
        const {data} = await insert(product)
        return data
    }
)
export const deletePrd = createAsyncThunk(
    'product/removePrd',
    async (id) => {
        const {data} = await remove(id)
        return data
    }
)
export const changePrd = createAsyncThunk(
    'product/changePrd',
    async (product ) => {
        const {data} = await update(product._id,product)
        return data
    }
)