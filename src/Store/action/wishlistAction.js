import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllWishlistApi, insertWishlistApi, removeWishlistApi } from "../../api/wishlilst";
export const getAllWishlist = createAsyncThunk(
    'wishlist/getAllWishlist',
    async () => {
        const { data } = await getAllWishlistApi()
        return data
    }
)
export const addtoWishlist = createAsyncThunk(
    'wishlist/addtoWishlist',
    async (item) => {
        const { data } = await insertWishlistApi(item)
        return data
    }
)
export const removeWishlist = createAsyncThunk(
    'wishlist/removeWishlist',
    async (id) => {
        const { data } = await removeWishlistApi(id)
        console.log(data);
        return data._id
    }
)
