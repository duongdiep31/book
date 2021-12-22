import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, insert, remove, search, update } from "../../api/product";
export const itemPrd = createAsyncThunk(
    'product/itemPrd',
    async (page) => {
        const {data} = await getAll(page)
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
export const searchItem = createAsyncThunk(
    'product/searchItem',
    async (value, page) => {
        const {data} = await search(value, page)
        return data
    }
)