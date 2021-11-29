import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllcate, insertcate, removecate, updatecate } from "../../api/categories";
export const itemcate = createAsyncThunk(
    'category/itemcate',
    async () => {
        const {data} = await getAllcate()
        return data
    }
)
export const createcate = createAsyncThunk(
    'category/createcate',
    async (category) => {
        const {data} = await insertcate(category)
        return data
    }
)
export const deletecate = createAsyncThunk(
    'category/removecate',
    async (id) => {
        const {data} = await removecate(id)
        return data
    }
)
export const changecate = createAsyncThunk(
    'category/changecate',
    async (category ) => {
        const {data} = await updatecate(category._id,category)
        console.log('daa',data)
        return data
    }
)