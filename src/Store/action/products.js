import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, insert, remove,related, search, update, trending, prdCategoryApi } from "../../api/product";
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
        const {data} = await update(product)
        return data
    }
)
export const searchItem = createAsyncThunk(
    'product/searchItem',
    async (page) => {
        const {data} = await search(page)
        return data
    }
)
export const relatedProductAction = createAsyncThunk(
    'product/relatedProductAction',
    async(id) => {
        const {data} = await related(id)
        return data
    }
)
export const trendingPrd = createAsyncThunk(
    'product/trendingPrd',
    async() => {
        const {data} = await trending()
        return data
    }
)
export const prdCategoryAction = createAsyncThunk(
    'product/prdCategoryAction',
    async () => {
        const {data} = await prdCategoryApi()
        return data
    }
)